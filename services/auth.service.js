const db = require("../models/index")
const bcrypt = require('bcrypt')
const authService = {
    create: async (email, pseudo, password) => {

        const hashedPassword = bcrypt.hashSync(password, 10)

        const user = await db.User.create({email: email, pseudo: pseudo, password: hashedPassword})

        return {
            email: user.email,
            pseudo: user.pseudo
        }
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

        return {
            id: user.id,
            email: user.email,
            pseudo: user.pseudo
        }

    }
}


module.exports = authService
