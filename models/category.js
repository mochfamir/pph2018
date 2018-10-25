'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING, validate: {
        isUnique: function (value, cb) {
          if (value) {
            Category.find({
              where: {
                name: value
              }
            }).then(function (data) {
              if (data) {
                cb('Category already exist')
              } else {
                cb()
              }
            }).catch(function (err) {
              cb(err)
            });
          }
        }
      }
    }
  }, {});
  Category.associate = function (models) {
    // associations can be defined here
  };
  return Category;
};