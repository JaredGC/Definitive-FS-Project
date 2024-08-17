import { Router } from 'express';
import ApiController from '../app/controllers/ApiController.mjs';
import Call from '../app/utils/Call.mjs';

const router = Router();
router.post('/login', Call(ApiController.login));
router.get('/', Call(ApiController.index));

export default router;
