require('dotenv').config()
const express = require('express')
const cors = require("cors")
const app = express()
const db = require("./src/db/db")

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.get('/', (req, res) => {
  res.status(200).send({ data: "Hello world!" })
})

// connect db and server start callback
db.connectToDb(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server started at port:${process.env.PORT}`)
  })
})
