'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Food', [{
    name: "Fried Rice",
    price: 30000,
    category: "Main Courses" ,
    popularity: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Fries",
    price: 5000,
    category: "Appetizers" ,
    popularity: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: "Ice Cream",
    price: 12000,
    category: "Desserts" ,
    popularity: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: "Water",
    price: 2000,
    category: "Drinks" ,
    popularity: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Food', null, {});
  }
};
