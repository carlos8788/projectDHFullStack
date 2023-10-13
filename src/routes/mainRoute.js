const express = require('express')
const router = express.Router()
const controller = require('../controller/mainController')


router.get('', controller.home)


router.get('/productCart', controller.cartDetail)

// router.get('/register', controller.viewRegister)

// router.get('/login', controller.login)




module.exports = router