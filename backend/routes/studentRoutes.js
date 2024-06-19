// backend/routes/studentRoutes.js
import { Router } from 'express';
const router = Router();
import { createStudent, listStudents, getStudent, editStudent, removeStudent } from '../controllers/studentController';

router.post('/students', createStudent);
router.get('/students', listStudents);
router.get('/students/:rut', getStudent);
router.put('/students/:rut', editStudent);
router.delete('/students/:rut', removeStudent);

export default router;
