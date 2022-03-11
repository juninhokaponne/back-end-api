'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      isAdmin: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users');
  }
};
