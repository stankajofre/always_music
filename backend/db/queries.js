// backend/db/queries.js
import { query } from '../config/database';

const addStudent = async (student) => {
    const { nombre, rut, curso, nivel } = student;
    try {
        const result = await query(
            'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, rut, curso, nivel]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error adding student:', error);
        throw error;
    }
};

const getStudents = async () => {
    try {
        const result = await query('SELECT * FROM estudiantes');
        return result.rows;
    } catch (error) {
        console.error('Error getting students:', error);
        throw error;
    }
};

const getStudentByRut = async (rut) => {
    try {
        const result = await query('SELECT * FROM estudiantes WHERE rut = $1', [rut]);
        return result.rows[0];
    } catch (error) {
        console.error('Error getting student by RUT:', error);
        throw error;
    }
};

const updateStudent = async (student) => {
    const { nombre, rut, curso, nivel } = student;
    try {
        const result = await query(
            'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *',
            [nombre, curso, nivel, rut]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error updating student:', error);
        throw error;
    }
};

const deleteStudent = async (rut) => {
    try {
        const result = await query('DELETE FROM estudiantes WHERE rut = $1 RETURNING *', [rut]);
        return result.rows[0];
    } catch (error) {
        console.error('Error deleting student:', error);
        throw error;
    }
};

export default {
    addStudent,
    getStudents,
    getStudentByRut,
    updateStudent,
    deleteStudent,
};
