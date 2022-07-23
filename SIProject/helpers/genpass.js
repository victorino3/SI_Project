const passDb = require('../models/PassDb');
const crypto = require('crypto');

const genPass = async (req, res) => {
    var cont = 0;
    const myArray = [];
    while (cont < 20) {
        const hex = crypto.randomBytes(10).toString('hex');
        // send hexadecimal to database
        const pass = new passDb({
            password: hex
        });

        var allpass = await pass.save();
        myArray.push(allpass);
        cont++;
    }
    
    res.send(myArray);
}

module.exports = genPass;