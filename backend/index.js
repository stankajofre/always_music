// backend/index.js
import express, { json } from 'express';
const app = express();
import studentRoutes from './routes/studentRoutes';

app.use(json());
app.use('/api', studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
