require('dotenv').config()
const express = require('express')
const db = require('./models/index')
const routes = require('./routes/index')



const app = express()


app.use('/api',routes)

db.sequelize.authenticate().then(() => {
    console.log('Database connection established')

    app.listen(process.env.PORT,() => {
        console.log(`Server has been running on port ${process.env.PORT}`)
    })
}).catch(err => {
    console.log(err)
})

