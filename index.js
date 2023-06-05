require('dotenv').config()
const express = require('express')
const routes = require('./routes/index')


const app = express()


app.use('/api',routes)
app.listen(process.env.PORT,() => {
    console.log(`Server has been running on port ${process.env.PORT}`)
})
