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
                return res.status(401).json({ message: 'Email already used'})
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
                console.log("test")
                res.sendStatus(200)
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
    }
}


module.exports = authController
