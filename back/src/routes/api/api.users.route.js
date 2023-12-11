const express = require('express')
const router = express.Router()
const apiUsersController = require('../../controller/api/api.users.controller')

router.get('', apiUsersController.allUser)
router.get('/:id', apiUsersController.getUser)

module.exports = router