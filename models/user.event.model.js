
const { Sequelize, ModelStatic, DataTypes} = require("sequelize")
const db = require('./index')

/**
 *
 * @param sequelize
 * @returns {ModelStatic}
 */
module.exports = (sequelize) => {
    return sequelize.define('UserEvents', {
        EventId: {
            type: DataTypes.INTEGER,
            references: {
                model: db.Event, // 'Movies' would also work
                key: 'id'
            }
        },
        UserId: {
            type: DataTypes.INTEGER,
            references: {
                model: db.User, // 'Actors' would also work
                key: 'id'
            }
        }
    })
}
