'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Name can not be Null !"},
        notEmpty : {msg : "Name can not be Empty !"}
      }
    },
    email: 
    {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Email can not be Null !"},
        notEmpty : {msg : "Email can not be Empty !"},
        isEmail : {msg : "Wrong Email Format !"}
      }
    },
    password:
    {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Password can not be Null !"},
        notEmpty : {msg : "Password can not be Empty !"},
      }  
    },
    phone:
    {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Phone can not be Null !"},
        notEmpty : {msg : "Phone can not be Empty !"},
        isNumeric : {msg : "Phone Number only be Numeric !"},
        len: { args : [10,11] , msg: "Wrong Phone Length !"}
      } 
    }, 
    image:
    {
      type:DataTypes.STRING,
      allowNull : true,
    }
  },
   {
    sequelize,
    modelName: 'User',
    tableName:'users'
  });
  return User;
};