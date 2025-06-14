import { Model, DataTypes, Optional } from "sequelize";

module.exports = (sequelize: any) => {
    interface CardAttributes {
        id: number;
        title: string;
        description: string;
        listId: number;
        createdAt: Date;
        updatedAt: Date;
    }

    type CardCreationAttributes = Optional<CardAttributes, "id">;

    class Card extends Model<CardAttributes, CardCreationAttributes>
        implements CardAttributes
    {
        declare id: number;
        declare title: string;
        declare description: string;
        declare listId: number;
        declare createdAt: Date;
        declare updatedAt: Date;

        public static associations: {
            list: any;
            // Define other associations if needed
        };
    }
    Card.init(
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
            description: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            listId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            createdAt: "",
            updatedAt: ""
        },
        {
            sequelize,
            tableName: "cards",
            modelName: "Card",
        }
    );
    return Card;
};