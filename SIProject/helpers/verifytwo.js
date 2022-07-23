//create function to verify if the is already in the database
const OthersFiles = require('../models/OthersFiles');
const verify = async (req, res, next) => {
    const data_change = req.body.data_change
    //const id = req.body.id
    const title = req.body.title

    
    //verify if the file is already in the database
    
    const file_ = await OthersFiles.findOne({
        title: title,
        data: data_change,
        
    });
    //console.log(file_)
    if (file_) {
        res.status(200).json({
            status: false,
            message: 'File already in the database',
        });
        return
    }
    next();
    
    
}

module.exports = verify;