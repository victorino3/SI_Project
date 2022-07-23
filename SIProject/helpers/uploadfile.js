const forge = require('node-forge');
const crypto = require('crypto');
const File = require('../models/Files')
const getUserByToken = require('../auth/get-User-Btoken');
const Upload = async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let file = req.files;
            
            let anotherT = file.files;
            let anotherF=Object.assign({}, anotherT);
            let anotherFS=Object.assign({}, anotherT);
           
            //console.log(anotherF);
            //console.log(anotherFS);
           
            
            


            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            //file.mv('./public/' + file.name);
            //console.log(file.data.toString())
            /************************** */
            //create hmac for each file
            const hmac = crypto.createHmac('sha512', 'secret');
            hmac.update(anotherF.data.toString());
            const hmacdone = hmac.digest('hex');
            
            //console.log(file.data.toString())   
            /************************** */


            //create aes for each file
            var md = forge.md.sha256.create();
            md.update(anotherFS.data.toString());
            let aes = {digestsh: md.digest().toHex()};
           
          
            /************************** */


            //send response
            //get user by token
            let user = await getUserByToken(req);
            console.log(user);

            //create new file
            const newFile_ = new File({
                title: anotherF.name,
                data: anotherF.data.toString(),
                hmac: hmacdone,
                hash: aes.digestsh,
                user:{
                    _id: user._id,
                    name: user.name,
                }
                
            });
            
            console.log(newFile_);


            //save file
            await newFile_.save();
            res.status(200).json({  //send response to client   
                status: true,
                message: 'File is uploaded',
                data: newFile_
            });
            

        }
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = Upload;