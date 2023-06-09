const authService = require('../services/auth.service')
const jwt = require('jsonwebtoken')

const authController = {
    register: async (req, res) => {
        try {
            const { email, password, pseudo } = req.body
            const user = await authService.create(email,pseudo,password)

            if (user) {
                return res.sendStatus(200)
            }

        }catch (e) {
            console.log(e)
            if (e.name === "SequelizeUniqueConstraintError") {
                console.log("test")
                return res.status(401).json({ message: 'Email deja utilisé'})
            }
            res.sendStatus(401)
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body

            const user = await authService.login(email, password)

            if (user) {

                const payload = {
                    id : user.id
                }

                const options = {
                    expiresIn: '2h'
                }

                const token = await jwt.sign(payload, process.env.JWT_SECRET, options)

                res.setHeader('Authorization', `Bearer ${token}`)
                res.status(200).json({user:user})
            }

        }catch (e) {
            console.log(e)

            switch (e.message) {
                case 'Invalid password':
                    res.status(401).json({message: "Invalid password"})
                    break
                case 'Invalid email':
                    res.status(401).json({message: e.message})
                    break
                default:
                    res.status(401).json({message: 'An error has been detected'})
                    break
            }
        }
    },
    autologin: async (req,res) => {
        try {
            const token = req.headers.authorization && req.headers.authorization.split(" ")[1]
            const user = await authService.findUserByToken(token)
            if (user) {
                res.status(200).json({user: user})

            }else {
                res.sendStatus(401)
            }
        }catch (e) {
            console.log(e)
            res.sendStatus(401)
        }
    }
}


module.exports = authController
