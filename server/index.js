require("dotenv").config()
const express = require("express")
const db = require("./db")
const logger = require("./src/helper/logger")

const app = express();
const PORT = process.env.PORT

const middleware = require("./src/middleware/middleware")
middleware(app)

app.get('/hello', (req, res) => {
    // req.log.info("Api is working")
    res.status(200).send('Hello!')
})

db.connectToDb(() => {
    app.listen(PORT, () => logger.info(`Server started at port: ${PORT}`))
})