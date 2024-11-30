const express = require("express")

const middleware = (express_app) => {
    express_app.use(express.json());
    express_app.use(express.urlencoded({ extended: true }));
}

module.exports = middleware;