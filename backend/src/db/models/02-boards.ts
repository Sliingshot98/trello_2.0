import { Model, DataTypes, Optional } from 'sequelize';
import Users from './01-users';

interface BoardAttributes {
    id: number;
    title: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
};

type BoardCreationAttributes = Optional<BoardAttributes, 'id'>

module.exports = (sequelize: any) => {
    class Board extends Model<BoardAttributes, BoardCreationAttributes> implements BoardAttributes {
        declare id: number;
        declare userId: number;
        declare title: string;
        declare createdAt: Date;
        declare updatedAt: Date;

        public static associations: {
            lists: any;
            user: any;

        };
    }

    Board.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Users,
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            title: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true,
                },

            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            tableName: 'Boards',
            modelName: 'Board',
        }
    );

    return Board;
};
export default module.exports;