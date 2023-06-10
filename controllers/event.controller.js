const eventService = require('../services/event.service')
const eventController = {
    create:async (req, res) => {
        try {
            const imageName = req.file.filename.split('.')[0]
            const { name, desc, eventType, startDate, endDate, repeatDay, place, userId} = req.body
            const event = await eventService.create(name,desc,eventType,imageName,startDate,endDate,repeatDay,place,userId)
            if (event) {
                console.log(event)
                res.send(200)
            }
        }catch (e) {
            console.log(e)
        }

    }
}

module.exports = eventController
