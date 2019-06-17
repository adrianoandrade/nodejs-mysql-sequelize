const dotenv = require('dotenv');
dotenv.config();

const config = {
    dataBase: {
        host: process.env.HOST,
        dataBase: process.env.DATABASE,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
};

module.exports = config;