class EventDto {
    constructor(id,name, desc, type, image, startEvent, endEvent, repeatEvent, nbPlace, author_id) {
        this.id = id;
        this.name = name
        this.desc = desc
        this.type = type
        this.image = image
        this.startEvent = startEvent
        this.endEvent = endEvent
        this.repeatEvent = repeatEvent
        this.nbPlace = nbPlace
        this.author_id = author_id
    }
}

module.exports = EventDto
