'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    name: {type: DataTypes.STRING, validate: {
      isUnique: function (value, cb) {
        if (value) {
          Food.find({
            where: {
              name: value
            }
          }).then(function (data) {
            if (data) {
              cb('Food already exist')
            } else {
              cb()
            }
          }).catch(function (err) {
            cb(err)
          });
        }
      }
    }},
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    popularity: {type: DataTypes.INTEGER, defaultValue: 0}
  }, {});
  Food.associate = function(models) {
    // associations can be defined here
    Food.belongsToMany(models.User, {through: 'Food_Users'})
  };
  return Food;
};