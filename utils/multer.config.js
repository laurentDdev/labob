const multer = require('multer')
const {nanoid} = require("nanoid");


const multerConfig = (folder) => {

    return storage = multer.diskStorage({
        destination: (req, file, callback) => {
            console.log('file', file)
            callback(null, `public/${folder}`)
        },
        filename: (req, file, callback) => {
            console.log('File ', file)

            const name = nanoid()

            callback(null, name+'.png')
        }
    })
}


module.exports = multerConfig
