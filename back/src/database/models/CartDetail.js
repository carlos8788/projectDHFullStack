module.exports = (sequelize, dataTypes) => {
    const alias = "CartDetail";
    const cols = {
        id_cart_detail: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_cart: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Cart',
                key: 'id_cart'
            }
        },
        id_product: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Product',
                key: 'id_product'
            }
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        price_at_purchase: {
            type: dataTypes.REAL,
            allowNull: false
        }
    }

    const config = {
        timestamps: false,
        tableName: 'cart_detail',
    }

    const CartDetail = sequelize.define(alias, cols, config);

    CartDetail.associate = function(models) {
        CartDetail.belongsTo(models.Cart, {
            as: 'cart',
            foreignKey: 'id_cart'
        });
        
        CartDetail.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'id_product'
        });
    }

    return CartDetail;  
}
