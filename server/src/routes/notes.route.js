const express = require("express")
const router = express.Router();

const notesController = require("../controllers/notes.controller")

router.get('/', notesController.get_users)

module.exports = router;