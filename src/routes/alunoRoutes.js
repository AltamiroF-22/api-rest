import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import LoginRequired from '../middlewares/LoginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', LoginRequired, alunoController.store);
router.put('/:id', LoginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', LoginRequired, alunoController.delete);

export default router;
