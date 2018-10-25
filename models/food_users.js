'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food_Users = sequelize.define('Food_Users', {
    UserId: DataTypes.INTEGER,
    FoodId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Food_Users.associate = function(models) {
    // associations can be defined here
    Food_Users.belongsTo(models.Food),
    Food_Users.belongsTo(models.User)
  };
  return Food_Users;
};