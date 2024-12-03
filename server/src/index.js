require("dotenv").config()
const express = require("express")
const db = require("./db")
const logger = require("./helper/logger")

const app = express();
const PORT = process.env.PORT

const middleware = require("./middleware/middleware")
middleware(app)

app.get('/hello', (req, res) => {
    res.status(200).send('Hello!')
})

// routes
app.use('/notes', require('./routes/notes.route'))

db.connectToDb(() => {
    app.listen(PORT, () => logger.info(`Server started at port: ${PORT}`))
})