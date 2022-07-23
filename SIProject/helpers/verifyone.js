//create function to verify if the is already in the database
const File = require('../models/Files');
const verify = async (req, res, next) => {
    const file = req.files;
    let another = file.files;
    
    
    
    
    //verify if the file is already in the database
    
    const file_ = await File.findOne({
        title: another.name,
        data: another.data.toString(),
    });
    console.log(file_);
    
    if (file_) {
        res.status(200).json({
            status: false,
            message: 'File already in the database',
        });
        return
    } else {
        next();
    }
    
    
}

module.exports = verify;