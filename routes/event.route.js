const eventRoute = require('express').Router()
const eventController = require('../controllers/event.controller')
const jwtMiddleware = require('../middleware/jwt.middleware')

const multer = require('multer')

const storage = require('../utils/multer.config')('event')
const upload = multer({storage: storage})

eventRoute.post('/create', jwtMiddleware, upload.single('eventimage'), eventController.create)
eventRoute.get('/all', jwtMiddleware,eventController.getAll)
eventRoute.delete('/:id/:author_id',jwtMiddleware, eventController.delete)
eventRoute.patch('/:id', jwtMiddleware, eventController.update)

module.exports = eventRoute
