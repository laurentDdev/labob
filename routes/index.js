const routes = require('express').Router()
const authRouter = require('./auth.route')
const userRouter = require('./user.route')
const eventRouter = require('./event.route')
routes.use('/auth', authRouter)
routes.use('/user', userRouter)
routes.use('/event', eventRouter)

module.exports = routes
