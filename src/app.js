import express, { json } from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import statsRoutes from './routes/statsRoutes.js';
import { operationCounter, getOperationCount } from './middlewares/operationCounter.js';

const app = express();

app.use(operationCounter);
app.use(json());

app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use('/api', statsRoutes);

// EndPoint de operaciones
app.get('/api/operaciones', getOperationCount);

export default app;