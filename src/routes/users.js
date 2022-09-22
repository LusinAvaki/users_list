const router = require('express').Router();

const usersValidations = require('../middleware/validation');
const userService = require('../services/index');

router.get('/',
    usersValidations.validateGetUser,
    userService.listUsers);

router.get('/:userId',
    usersValidations.validateGetUser,
    userService.getUser);

router.post('/',
    usersValidations.validateRegisterUser,
    userService.addUser);

router.patch('/:userId',
    userService.updateUser);

router.delete('/:userId',
    usersValidations.validateRemoveUser,
    userService.removeUser);

module.exports = router;