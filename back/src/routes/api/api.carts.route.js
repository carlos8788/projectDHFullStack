const express = require('express')
const router = express.Router()
const controller = require('../../controller/api/api.carts.controller')

router.get('/', controller.getCarts)
router.get('/:id', controller.getCartById)

module.exports = router