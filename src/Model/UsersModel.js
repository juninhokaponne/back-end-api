const { Sequelize, DataTypes } = require('sequelize');
const database = require('../database');

const User = database.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
      },
      creatadAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    });

User.sync(); 

module.exports = User;