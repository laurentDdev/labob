const routes = require('express').Router()
const authRouter = require('./auth.route')

routes.use('/auth', authRouter)

module.exports = routes
