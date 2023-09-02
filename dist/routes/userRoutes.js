"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _LoginRequired = require('../middlewares/LoginRequired'); var _LoginRequired2 = _interopRequireDefault(_LoginRequired);

const router = new (0, _express.Router)();

// router.get('/', LoginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', _LoginRequired2.default, _UserController2.default.store);
router.put('/', _LoginRequired2.default, _UserController2.default.update);
router.delete('/', _LoginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
index -> lista todos os user -> GET
store/create -> cria um novo user -> POST
delete -> apaga um user -> DELETE
show -> mostra um user -> GET
update -> atualiza um user -> PATCH ou PUT
*/
