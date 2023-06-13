
const { Sequelize, DataTypes} = require('sequelize')
const userModel = require('./user.model')
const eventModel = require('./event.model')
const eventUserModel = require('./user.event.model')

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
db.EventUser = eventUserModel(db.sequelize)

db.User.hasMany(db.Event)
db.Event.belongsTo(db.User)


db.Event.belongsToMany(db.User, { through: db.EventUser });
db.User.belongsToMany(db.Event, { through: db.EventUser });
module.exports = db
