"use strict";

import { OptionsInterface } from "../../typings/seeders"
let options: OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable("Lists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      boardId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Boards', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      listId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Lists', key: 'id' },
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },
  down: async (queryInterface: any, Sequelize: any) => {
    options.tableName = "Lists";
    return queryInterface.dropTable(options);
  }
};