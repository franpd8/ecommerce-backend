'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductOrders', [
      {
        OrderId: 1,
        ProductId: 4,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 2,
        ProductId: 2,       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 1,
        ProductId: 1,       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 3,
        ProductId: 3,       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 4,
        ProductId: 2,      
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
