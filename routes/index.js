const routes = require('express').Router()
const authRouter = require('./auth.route')
const userRouter = require('./user.route')

routes.use('/auth', authRouter)
routes.use('/user',userRouter)

module.exports = routes
