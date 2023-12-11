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

            return res.json(products)
        } catch (error) {
            console.log(error);
        }

    },
    getProduct: async (req, res) => {
        try {
            const product = await db.Product.findOne({
                where: { id: req.params.id },
                include: [
                    { model: db.Category, as: 'category', attributes: ['name'] },
                    { model: db.Color, as: 'color', attributes: ['name'] },
                    { model: db.Size, as: 'size', attributes: ['name'] },
                    { model: db.Brand, as: 'brand', attributes: ['name'] }
                ],
                raw: true
            })
            return res.json(product)
        } catch (error) {
            return res.json(error.message)
        }
    },



    updateProduct: async (req, res) => {
        try {

            const { id } = req.params;
            const updatedProduct = await db.Product.update(req.body, {
                where: { id: id }
            });

            if (updatedProduct) {

                return res.json({ message: 'Producto actualizado con éxito' });
            } else {

                return res.status(404).json({ message: 'Producto no encontrado' });
            }
        } catch (error) {

            console.log(error);
            return res.status(500).json(error.message);
        }
    },


    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedProduct = await db.Product.destroy({
                where: { id: id }
            });

            if (deletedProduct) {

                return res.json({ message: 'Producto eliminado con éxito' });
            } else {

                return res.status(404).json({ message: 'Producto no encontrado' });
            }
        } catch (error) {

            console.log(error);
            return res.status(500).json(error.message);
        }
    },
    
    createProduct: async (req, res) => {
        try {
            
            const newProduct = await db.Product.create(req.body);
            return res.status(201).json(newProduct); 
        } catch (error) {
            console.error('Error creating new product:', error);
            return res.status(500).json({ message: 'Error al crear el producto', error: error.message });
        }
    }

}

module.exports = apiProductsController