'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductCategories', [
      {
        CategoryId: [1],
        ProductId: [4],        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [2],
        ProductId: [3],     
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [1],
        ProductId: [1],      
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [3],
        ProductId: [4],       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [1],
        ProductId: [2],    
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