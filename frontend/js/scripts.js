// frontend/js/scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const fetchStudents = async () => {
        try {
            const response = await fetch('/api/students');
            const students = await response.json();
            displayStudents(students);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const displayStudents = (students) => {
        const studentList = students.map(student => `
            <div>
                <h2>${student.nombre}</h2>
                <p>RUT: ${student.rut}</p>
                <p>Curso: ${student.curso}</p>
                <p>Nivel: ${student.nivel}</p>
            </div>
        `).join('');
        app.innerHTML = studentList;
    };

    fetchStudents();
});
