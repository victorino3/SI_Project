const express = require('express')
const router = express.Router();
const verify = require('../auth/verify-token')
const authUser = require('../auth/authUser');
/*
router.get('/login',authUser.Login );
router.get('/register',authUser.Register );*/
router.post('/register',authUser.Registerdata );
router.post('/login',authUser.logindata );
router.get('/logout',authUser.logout );



module.exports = router;