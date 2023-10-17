module.exports = (sequelize, dataTypes) => {
    const alias = "Categories";
    const cols = {
        id_category: {
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

    const Category = sequelize.define(alias, cols, config)

    return Category;  
}
