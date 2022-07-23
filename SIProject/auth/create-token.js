const jwt = require('jsonwebtoken')
const CreateUserToken = async (user, req, res) => {
    // create a token
  
    const token = jwt.sign({    //create a token
        name: user.name,
        id: user._id
    
    }, "qwertyAzerty")
    //secret key
    // return token

    res.status(200).json({
        "message": "User authenticated!",
        token: token,
        id: user._id
    })
}

module.exports = CreateUserToken