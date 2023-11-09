// const sequelize = require('../database/config/config');

module.exports = (sequelize, dataTypes) => {
    const alias = "Product";
    const cols = {
        id_product: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_product: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: dataTypes.REAL,
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(255),
            allowNull: true
        },
        id_category: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Category',
                key: 'id_category'
            }
        },
        id_color: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Color',
                key: 'id_color'
            }
        },
        id_size: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Size',
                key: 'id_size'
            }
        },
        id_brand: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Brand',
                key: 'id_brand'
            }
        }
    }

    const config = {
        timestamps: false,
        tableName: 'product'
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'id_category'
        });
        Product.belongsTo(models.Color, {
            as: 'color',
            foreignKey: 'id_color'
        });
        Product.belongsTo(models.Size, {
            as: 'size',
            foreignKey: 'id_size'
        });
        Product.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'id_brand'
        });
    }

    return Product;  
}
