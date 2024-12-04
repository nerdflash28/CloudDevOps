const logger = require("./helper/logger")
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

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

exports.prisma = prisma;