const db = require('../models/index')
const EventDto = require('../DTO/event.dto')
const eventService = {
    create: async (name, desc, type, image, start, end, repeat, nbPlace, author) => {

        const user = await db.User.findByPk(Number(author))
        console.log(user)
        user.createEvent({name: name, desc: desc, type: type, image: image, startEvent: start, endEvent: end, repeatEvent: repeat, nbPlace: nbPlace}).then((event) => {
            console.log(event)
        }).catch(e => {
            console.log(e)
        })

        if (event) {
            return new EventDto(event.id,event.name,event.desc,event.type,event.image,event.startEvent,event.endEvent,event.repeatEvent,event.nbPlace,event.author_id)
        }
    }
}

module.exports = eventService
