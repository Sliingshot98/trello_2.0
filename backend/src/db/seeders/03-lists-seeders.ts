'use strict';
import { OptionsInterface } from '../../typings/seeders';
import { List } from '../../typings/seeders';

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {        
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
    up: async (queryInterface: any, Sequelize:any) => {
        options.tableName = 'Lists';
        return queryInterface.bulkInsert(options, [
            {
                name: 'To Do',
                boardId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'In Progress',
                boardId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Done',
                boardId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    }
    ,
    down: async (queryInterface: any, Sequelize:any) => {
        options.tableName = 'Lists';
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(options, {
            name: { [Op.in]: [''] },
            boardId: { [Op.in]: [1, 2, 3] }
        }, {});
    }
};