const File = require('../models/Files');
const GetUserToken = require('../auth/get-User-Btoken');
//const Upload = require('../helpers/uploadfile');
const User = require('../models/Users');
const OthersFiles = require('../models/OthersFiles');
const passDbs = require('../models/PassDb')




module.exports = class UserController { //UserController   

    static async create(req, res) {
        // get all file of the current user
        const user = await GetUserToken(req);
        const files = await File.find({
            user: {
                _id: user._id,
                name: user.name,
            }
        })//.sort("-createdAt");
        try {
            res.status(200).json({
                status: true,
                message: 'Files of the user',
                data: files
            });
            return
        }
        catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            });
        }


    }
    static async takeallfiles (req, res){
        //take all file
        const files = await File.find({});
        try {
            res.status(200).json({
                status: true,
                message: 'All files',
                data: files
            });
            return
        }
        catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            });
        }
    }
    static async AlterDb(req, res) {
        const allOthersFiles = await OthersFiles.find({});
        try {
            res.status(200).json({
                status: true,
                message: 'All files',
                data: allOthersFiles
            });
            return
        }
        catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            });
        }
    }

    static async confirdata(req, res) {

        const incode = req.body.code;
        const verified = await passDbs.findOne({    //find the code in the database
            password: incode
        });
        if (verified) {
            //window.alert("The code is correct");
            res.json({
                status: true,
                message: 'The code is correct'
            })
            return ;
        }else {
            //window.alert("The code is incorrect");
            res.json({
                status: false,
                message: 'The code is incorrect'
            })
            return ;
        }
    }

    static async victorino(req, res) {
        const names = "victorino";
        //take all file of user victorino in OthersFiles
        const user = await User.findOne({ name: names });
        //console.log(user);
        const files = await OthersFiles.find({
            user: {
                _id: user._id,
                name: user.name,
            }
        })
        const filesx = await File.find({
            user: {
                _id: user._id,
                name: user.name,
            }
        }).sort("-createdAt")
        try {
            res.status(200).json({
                status: true,
                message: 'File of the user',
                data: files,
                data_2:filesx,
            });
            return
        }
        catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            });
        }
    }

    static async rodrigo(req, res) {
        const name = 'Rodrigo Gomes';
        //take all file of user victorino in OthersFiles
        const user = await User.findOne({ name: name });
        const files = await OthersFiles.find({
            user: {
                _id: user._id,
                name: user.name,
            }
        })
        const filesx = await File.find({
            user: {
                _id: user._id,
                name: user.name,
            }
        }).sort("-createdAt")
        try {
            res.status(200).json({
                status: true,
                message: 'File of the user',
                data: files,
                data_2:filesx,
            });
            return
        }
        catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            });
        }
    }

    static async furtunato(req, res) {
        const name = 'Furtunato Tito';
        const user = await User.findOne({ name: name });
        //console.log(user);
        const files = await OthersFiles.find({
            user: {
                _id: user._id,
                name: user.name,
            }
        })
        const filesx = await File.find({
            user: {
                _id: user._id,
                name: user.name,
            }
        }).sort("-createdAt")
        try {
            res.status(200).json({
                status: true,
                message: 'File of the user',
                data: files,
                data_2:filesx,
            });
            return
        }
        catch (err) {
            res.status(500).json({
                status: false,
                message: err.message
            });
        }
        

    }

















}