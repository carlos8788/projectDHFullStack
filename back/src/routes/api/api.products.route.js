const express = require('express')
const router = express.Router()
const controller = require('../../controller/api/api.products.controller')

router.get('', controller.allProducts)

router.get('/:id', controller.getProduct)

// router.put('/:id', controller.)

module.exports = router