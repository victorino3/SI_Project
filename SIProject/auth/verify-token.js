const jwt = require("jsonwebtoken")
const get_token = require("./get-token")

const verifyToken = (req, res, next) => {
    //console.log(req.headers.authorization)
    if (!req.headers.authorization) {
        res.status(501).json({ "message": "Access denied" })
        return
    }
    const mytoken = get_token(req)

    if (!mytoken) {
        res.status(401).json({ "message": "Access denied" })
        return
    }
    try {
        const veryfied = jwt.verify(mytoken, "qwertyAzerty")
        req.user = veryfied
        next()
    }
    catch (err) {
        res.status(400).json({ "message": " Invalid token" })
        return
    }
}

module.exports = verifyToken