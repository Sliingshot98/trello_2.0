import { Model, DataTypes } from 'sequelize';
import Boards from './02-boards';


interface ListAttributes {
    id: number;
    title: string;
    boardId: number;
    position: number;
    createdAt: Date;
    updatedAt: Date;
};
type ListCreationAttributes = Omit<ListAttributes, 'id' | 'createdAt' | 'updatedAt'>;

module.exports = (sequelize: any) => {
    class List extends Model<ListAttributes, ListCreationAttributes> implements ListAttributes {
        declare id: number;
        declare title: string;
        declare boardId: number;
        declare position: number;
        declare createdAt: Date;
        declare updatedAt: Date;

        public static associations: {
            cards: any;
            board: any;
        };
    }

    List.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            boardId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Boards,
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            position: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            sequelize,
            tableName: 'Lists',
            modelName: 'List',
        }
    );

    return List;
};
export default module.exports;