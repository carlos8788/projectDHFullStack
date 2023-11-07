const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const { validateRegister } = require('../middlewares/validations')
const upload = require('../middlewares/uploadImg.js')
const { isLogged, authenticate } = require('../middlewares/authenticate')
//VIEWS
router.get('/login', isLogged, userController.login)
router.get('/register', isLogged, userController.viewRegister)
router.get('/profile', authenticate, userController.profile)
router.post('/login', validateLogin, userController.loginProcess);

// API
router.post('/register', upload.single('avatar'), validateRegister, userController.register)
router.post('/login', userController.loginProcess)
router.get('/logout', userController.logout)
module.exports = router