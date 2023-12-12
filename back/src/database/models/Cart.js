module.exports = (sequelize, dataTypes) => {
    const alias = "Cart";
    const cols = {
        id_cart: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id_user'
            }
        },
        total_price: {
            type: dataTypes.REAL,
            allowNull: false
        },
        purchase_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        finalized: {
            type: dataTypes.BOOLEAN,
            defaultValue: false
        },
    }

    const config = {
        timestamps: false,
        tableName: 'cart',
    }

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models) {
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'id_user'
        });
        // Asociación con CartDetail
        Cart.hasMany(models.CartDetail, {
            as: 'cartDetails',
            foreignKey: 'id_cart'
        });
    }

    return Cart;
}
