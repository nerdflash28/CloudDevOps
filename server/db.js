const pg = require("pg")

const { Client } = pg
const client = new Client({
    connectionString: process.env.DATABASE_URL,
})

async function test() {
    try {
        const result = await client.query('SELECT NOW()')
        // console.log(result)
    } catch (err) {
        throw err;
    } finally {
        await client.end()
    }
}

exports.connectToDb = async function connectToDb(callback) {
    try {
        await client.connect()
        test();
        console.log('db connected!')
        callback();
    } catch (err) {
        throw err;
    }

}