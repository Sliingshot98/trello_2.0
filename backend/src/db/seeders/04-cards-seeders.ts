
'use strict';
import { OptionsInterface } from '../../typings/seeders';
import { Card } from '../../typings/seeders';

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    up: async (queryInterface: any, Sequelize:any) => {
        options.tableName = 'Cards';
        return queryInterface.bulkInsert(options, [
            {
                title: 'Design the homepage',
                description: 'Create a wireframe for the homepage layout',
                listId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Set up the database',
                description: 'Create tables and relationships for the project',
                listId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Write unit tests',
                description: 'Ensure all functions have corresponding unit tests',
                listId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: async (queryInterface: any, Sequelize:any) => {
        options.tableName = 'Cards';
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(options, {
            title: { [Op.in]: [''] },
            description: { [Op.in]: [''] },
            listId: { [Op.in]: [1, 2, 3] }
        }, {});
    }
};
// Compare this snippet from backend/src/typings/seeders.d.ts: