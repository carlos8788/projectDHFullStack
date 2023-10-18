// const productController = require("./productsController") //importamos controlador de productos
// const productsService = require('../services/product.services')




// const products = productsService.getProducts()

const mainController = {
    home: (req, res) => {
        const mostVisited = products.filter(p => p.category === 'Más visitado')
        
        return res.render('home', { mostVisited })
    },

    productDetail: (req, res) => {
        const { id } = req.params
        const producto = products.find(p => p.id === id)
        return res.render('productDetail', { producto })
    },

    cartDetail: (req, res) => {
        return res.render('productCart')
    },


    formCreateProduct: (req, res) => {
        return res.render('formCreateProduct')
    },

    products: (req, res) => {
        const productos = []
        
        return res.render("products", { productos })
    }
}

module.exports = mainController