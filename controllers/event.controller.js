const eventService = require('../services/event.service')
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
    }
}

module.exports = eventController
