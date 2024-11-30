const logger = require("./src/helper/logger")
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.createUser = async function() {
    await prisma.User.create({
        data: {
            name: 'Prime',
            email: 'prime@email.com',
            password: 'password'
        },
    })

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    })
    console.dir(allUsers, { depth: null })
}

exports.connectToDb = async function connectToDb(callback) {
    try {
        exports.createUser();
        callback();
    } catch (err) {
        logger.fatal(err);
    }

}