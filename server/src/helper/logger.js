const pino = require("pino")
const pretty = require("pino-pretty")

const stream = pretty({
    levelFirst: true,
    colorize: true,
    ignore: "hostname,pid",
});

const logger = pino(
    {
        name: "Logger",
        level: process.env.NODE_ENV === "development" ? "debug" : "info",
    },
    stream
);

module.exports = logger;