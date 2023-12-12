const db = require('../database/models/')
const sequelize = db.sequelize
const jwt = require('jsonwebtoken');

const cartController = {

    cartDetail: async (req, res) => {
        try {
            const authToken = req.cookies['auth_token'];
            if (!authToken) {
                return res.status(401).render('401');
            }
    
            const payload = jwt.verify(authToken, 'riverEsVida');
            const userId = payload.userId;
    
            const openCart = await db.Cart.findAll({
                where: { 
                    id_user: userId, 
                    finalized: false 
                },
                include: [{
                    model: db.CartDetail,
                    as: 'cartDetails', 
                    include: [{
                        model: db.Product,
                        as: 'product' 
                    }]
                }],
                raw: true
            });
            if(!openCart[0].total_price) return res.redirect('/')
            // console.log(openCart[0].total_price, 'opning cart');
            if (!openCart) {
                return res.render('productCart', { cart: [] });
            }
            
            console.log('open',openCart)
            const cart = openCart.map(product => {
                return {
                    total_price: product.total_price,
                    purchase_date: product.purchase_date,
                    quantity: product['cartDetails.quantity'],
                    id_product: product['cartDetails.product.id_product'],
                    name_product: product['cartDetails.product.name_product'],
                    description: product['cartDetails.product.description'],
                    price: product['cartDetails.product.price'],
                    image: product['cartDetails.product.image'],
                }
            })
            let cantidad = 0;
            let precioTotal = 0;
            cart.forEach(product => {
                console.log(product.quantity)
                console.log(product.price)
                cantidad += product.quantity
                precioTotal += product.price * product.quantity
                console.log(precioTotal)
            })

            const total = {
                cantidad,
                precioTotal
            }
            console.log(total)
            // Renderiza la vista con los detalles del carrito
            return res.render('productCart', { cart, total });
        } catch (error) {
            console.error('Error al recuperar el carrito:', error);
            return res.status(500).send('Error al procesar la solicitud');
        }
    },
    

    // Ejemplo de función para agregar un producto al carrito
    addProductToCart: async (req, res) => {
        const productId = req.body.id;
        const quantity = req.body.cantidad;
        try {
            const authToken = req.cookies['auth_token']
            let userId
            if (authToken) {


                const payload = jwt.verify(authToken, 'riverEsVida');
                const user = await db.User.findOne({ where: { id_user: payload.userId } });
                userId = user.id_user
            }


            // Encuentra o crea un carrito para el usuario

            let cart = await db.Cart.findOne({ where: { id_user: userId, finalized: false } });
            if (!cart) {
                cart = await db.Cart.create({ id_user: userId, total_price: 0, purchase_date: Date.now() });
            }

            // Encuentra el producto para obtener el precio actual
            const product = await db.Product.findByPk(productId);
            if (!product) {
                return res.status(404).send('Producto no encontrado');
            }

            // Crea o actualiza el detalle del carrito
            const [cartDetail, created] = await db.CartDetail.findOrCreate({
                where: { id_cart: cart.id_cart, id_product: productId },
                defaults: {
                    quantity: quantity,
                    price_at_purchase: product.price
                }
            });

            if (!created) {

                cartDetail.quantity += quantity;
                cartDetail.price_at_purchase = product.price;
                await cartDetail.save();
            }


            cart.total_price += product.price * quantity;
            await cart.save();

            res.status(200).send('Producto agregado al carrito');
        } catch (error) {
            console.error('Error al agregar producto al carrito:', error);
            res.status(500).send('Error al procesar la solicitud');
        }
    },
    finalizePurchase: async (req, res) => {
        console.log('purchase complete')
        try {
            const authToken = req.cookies['auth_token'];
            if (!authToken) {
                return res.status(401).send('Usuario no autenticado');
            }

            const payload = jwt.verify(authToken, 'riverEsVida');
            const userId = payload.userId;

            const currentCart = await db.Cart.findOne({ where: { id_user: userId, finalized: false } });
            if (currentCart) {
                currentCart.finalized = true; 
                currentCart.purchase_date = new Date(); 
                await currentCart.save();
            }

            
            const newCart = await db.Cart.create({ id_user: userId, total_price: 0, purchase_date: new Date() });

            res.status(200).json('Compra finalizada y nuevo carrito creado');
        } catch (error) {
            console.error('Error al finalizar la compra:', error);
            res.status(500).send('Error al procesar la solicitud');
        }
    }

}

module.exports = cartController