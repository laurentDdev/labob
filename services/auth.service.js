const db = require("../models/index")
const UserDTO = require('../DTO/user.dto')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const authService = {
    create: async (email, pseudo, password) => {

        const hashedPassword = bcrypt.hashSync(password, 10)

        const user = await db.User.create({email: email, pseudo: pseudo, password: hashedPassword})

        return {
            email: user.email,
            pseudo: user.pseudo
        }
    },
    findUserByToken: async (token) => {
        return jwt.verify(token,process.env.JWT_SECRET, (err,payload) => {
            const { id } = payload
            return authService.findUserById(id)
        })
    },
    findUserById: async (id) => {
        const user = await db.User.findOne({where: {id: id}})

        if (user) {
            return new UserDTO(user.id, user.email, user.pseudo, user.bio, user.avatar)
        }
        return null
    },
    login: async (email, password) => {

        const user = await db.User.findOne({ where: {email: email}})

        if (!user) {
            throw{
                message: "Invalid email"
            }
        }

        const isSame = bcrypt.compareSync(password, user.password)

        if (!isSame) {
            throw {
                message: "Invalid password"
            }
        }

        return new UserDTO(user.id, user.email, user.pseudo, user.bio, user.avatar)

    }
}


module.exports = authService
