const { toProductData } = require('../../utils/dto')
const db = require('../../database/models')

const apiMainController = {
    home: async (req, res) => {
        try {
            console.log('products');
            const productsToDB = await db.Product.findAll({
                include: [
                    { model: db.Category, as: 'category', attributes: ['name'] },
                    { model: db.Color, as: 'color', attributes: ['name'] },
                    { model: db.Size, as: 'size', attributes: ['name'] },
                    { model: db.Brand, as: 'brand', attributes: ['name'] }
                ]
            });
            const products = productsToDB.map(product => toProductData(product));

            return res.json(products)
        } catch (error) {
            console.log(error);
        }

    }
}
console.log(apiMainController);
module.exports = apiMainController