module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'nosecones',
      'shape',
      Sequelize.ENUM('conical', 'ogive'),
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'nosecones',
      'shape',
      Sequelize.ENUM('conical', 'ogive'),
    );
  },
};
