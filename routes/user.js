


const { Router } = require('express');

const router = Router();

const { userDel, userGet, userPatch, userPost, userPut} = require('../controllers/users')


router.get('/', userGet )

router.post('/', userPost )

router.put('/:id', userPut )

router.delete('/', userDel )

router.patch('/', userPatch )




module.exports = router;