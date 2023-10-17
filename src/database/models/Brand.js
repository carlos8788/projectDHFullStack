module.exports = (sequelize, dataTypes) => {
    const alias = "Brands";
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
        timestamps: false
    }

    const Brand = sequelize.define(alias, cols, config)

    return Brand;  
}
