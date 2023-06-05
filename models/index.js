
const { Sequelize } = require('sequelize')
const userModel = require('./user.model')

const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD} = process.env
const db = {
    sequelize: new Sequelize(DB_NAME,DB_USER,DB_PASSWORD, {
        host: DB_HOST,
        dialect: "mysql"
    }),
}

db.User = userModel(db.sequelize)


module.exports = db
