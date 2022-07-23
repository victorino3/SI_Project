const Files = require('../models/Files');
const getUserByToken = require('../auth/get-User-Btoken');
const TakeContent = async (req, res) => {
    /*if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        console.log(id)
        res.status(422).json({ "message": " File not found!" })
        return
    }*/
    const hash = req.body.hash;
    console.log(hash)
    //get hash from Files
    
    const file = await Files.findOne({ hash: hash });
    console.log(file)
   
    
    
    const user = await getUserByToken(req);
    console.log(user)
    //get the data fields of this file and store in new string
    //console.log(file.data);
    let data = file.data.toString();
    //get the title fields of this file and store in new string
    const title = file.title;
    res.status(200).json({
        status: true,
        message: 'File',
        data: {
            id: file._id,
            title,
            data,
            user: user.name,
        }
    }
    );
    



}
module.exports = TakeContent;