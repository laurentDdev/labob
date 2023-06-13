const db = require('../models/index')
const userDto = require('../DTO/user.dto')

const userService = {
    findAll: async () => {
        const users = await db.User.findAll()

        return users.map(user => new userDto(user.id,user.email,user.pseudo,user.bio,user.avatar) )
    },
    update: async (id,user,pseudo,bio, image) => {
        if (id !== user.id) throw new Error('Invalide author')
        console.log(user)
        const updatedUser = await db.User.update({pseudo, bio,avatar: image}, {where: {id}})
        return updatedUser
    }
}


module.exports = userService
