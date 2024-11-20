const mongoose = require("mongoose")

async function connectToDb(callback) {
    const URI = process.env.DB_URL;
    await mongoose.connect(URI)
        .then((res) => {
            console.log('db connected')
            callback();
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

module.exports = { connectToDb }