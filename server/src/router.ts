import { Router } from 'express';
import { healthCheckController } from './healthCheckController';
import { updateCountController } from './updateCountController';

const router = Router();

router.get('/', healthCheckController);
router.put('/update-count', updateCountController);

export { router };
