'use strict';
import { OptionsInterface } from '../../typings/seeders';
import { BoardInterface } from '../../typings/seeders';

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; 
}


module.exports = {
    up: async (queryInterface: any, Sequelize:any) => {
        options.tableName = 'Boards';
        return queryInterface.bulkInsert(options, [
            {
                name: 'Project Planning',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Development',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'QA',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface: any, Sequelize:any) => {
        options.tableName = 'Boards';
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(options, {
            name: { [Op.in] : ['']}
        }, {});
    },
};