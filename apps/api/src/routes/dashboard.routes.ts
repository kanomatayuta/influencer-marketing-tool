import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import { getDashboardData } from '../controllers/dashboard.controller';

const router: ReturnType<typeof Router> = Router();

router.use(authenticate);

router.get('/', getDashboardData);

export default router;
