const express = require('express')
const router = express.Router();

//const Files = require('../models/Files');

const verify = require("../helpers/verifyone");
const Upload= require("../helpers/uploadfile");



router.post('/upload-photos',verify,Upload);
//Data.any("files")



module.exports = router;
