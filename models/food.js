'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    popularity: DataTypes.INTEGER
  }, {});
  Food.associate = function(models) {
    // associations can be defined here
  };
  return Food;
};