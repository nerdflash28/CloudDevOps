require("dotenv").config()
const express = require("express")
const db = require("./db")

const app = express();
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello!')
})

db.connectToDb(() => {
    app.listen(PORT, () => console.log(`Server started at port: ${PORT}`))
})