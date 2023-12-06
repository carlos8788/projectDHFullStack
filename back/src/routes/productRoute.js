const express = require('express')
const router = express.Router()
const controller = require('../controller/productController')
const {authenticate} = require('../middlewares/authenticate')
const upload = require('../middlewares/uploadImg.js')

router.get('/productDetail/:id', controller.productDetail)
router.get('/formCreateProduct', authenticate, controller.formCreateProduct)
router.post('/createProduct', upload.single('productImg'), controller.createProduct)
router.get('/products', controller.products)
router.get('/searchProducts', controller.searchProducts)

module.exports = router