const userService = require('../services/user.service')

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
    }

}


module.exports = userController
