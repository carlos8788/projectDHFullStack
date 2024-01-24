const express = require('express')
const router = express.Router()
const controller = require('../controller/cartController')

router.get('/', controller.cartDetail)
router.post('/', controller.addProductToCart)
router.post('/finalizePurchase', controller.finalizePurchase)

module.exports = router