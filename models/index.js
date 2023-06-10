
const { Sequelize, DataTypes} = require('sequelize')
const userModel = require('./user.model')
const eventModel = require('./event.model')

const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD} = process.env
let sequelize;

// Si on est en test -> On initialise avec sqlite 'in memory'
if( process.env.NODE_ENV === 'test') {
    sequelize = new Sequelize('sqlite::memory:',  { logging : false } )
}
else {
    sequelize= new Sequelize(DB_NAME,DB_USER,DB_PASSWORD, {
        host: DB_HOST,
        dialect: "mysql"
    })
}
const db = {}

db.sequelize = sequelize

db.User = userModel(db.sequelize)

db.Event = eventModel(db.sequelize)

db.User.hasMany(db.Event)
db.Event.belongsTo(db.User)

module.exports = db
