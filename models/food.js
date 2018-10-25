'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    popularity: DataTypes.INTEGER
  }, {});
  Food.associate = function(models) {
    Food.belongsToMany(models.User, {through: 'Food_Users'})
  };
  return Food;
};