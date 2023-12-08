// const sequelize = require('../database/config/config');
// const Sequelize = require('sequelize');  // Asegúrate de requerir Sequelize para usar DataTypes
const {toProductData} = require('../utils/dto')
const db = require('../database/models/')
const sequelize = db.sequelize

const mainController = {
    home: async (req, res) => {
        const productsToDB = await db.Product.findAll({
            include: [
                { model: db.Category, as: 'category', attributes: ['name'] },
                { model: db.Color, as: 'color', attributes: ['name'] },
                { model: db.Size, as: 'size', attributes: ['name'] },
                { model: db.Brand, as: 'brand', attributes: ['name'] }
            ]
        });
        const products = productsToDB.map(product => toProductData(product));
        // const mostVisited = products.filter(p => p.category === 'Más visitado')
        console.log(req.user)
        return res.render('home', { products })
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