const { DataTypes } = require('sequelize');
const conn = require('../config/conn');

const studentModel = conn.define('student', {
    stuName: {
        type: DataTypes.STRING
    },
    stuAddress: {
        type: DataTypes.STRING
    },
    stuTel: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

module.exports = studentModel;