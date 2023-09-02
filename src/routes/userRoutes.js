import { Router } from 'express';
import userController from '../controllers/UserController';

import LoginRequired from '../middlewares/LoginRequired';

const router = new Router();

// router.get('/', LoginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', LoginRequired, userController.store);
router.put('/', LoginRequired, userController.update);
router.delete('/', LoginRequired, userController.delete);

export default router;

/*
index -> lista todos os user -> GET
store/create -> cria um novo user -> POST
delete -> apaga um user -> DELETE
show -> mostra um user -> GET
update -> atualiza um user -> PATCH ou PUT
*/
