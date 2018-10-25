'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    Email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email must be valid!"
        }
      }
    }
  }, {
      hooks: {
        beforeCreate: (User, options) => {
          User.role = "Customer"
        }
      }
    });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Food, {through: 'Food_Users'})
  };
  return User;
};