const userRoute = require('express').Router()
const jwtMiddleware = require('../middleware/jwt.middleware')
const userController = require('../controllers/user.controller')
const multer = require('multer')

const storage = require('../utils/multer.config')('profile')
const upload = multer({storage: storage})


userRoute.get('/all', jwtMiddleware, userController.findAll)
userRoute.patch('/:id/profile', jwtMiddleware, upload.single('newprofileimage'),userController.update)



module.exports = userRoute
