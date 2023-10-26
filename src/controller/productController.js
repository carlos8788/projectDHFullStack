const db = require('../database/models/')
const sequelize = db.sequelize

const { constructProductFromRequest, toProductData } = require('../utils/dto');

const productController = {
    
    productDetail: (req, res) => {
        const { id } = req.params
        // const producto = products.find(p => p.id === id)

        return res.render('productDetail', { producto })
    },

    formCreateProduct: async (req, res) => {
        try {
            const [colors, categories, sizes, brands] = await Promise.all([
                db.Color.findAll({ raw: true }),
                db.Category.findAll({ raw: true }),
                db.Size.findAll({ raw: true }),
                db.Brand.findAll({ raw: true })
            ]);

            const options = {
                colors,
                categories,
                sizes,
                brands
            };

            // Si necesitas revisar las opciones en consola:
            console.log(options);

            return res.render('formCreateProduct', options);

        } catch (error) {
            console.error("Error fetching data:", error);
            // Aquí puedes manejar el error, por ejemplo, renderizar una página de error, etc.
            return res.status(500).send("Internal Server Error");
        }
    },



    createProduct: async (req, res) => {
        try {
            const productData = constructProductFromRequest(req);

            const query = await db.Product.create(productData);

            console.log(query);

            return res.json(query);
        } catch (error) {
            console.error("Error creating product:", error);
            return res.status(500).json({ error: "Failed to create product" });
        }
    },

    products: async (req, res) => {
        const productsToDB = await db.Product.findAll({
            include: [
                { model: db.Category, as: 'category', attributes: ['name'] },
                { model: db.Color, as: 'color', attributes: ['name'] },
                { model: db.Size, as: 'size', attributes: ['name'] },
                { model: db.Brand, as: 'brand', attributes: ['name'] }
            ]
        });

        const products = productsToDB.map(product => toProductData(product));
        console.log(products);
        return res.render("products", { products })
    }
}

module.exports = productController