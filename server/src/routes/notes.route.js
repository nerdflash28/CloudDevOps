const express = require("express")
const router = express.Router();

const notesController = require("../controllers/notes.controller")

router.get('/',    notesController.getNotes)
router.get('/:id',    notesController.getNoteById)
router.post('/',   notesController.createNote)
router.delete('/', notesController.deleteNote)
router.delete('/', notesController.updateNote)

module.exports = router;