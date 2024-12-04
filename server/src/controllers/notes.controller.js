const { prisma } = require("../db");
const logger = require("../helper/logger");

exports.getNotes = async (req, res) => {
    const { email } = req.body;
    const result = await prisma.note.findMany({
        where: {
            email: email
        }
    })
    res.status(200).send(result);
}

exports.getNoteById = async (req, res) => {
    const id = req.params.id;
    const result = await prisma.note.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.status(200).send(result)
}

exports.createNote = async (req, res) => {
    const note = req.body;
    const result = await prisma.note.create({
        data: note,
    })
    res.status(201).json(result)
}

exports.deleteNote = async (req, res) => {
    const note = req.body;
    const result = await prisma.note.delete({
        where: {
            id: note.id
        }
    })
    res.status(200).json(result)
}

exports.updateNote = async (req, res) => {
    const note = req.body;
    const result = await prisma.note.update({
        where: {
            id: note.id
        },
        data: note,
    })
    res.status(200).json(result)

}