const db = require('../models/index')
const EventDto = require('../DTO/event.dto')
const eventService = {
    create: async (name, desc, type, image, start, end, repeat, nbPlace, author) => {

        const user = await db.User.findByPk(Number(author))
        const event = await user.createEvent({name: name, desc: desc, type: type, image: image, startEvent: start, endEvent: end, repeatEvent: repeat, nbPlace: nbPlace})

        if (event) {
            return new EventDto(event.id,event.name,event.desc,event.type,event.image,event.startEvent,event.endEvent,event.repeatEvent,event.nbPlace,event.UserId)
        }
    },
    getAll: async () => {
        const events = await db.Event.findAll()

        if (events) {
            return events.map(event => new EventDto(event.id,event.name,event.desc,event.type,event.image,event.startEvent,event.endEvent,event.repeatEvent,event.nbPlace,event.UserId))
        }
    }
}

module.exports = eventService
