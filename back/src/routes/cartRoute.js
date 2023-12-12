const express = require('express')
const router = express.Router()
const controller = require('../controller/cartController')

router.get('/', controller.cartDetail)
router.post('/', controller.addProductToCart)
router.post('/finalizePurchase', controller.finalizePurchase)

// router.get('/register', controller.viewRegister)

// router.get('/login', controller.login)




module.exports = router