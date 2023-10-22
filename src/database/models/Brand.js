module.exports = (sequelize, dataTypes) => {
    const alias = "Brand";
    const cols = {
        id_brand: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    }

    const config = {
        timestamps: false,
        tableName: 'brand',
    }

    const Brand = sequelize.define(alias, cols, config)

    return Brand;  
}
