


const { Router } = require('express');
const { check } = require('express-validator');

const { userDel, userGet, userPatch, userPost, userPut} = require('../controllers/users');
const { esRoleValid } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar_campos');

const router = Router();

router.get('/', userGet )

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('passw', 'El passw es obligatorio minimo 4 caracteres').isLength( {min: 4}),
    check('email', 'email no valido').isEmail(),
    //check('role', 'Role no valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( esRoleValid ),
    validarCampos
] , userPost )

router.put('/:id', userPut )

router.delete('/', userDel )

router.patch('/', userPatch )




module.exports = router;