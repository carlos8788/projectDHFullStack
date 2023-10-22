module.exports = (sequelize, dataTypes) => {
    const alias = "Color";
    const cols = {
        id_color: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
            unique: true
        }
    }

    const config = {
        timestamps: false,
        tableName: 'color',
    }

    const Color = sequelize.define(alias, cols, config)

    return Color;  
}
