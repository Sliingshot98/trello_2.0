import { Model, DataTypes, Optional } from 'sequelize';


interface BoardAttributes {
    id: number;
    title: string;
    createdAt: Date;
    updatedAt: Date;
};

type BoardCreationAttributes = Optional<BoardAttributes, 'id'>

module.exports = (sequelize: any) => {
    class Board extends Model<BoardAttributes, BoardCreationAttributes> implements BoardAttributes {
        declare id: number;
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
            tableName: 'boards',
            modelName: 'Board',
        }
    );

    return Board;
};
