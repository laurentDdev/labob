
const { Sequelize, ModelStatic, DataTypes} = require("sequelize")


/**
 *
 * @param sequelize
 * @returns {ModelStatic}
 */
module.exports = (sequelize) => {
    return sequelize.define('User', {
        pseudo: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(300),
            allowNull: false
        }
    })
}
