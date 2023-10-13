const productsController = require("./productsController") //importamos controlador de productos
const productsService = require('../services/product.services')

const products = productsService.getProducts()

const productController = {

    productDetail: (req, res) => {
        const { id } = req.params
        const producto = products.find(p => p.id === id)

        return res.render('productDetail', {producto})
    },

    formCreateProduct: (req, res) => {
        return res.render('formCreateProduct')
    },

    products: (req, res) => {
        const productos = productsController.obtenerProductos();
        console.log(productos);
        return res.render("products", { productos })
    }
}

module.exports = productController