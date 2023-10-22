// const sequelize = require('../database/config/config');
// const Sequelize = require('sequelize');  // Asegúrate de requerir Sequelize para usar DataTypes
const db = require('../database/models/')
const sequelize = db.sequelize

const mainController = {
    home: async (req, res) => {
        // const mostVisited = products.filter(p => p.category === 'Más visitado')
        const products = await db.Product.findAll()
        // const test = await db.Product
        // console.log(test);
        // const products = []
        const mostVisited = products.filter(p => p.category === 'Más visitado')
        
        return res.render('home', { mostVisited })
    },

    productDetail: (req, res) => {
        const { id } = req.params
        // const producto = products.find(p => p.id === id)
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