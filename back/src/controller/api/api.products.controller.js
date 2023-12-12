const { toProductData } = require('../../utils/dto')
const db = require('../../database/models')

const apiProductsController = {
    allProducts: async (req, res) => {
        try {
            const productsToDB = await db.Product.findAll({
                include: [
                    { model: db.Category, as: 'category', attributes: ['name'] },
                    { model: db.Color, as: 'color', attributes: ['name'] },
                    { model: db.Size, as: 'size', attributes: ['name'] },
                    { model: db.Brand, as: 'brand', attributes: ['name'] }
                ]
            });
            const products = productsToDB.map(product => toProductData(product));
            const categoriesToDB = await db.Category.count();

            const payload = {
                products,
                categories: categoriesToDB
            }
            return res.json(payload)
        } catch (error) {
            console.log(error);
        }

    },
    getProduct: async (req, res) => {
        try {
            const product = await db.Product.findOne({
                where: { id_product : req.params.id},
                include: [
                    { model: db.Category, as: 'category', attributes: ['name'] },
                    { model: db.Color, as: 'color', attributes: ['name'] },
                    { model: db.Size, as: 'size', attributes: ['name'] },
                    { model: db.Brand, as: 'brand', attributes: ['name'] }
                ],
                raw: true
            })
            console.log(product)
            return res.json(product)
        } catch (error) {
            return res.json(error.message)
        }
    }

}

module.exports = apiProductsController