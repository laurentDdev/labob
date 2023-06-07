const authRoute = require('express').Router()
const authController = require('../controllers/auth.controller')
const jwtMiddleware = require('../middleware/jwt.middleware')

authRoute.post('/register', authController.register)
authRoute.post('/login', authController.login)
authRoute.post('/autologin',jwtMiddleware,authController.autologin)

module.exports = authRoute
