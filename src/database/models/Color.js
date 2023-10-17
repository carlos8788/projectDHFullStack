module.exports = (sequelize, dataTypes) => {
    const alias = "Colors";
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
        timestamps: false
    }

    const Color = sequelize.define(alias, cols, config)

    return Color;  
}
