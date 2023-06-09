require('dotenv').config()
const express = require('express')
const db = require('./models/index')
const routes = require('./routes/index')
const path = require("path");



const app = express()


app.use(express.json())
app.use(express.static('public'))
app.use('/api',routes)

db.sequelize.authenticate().then(() => {
    db.sequelize.sync({ force: true })
    console.log('Database connection established')

    app.listen(process.env.PORT,() => {
        console.log(`Server has been running on port ${process.env.PORT}`)
    })
}).catch(err => {
    console.log(err)
})

