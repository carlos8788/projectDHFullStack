module.exports = (sequelize, dataTypes) => {
    const alias = "Sizes";
    const cols = {
        id_size: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(5),
            allowNull: false
        }
    }

    const config = {
        timestamps: false
    }

    const Size = sequelize.define(alias, cols, config)

    return Size;  
}
