
const DataTypes = require('sequelize').DataTypes;

module.exports = function (sequelize) {
    return sequelize.define('contacts', {
        idContact: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(245),
            allowNull: false
        }
    }, {
            tableName: 'contacts'
        });
};