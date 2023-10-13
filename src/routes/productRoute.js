const express = require('express')
const router = express.Router()
const controller = require('../controller/productController')



router.get('/productDetail/:id', controller.productDetail)
router.get('/formCreateProduct', controller.formCreateProduct)

router.get('/products', controller.products)

module.exports = router