const OthersFiles = require('../models/OthersFiles')
const Files = require('../models/Files')
const crypto = require('crypto');
const getUserByToken = require('../auth/get-User-Btoken');
const forge = require('node-forge');

//const take_Content = require('../helpers/take-Content')
//take from body variable
const update_files = async (req, res) => {
    const data_change = req.body.data_change
    const id = req.body.id
    const newtitle = req.body.title
    const user = await getUserByToken(req)
    //take files from database by id
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        console.log(id)
        res.status(422).json({ "message": " File not found!" })
        return
    }
    const file = await Files.findById(id)
    //compare file.data with data coming from body
    if (file.data.toString() === data_change) {
        res.status(200).json({
            status: true,
            message: 'File already in the database',
        });
        return
    }else{
        //create hmac for each file
        //let newFile = Object.assign({}, data_change);
        //let newFile_x = Object.assign({}, data_change);
        const hmac = crypto.createHmac('sha512', 'secret');
        hmac.update(data_change);
        const hmacdone = hmac.digest('hex');
        //console.log(file.data.toString())   
        /************************** */


        //create aes for each file
        var md = forge.md.sha256.create();
        md.update(data_change);
        let aes = {digestsh: md.digest().toHex()};
        /************************** */
        //save in new database
        const newFile_X = new OthersFiles({
            title: newtitle,
            data: data_change,
            hmac: hmacdone,
            hash: aes.digestsh,
            user: {
                _id: user._id,
                name: user.name,
            },
        });
        await newFile_X.save();
        
        res.status(200).json({
            status: true,
            message: 'File is uploaded',
            data: newFile_X
        });
    }

}

module.exports = update_files;