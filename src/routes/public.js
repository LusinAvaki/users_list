const router = require("express").Router();

const usersService = require('../services');
const usersValidations = require('../middleware/validation/index');

router.post('/sign-up', function(req, res){
    console.log("here");
    usersValidations.validateRegisterUser,
        usersService.createUser
});


router.post('/sign-in',function(req, res){
    usersValidations.validateUserSignIn,
        usersService.signInUser
});

module.exports = router;