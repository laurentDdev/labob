const db = require('../models/index')
const userDto = require('../DTO/user.dto')

const userService = {
    findAll: async () => {
        const users = await db.User.findAll()

        return users.map(user => new userDto(user.id,user.email,user.pseudo,user.bio,user.avatar) )
    },
    update: async (id,user,pseudo,bio, image) => {
        console.log(id, user.id)

        if (Number(id) !== Number(user.id)) throw new Error('Invalide author')
        console.log(user)
        await db.User.update({pseudo, bio,avatar: image}, {where: {id}})
        return await db.User.findOne({where: {id}})
    }
}


module.exports = userService
