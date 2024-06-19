// backend/config/database.js
import { Pool } from 'pg';

const pool = new Pool({
    user: 'tu_usuario',
    host: 'localhost',
    database: 'always_music',
    password: 'tu_contraseña',
    port: 5432,
});

export default pool;
