
const { Sequelize, ModelStatic, DataTypes} = require("sequelize")




/**
 * @param sequelize {Sequelize}
 * @return ModelStatic
 */
module.exports =  (sequelize) => {
    return sequelize.define('Event', {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        type: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        startEvent: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endEvent: {
            type: DataTypes.DATE,
            allowNull: false
        },
        repeatEvent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nbPlace : {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}
