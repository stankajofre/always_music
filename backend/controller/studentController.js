// backend/controllers/studentController.js
const { addStudent, getStudents, getStudentByRut, updateStudent, deleteStudent } = require('../db/queries');

const createStudent = async (req, res) => {
    try {
        const student = await addStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listStudents = async (req, res) => {
    try {
        const students = await getStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getStudent = async (req, res) => {
    try {
        const student = await getStudentByRut(req.params.rut);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const editStudent = async (req, res) => {
    try {
        const student = await updateStudent(req.body);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeStudent = async (req, res) => {
    try {
        const student = await deleteStudent(req.params.rut);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createStudent,
    listStudents,
    getStudent,
    editStudent,
    removeStudent,
};
