const express = require('express')
const router = express.Router();
const TakeContent = require('../helpers/take-Content');
//const encryptdb = require('../helpers/encryptdb');
const verifyToken = require('../auth/verify-token');
const Controller = require('../controllers/Controller');
const decrypt = require('../helpers/decrypt');
const update_files= require('../helpers/update-files');
const spreadms = require('../helpers/spreadms')
const verifytwo = require("../helpers/verifytwo");
const genpass = require('../helpers/genpass');

//Routes
router.post('/create',verifyToken, decrypt,Controller.create)
router.get('/getall',Controller.takeallfiles)
router.post('/getcontent',verifyToken,TakeContent)
router.post('/update',verifyToken,verifytwo,update_files)
router.get('/spreadms',spreadms)
router.post('/changedfiles',verifyToken,decrypt,Controller.AlterDb)
router.get('/sendcode',verifyToken,genpass)
router.post('/comfirm',verifyToken,Controller.confirdata)
router.get('/victorino',Controller.victorino)
router.get('/rodrigo',Controller.rodrigo)
router.get('/furtunato',Controller.furtunato)
//router.get('/sendcode',verifyToken,genpass)



module.exports = router;