const logger = require("./helper/logger")
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.createUser = async function () {
    const res = await prisma.note.create({
        data: {
            email: 'test@email.com',
            title: 'Note #1',
            description: 'this is first note',
        },
    })
    console.log(res)
}

exports.connectToDb = async function connectToDb(callback) {
    try {
        const res = await prisma.$queryRaw`SELECT 1`;
        if (res[0]["?column?"] === 1) {
            console.log();
            logger.info('Database connected successfully')
            callback();
        }
    } catch (err) {
        logger.fatal(err);
    }

}