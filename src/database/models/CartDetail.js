module.exports = (sequelize, dataTypes) => {
    const alias = "CartDetails";
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
                model: 'Carts',
                key: 'id_cart'
            }
        },
        id_product: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Products',
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
        timestamps: false
    }

    const CartDetail = sequelize.define(alias, cols, config);

    CartDetail.associate = function(models) {
        CartDetail.belongsTo(models.Carts, {
            as: 'cart',
            foreignKey: 'id_cart'
        });
        
        CartDetail.belongsTo(models.Products, {
            as: 'product',
            foreignKey: 'id_product'
        });
    }

    return CartDetail;  
}
