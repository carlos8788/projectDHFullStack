const express = require('express')
const router = express.Router()
const apiMainController = require('../../controller/api/api.products.controller')

router.get('', apiMainController.allProducts)
router.post('', apiMainController.createProduct)
router.get('/:id', apiMainController.getProduct)
router.put('/:id', apiMainController.updateProduct)
router.delete('/:id', apiMainController.deleteProduct)

module.exports = router