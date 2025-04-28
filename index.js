import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import temperatureRoutes from './routes/temperatureRoutes.js';
import passwordRoutes    from './routes/passwordRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/temperature', temperatureRoutes);
app.use('/api/password',    passwordRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});
