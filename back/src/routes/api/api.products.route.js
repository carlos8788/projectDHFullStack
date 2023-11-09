const express = require('express')
const router = express.Router()
const apiMainController = require('../../controller/api/api.products.controller')

router.get('', apiMainController.home)

module.exports = router