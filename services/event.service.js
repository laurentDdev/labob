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
    },
    delete: async (id, author_id, user_id) => {
        if (Number(author_id) !== Number(user_id)) {
            throw new Error('Invalide author')
        }

        await db.Event.destroy({where: {id: id}})


        return id

    },
    update: async (id, name, desc, user) => {

        const event = await db.Event.findOne({where: {id: id}})

        console.log(event.UserId)
        console.log("---------")
        console.log(user.id)

        if (Number(event.UserId) !== Number(user.id)) throw new Error('Invalide author')

        const updatedEvent = await db.Event.update({name, desc}, {where: {id}})

        return updatedEvent

    }
}

module.exports = eventService
