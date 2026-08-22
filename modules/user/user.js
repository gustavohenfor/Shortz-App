// local do arquivo: .modules/user/user.js
// definião da tabela 'users'

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');


const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
         bio: {
         type: DataTypes.STRING(255),
         allowNull: true
        },
        curso: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        // campo profilePicture
        profilePicture: {
         type: DataTypes.STRING,
         allowNull: true,
         defaultValue: 'default-profile.png'
        },
         // campo isBlocked
         isBlocked: {
         type: DataTypes.BOOLEAN,
         defaultValue: false
         },
         // campo isAdmin
         isAdmin: {
         type: DataTypes.BOOLEAN,
         defaultValue: false
      }

    },
    {
        timestamps: true,
        tableName: 'users'
    }
);

module.exports = User;