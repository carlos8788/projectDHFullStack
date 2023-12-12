const db = require('../../database/models/')
const sequelize = db.sequelize


const cartController = {

    getCarts: async (req, res) => {
        try {
            const carts = await db.Cart.findAll({
                include: [{
                    model: db.CartDetail,
                    as: 'cartDetails',
                    include: [{
                        model: db.Product,
                        as: 'product' 
                    }]
                }]
            });

            res.json(carts);
        } catch (error) {
            console.error('Error al obtener los carritos:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    },


    getCartById: async (req, res) => {
        const cartId = req.params.id; 

        try {
            const cart = await db.Cart.findOne({
                where: { id_cart: cartId },
                include: [{
                    model: db.CartDetail,
                    as: 'cartDetails',
                    include: [{
                        model: db.Product,
                        as: 'product' 
                    }] 
                }]
            });

            if (cart) {
                res.json(cart);
            } else {
                res.status(404).json({ error: 'Carrito no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el carrito:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

}

module.exports = cartController