const express = require('express');
const router = express.Router();
const { forgotPassword, resetPassword, 
        register, login, } = require('../auth/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/forgotpassword', forgotPassword);
router.put('/passwordreset/:resetToken', resetPassword);

module.exports = router;
