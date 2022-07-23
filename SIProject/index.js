const express = require('express')
const port = 5000
const cors = require('cors')
const app = express()
const conn = require('./db/conn');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const _ = require('lodash');
//const headers = require('../Testing/config.js')
//use the function headers
//app.use(headers.headers);

// cors settings
app.use(cors())//({credentials: true, origin: 'http://localhost:3000'}))

//Set Midlewares to get respost from body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));
// enable files upload
app.use(fileUpload({
    createParentPath: true
}));
//Public folder
//app.use(express.static("public"))
//routers call
const myroutesUser = require('./routes/myrouteUser')
const myroutesFiles = require('./routes/myrouteFiles')
//Calling router Authenticate
const Authroute = require('./routes/auth');
app.use(myroutesFiles);
app.use(myroutesUser);
app.use(Authroute);

//Port number
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
