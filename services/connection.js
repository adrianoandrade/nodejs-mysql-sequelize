var Sequelize = require('sequelize');
var dataBase = require('../config').dataBase;

var connection = new Sequelize(dataBase.dataBase, dataBase.user, dataBase.password,
    { host: dataBase.host, dialect: 'mysql' });

module.exports = connection;