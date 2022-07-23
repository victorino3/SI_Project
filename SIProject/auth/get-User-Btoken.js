const jwt = require('jsonwebtoken')
const GetToken = require('../auth/get-token')
const User = require ('../models/Users')
const getUserToken = async (req) => {
    const token = GetToken(req)
    const decoded = jwt.verify(token, 'qwertyAzerty')
    const user = await User.findById(decoded.id)
    return user
}

module.exports = getUserToken