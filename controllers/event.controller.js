const eventService = require('../services/event.service')
const authService = require('../services/auth.service')
const eventController = {
    create:async (req, res) => {
        try {
            const imageName = req.file.filename.split('.')[0]
            const { name, desc, eventType, startDate, endDate, repeatDay, place, userId} = req.body
            const event = await eventService.create(name,desc,eventType,imageName,startDate,endDate,repeatDay,place,userId)
            if (event) {
                res.status(200).json({event: event})
            }
        }catch (e) {
            console.log(e)
            res.sendStatus(401)
        }
    },
    getAll: async (req,res) => {
        try {
            const events = await eventService.getAll()

            if (events) {
                res.status(200).json({events: events})
            }

        }catch (e) {
            console.log(e)
            res.sendStatus(401)
        }
    },
    delete: async (req, res) => {
        try {
            const { id, author_id } = req.params
            const token = req.headers.authorization && req.headers.authorization.split(" ")[1]


            const currentUser = await authService.findUserByToken(token)

            console.log(author_id)
            console.log('-----------')
            console.log(currentUser.id)
            const deletedEvent = await eventService.delete(id,author_id,currentUser.id)

            if (deletedEvent) {
                res.status(200).json({id})
            }

        }catch (e) {
            console.log(e)
            res.sendStatus(401)
        }
    },
    update: async (req,res) => {
        try {
            const { id } = req.params
            const { name, desc } = req.body
            const token = req.headers.authorization.split(' ')[1]

            const user = await authService.findUserByToken(token)

            const updatedEvent = await eventService.update(id, name, desc, user)

            if (updatedEvent) {
                res.sendStatus(200)
            }


        }catch (e) {
            console.log(e)
            res.sendStatus(401)
        }
    },
    getMyEvent: async (req, res) => {
        try {

            const token = req.headers.authorization.split(" ")[1]
            const user = await authService.findUserByToken(token)
            const events = await eventService.getMyEvent(user)
            if (events) {
                res.status(200).json({events})
            }
        }catch (e) {
            console.log(e)
            res.sendStatus(401)
        }
    }
}

module.exports = eventController
