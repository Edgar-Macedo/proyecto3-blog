const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Posts = db.define('posts', {
    id:{
        type: DataTypes.BIGINT,
        autoincrement: true,
        primaryKey: true
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    userName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    isPublished:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }
})

module.exports = Posts