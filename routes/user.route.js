const userRoute = require('express').Router()
const jwtMiddleware = require('../middleware/jwt.middleware')
const userController = require('../controllers/user.controller')

userRoute.get('/all', jwtMiddleware, userController.findAll)

module.exports = userRoute
