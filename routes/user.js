const express = require('express');
const router = express.Router();

const Register = require('../controllers/user/register');
const Login = require('../controllers/user/login');
const GetUserDetails = require('../controllers/user/get');

router.get('/:id' , GetUserDetails);
router.post('/login' , Login);
router.post('/register' , Register);

module.exports = router;