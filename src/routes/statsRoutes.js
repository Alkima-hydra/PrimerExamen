import { Router } from 'express';
const router = Router();
import { getCounts } from '../controllers/statsController.js';

router.get('/contadores', getCounts);

export default router;