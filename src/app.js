const express = require('express')
const postRouter = require('./posts/posts.router')
const db = require('./utils/database')

const app = express()
require('dotenv').config()
app.use(express.json())

db.authenticate() 
    .then(() => {
        console.log('Credenciales chidas')
    })
    .catch((err) => {
        console.log(err)
    })
db.sync()
    .then(() => {
        console.log("BD sincronizada chido")
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/',(req, res) => {
    res.json({
        message: "Server chido",
    })
})

app.use("/api/v1", postRouter);

app.listen(9000, () => {
    console.log('Server started at port 9000')
})

module.exports = app
