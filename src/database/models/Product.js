module.exports = (sequelize, dataTypes) => {
    const alias = "Products";
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
                model: 'Categories',
                key: 'id_category'
            }
        },
        id_color: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Colors',
                key: 'id_color'
            }
        },
        id_size: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Sizes',
                key: 'id_size'
            }
        },
        id_brand: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Brands',
                key: 'id_brand'
            }
        }
    }

    const config = {
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Categories, {
            as: 'category',
            foreignKey: 'id_category'
        });
        Product.belongsTo(models.Colors, {
            as: 'color',
            foreignKey: 'id_color'
        });
        Product.belongsTo(models.Sizes, {
            as: 'size',
            foreignKey: 'id_size'
        });
        Product.belongsTo(models.Brands, {
            as: 'brand',
            foreignKey: 'id_brand'
        });
    }

    return Product;  
}
