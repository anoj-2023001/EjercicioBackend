import { Router }              from 'express';
import { generatePassword }    from '../controllers/passwordController.js';

const router = Router();
router.post('/', generatePassword);
export default router;
