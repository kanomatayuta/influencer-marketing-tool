import { Router } from 'express';
import { getFAQs } from '../controllers/faq.controller';

const router: ReturnType<typeof Router> = Router();

router.get('/', getFAQs);

export default router;
