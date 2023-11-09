module.exports = (sequelize, dataTypes) => {
    const alias = "Category";
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
        timestamps: false,
        tableName: 'category',
    }

    const Category = sequelize.define(alias, cols, config)

    return Category;  
}
