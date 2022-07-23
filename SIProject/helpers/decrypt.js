//decript aes-128-cbc with 128-bit 
const encryptdb = require('../helpers/encryptdb');
const pbkdf2 = require('./PKD2');
const crypto = require('crypto');
const decryptdb = async (req, res, next) => {
    //if the route /create is called  as the password is not in the body with console.window.prompt and decript database
    const closekey = pbkdf2().key
    
    let password = req.body.password;
    //console.log(closekey.key)
    //transform the hexadecimal key to buffer
    const keys = Buffer.from(password, 'hex');

    //compare keys and closekey
    if (keys.toString('hex') === closekey.toString('hex')) {
        //aes-128-cbc decript
        const data = await encryptdb(req, res);
        //console.log(data);
        const IV = "5183666c72eec9e4";
        //console.log(passwordBuffer);
        const cipher = crypto.createDecipheriv('aes-128-cbc', keys, IV);
        let decrypted = cipher.update(data, 'hex', 'utf8');
        decrypted += cipher.final('utf8');

        next();


    } else {
        return res.status(401).json({
            status: false,
            message: 'Invalid password here'
        });
       

    }
    

    
}
module.exports = decryptdb;