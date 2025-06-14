import { Model, DataTypes } from 'sequelize';


module.exports = (sequelize: any) => {
    class List extends Model {
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
                type: DataTypes.STRING,
                allowNull: false,
            },
            boardId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            position: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            sequelize,
            tableName: 'lists',
            modelName: 'List',
        }
    );

    return List;
};