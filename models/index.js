
const { Sequelize } = require('sequelize')

const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD} = process.env
const db = {
    sequelize: new Sequelize(DB_NAME,DB_USER,DB_PASSWORD, {
        host: DB_HOST,
        dialect: "mysql"
    })
}


module.exports = db
