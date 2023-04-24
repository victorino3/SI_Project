const GetToken = (req) => {
    const Auth_Token = req.headers.authorization

    //Leave a space always in split
    const token = Auth_Token.split(' ')[1];
    return token;
}
module.exports = GetToken

