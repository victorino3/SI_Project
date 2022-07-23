const OthersFiles = require('../models/OthersFiles');
const Files = require('../models/Files');
const GetUserToken = require('../auth/get-User-Btoken');
const spreadms = async (req, res) => {
    const username = await GetUserToken(req)

    const files = await Files.find({})//.sort("-createdAt");

    const OthersFile = await OthersFiles.find({});




    const myarrayresponse = {
        'title': [],
        'user': [],
        'createdAt': [],
    };
    //make for in files and other in othersfiles and compare the title and hmacdone if they are the different then push the file in myarrayresponse
    for (let i = 0; i < files.length; i++) {
        for (let j = 0; j < OthersFile.length; j++) {
            //console.log(OthersFile[j].title);
            if (files[i].title == OthersFile[j].title && files[i].hmac != OthersFile[j].hmac) {
                //make a push into myarrayresponse json 
                
                    myarrayresponse.title[i] = files[i].title;
                    myarrayresponse.user[i] = OthersFile[j].user.name;
                    myarrayresponse.createdAt[i] = files[i].createdAt;
                //myarrayresponse.push('file: '+files[i].title +' was changed by: '+OthersFile[j].user.name); 
                
            }
        }
    }
    //cast myarrayresponse to json object
    //const myarrayresponsejson = JSON.stringify(myarrayresponse);
    return res.status(200).json(myarrayresponse);






}
module.exports = spreadms;
