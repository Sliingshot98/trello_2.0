'use strict';
import { OptionsInterface } from '../../typings/seeders';
import { BoardInterface } from '../../typings/seeders';

let options: OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;
}


module.exports = {
    up: async (queryInterface: any) => {
        options.tableName = 'Boards';
        return queryInterface.bulkInsert(options, [
            {
                id: 1,
                title: 'Project Planning',
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                userId: 2,
                title: 'Development',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                userId: 3,
                title: 'QA',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface: any, Sequelize: any) => {
        options.tableName = 'Boards';
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(options, {
            name: { [Op.in]: [''] }
        }, {});
    },
};