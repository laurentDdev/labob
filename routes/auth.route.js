const authRoute = require('express').Router()
const authController = require('../controllers/auth.controller')


authRoute.post('/register', authController.register)
authRoute.post('/login', authController.login)

module.exports = authRoute
