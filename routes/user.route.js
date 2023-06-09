const userRoute = require('express').Router()
const jwtMiddleware = require('../middleware/jwt.middleware')


userRoute.get('/:id/my-profile', jwtMiddleware,)

module.exports = userRoute
