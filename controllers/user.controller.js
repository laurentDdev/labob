const userService = require('../services/user.service')
const authService = require('../services/auth.service')

const userController = {

    findAll: async (req, res) => {
        try {
            const users = await userService.findAll()
            if (users) {
                res.status(200).json({users})
            }
        }catch (e) {
            console.log(e)
            res.sendStatus(401)
        }
    },
    update: async (req, res) => {
        try {
            console.log('test')
            const {pseudo, bio} = req.body
            const imageName = req.file.filename.split('.')[0]
            const {id} = req.params
            const token = req.headers['authorization'].split(' ')[1]
            const user = await authService.findUserByToken(token)
            const updatedUser = await userService.update(id,user,pseudo, bio,imageName)

            if (updatedUser) {
                res.status(200).json({updatedUser})
            }

        }catch (e) {
            console.log(e)
            res.sendStatus(401)
        }
    }

}


module.exports = userController
