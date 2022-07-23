const pbkdf2 = require('./PKD2');
const File = require('../models/Files')
const getUserByToken = require('../auth/get-User-Btoken');
const crypto = require('crypto');
//encrypt database with AES-128-CBC
const encryptdb = async (req, res) => {
    //encrypt database with AES-128-CBC
    const user = await getUserByToken(req);
    const files = await File.find({
        user: {
            _id: user._id,
            name: user.name,
        }
    });
    //encrypt database with AES-128-CBC
    try {
        const pbkdf2w = pbkdf2()
        const IV = "5183666c72eec9e4";
        //make a filter for the files and print files.data
        const filesdata = files.map(file => {
            //return file.data
            return file
        });
        const cipher = crypto.createCipheriv('aes-128-cbc', pbkdf2w.key, IV);
            let encrypted = cipher.update(JSON.stringify(filesdata), 'utf8', 'hex');
            encrypted += cipher.final('hex');

            return encrypted



    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }




}
module.exports = encryptdb;