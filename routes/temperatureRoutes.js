import { Router }              from 'express';
import { convertTemperature }  from '../controllers/temperatureController.js';

const router = Router();
router.post('/', convertTemperature);
export default router;
