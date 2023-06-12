const db = require('../models/index')
const userDto = require('../DTO/user.dto')

const userService = {
    findAll: async () => {
        const users = await db.User.findAll()

        return users.map(user => new userDto(user.id,user.email,user.pseudo,user.bio,user.avatar) )
    }
}


module.exports = userService
