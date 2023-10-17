const express = require('express')
const router = express.Router()
const controller = require('../controller/productController')
const {authenticate} = require('../middlewares/authenticate')


router.get('/productDetail/:id', controller.productDetail)
router.get('/formCreateProduct', authenticate, controller.formCreateProduct)
router.post('/createProduct', controller.createProduct)
router.get('/products', controller.products)

module.exports = router