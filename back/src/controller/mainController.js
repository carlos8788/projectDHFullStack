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

        return res.render('home', { products, notFound: false })
    },

    formCreateProduct: (req, res) => {
        return res.render('formCreateProduct')
    },

}

module.exports = mainController