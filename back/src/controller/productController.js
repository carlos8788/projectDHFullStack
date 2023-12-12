const db = require('../database/models/')
const sequelize = db.sequelize

const { constructProductFromRequest, toProductData } = require('../utils/dto');

const productController = {

    productDetail: async (req, res) => {
        const { id } = req.params
        const product = await db.Product.findOne({
            where: { id_product: id },
            include: [
                { model: db.Category, as: 'category', attributes: ['name'] },
                { model: db.Color, as: 'color', attributes: ['name'] },
                { model: db.Size, as: 'size', attributes: ['name'] },
                { model: db.Brand, as: 'brand', attributes: ['name'] }
            ],
            raw: true
        })
        const productParse = {
            id_product: product.id_product,
            name_product: product.name_product,
            description: product.description,
            price: product.price,
            stock: product.stock,
            image: product.image,
            category: product['category.name'],
            color: product['color.name'],
            size: product['size.name'],
            brand: product['brand.name']
        }
        console.log(product)
        return res.render('productDetail', { product: productParse })
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


            return res.render('formCreateProduct', options);

        } catch (error) {
            console.error("Error fetching data:", error);

            return res.status(500).send("Internal Server Error");
        }
    },



    createProduct: async (req, res) => {
        try {
            const productData = constructProductFromRequest(req);

            const query = await db.Product.create(productData);

            // return res.redirect('/product/formCreateProduct');
            return res.redirect('/');
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
        console.log(productsToDB)
        const products = productsToDB.map(product => toProductData(product));

        return res.render("products", { products, notFound: null })
    },

    searchProducts: async (req, res) => {
        const data = req.query.search

        const queryDB = await db.Product.findAll({
            include: [{
                model: db.Category,
                as: 'category',
                where: {
                    name: {
                        [db.Sequelize.Op.like]: `%${data}%`
                    }
                },
                attributes: ['name']
            },
            { model: db.Color, as: 'color', attributes: ['name'] },
            { model: db.Size, as: 'size', attributes: ['name'] },
            { model: db.Brand, as: 'brand', attributes: ['name'] }],
            raw: true
        });

        if (queryDB.length === 0) return res.render('searchProducts', { notFound: `No se encontraron productos relacionados a: ${data}` })

        const products = queryDB.map(product => {
            return {
                id_product: product.id_product,
                name_product: product.name_product,
                description: product.description,
                price: product.price,
                stock: product.stock,
                image: product.image,
                category: product['category.name'],
                color: product['color.name'],
                size: product['size.name'],
                brand: product['brand.name']
            };
        });

        return res.render('searchProducts', { products, notFound: null })
    },
    editProduct: async (req, res) => {
        const { id } = req.params
        const product = await db.Product.findOne({
            where: { id_product: id },
            include: [
                { model: db.Category, as: 'category', attributes: ['name'] },
                { model: db.Color, as: 'color', attributes: ['name'] },
                { model: db.Size, as: 'size', attributes: ['name'] },
                { model: db.Brand, as: 'brand', attributes: ['name'] }
            ],
            raw: true
        })
        const productParse = {
            id_product: product.id_product,
            name_product: product.name_product,
            description: product.description,
            price: product.price,
            stock: product.stock,
            image: product.image,
            category: product['category.name'],
            color: product['color.name'],
            size: product['size.name'],
            brand: product['brand.name']
        }
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

        return res.render('editProduct', { product: productParse, options })
    },

    updateProduct: async (req, res) => {
        const { id } = req.params;
        const productData = constructProductFromRequest(req);

        try {
            const product = await db.Product.findByPk(id);

            if (product) {

                const result = await product.update(productData);
                console.log(result)

                return res.status(200).json('Product updated');
            } else {
                return res.status(404).send('Producto no encontrado');
            }
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
            return res.status(500).send('Error interno del servidor');
        }
    }

}

module.exports = productController