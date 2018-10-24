'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food_Users = sequelize.define('Food_Users', {
    UserId: DataTypes.INTEGER,
    FoodId: DataTypes.INTEGER
  }, {});
  Food_Users.associate = function(models) {
    // associations can be defined here
  };
  return Food_Users;
};