'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bill', {
      billID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      customerName: {
        type: Sequelize.STRING
      },
      customerPhoneNumber: {
        type: Sequelize.STRING
      },
      customerAddress: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      paymentType: {
        type: Sequelize.INTEGER
      },
      shipCost: {
        type: Sequelize.FLOAT
      },
      promoID: {
        type: Sequelize.INTEGER
      },
      totalCost: {
        type: Sequelize.FLOAT
      },
      statusID: {
        type: Sequelize.INTEGER
      },
      note: {
        type: Sequelize.STRING
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bill');
  }
};