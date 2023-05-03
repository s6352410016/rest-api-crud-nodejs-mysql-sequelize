const {Sequelize} = require('sequelize');

const conn = new Sequelize(
    'student_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = conn;