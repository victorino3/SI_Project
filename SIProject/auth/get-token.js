const GetToken = (req) => {
    const Auth_Token = req.headers.authorization

    //Leave a space always in split
    const token = Auth_Token.split(' ')[1];
    return token;
}
module.exports = GetToken


// BEREAR eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmljdG9yaW5vIiwiaWQiOiI2Mjc3YzlhOGQ5ZDU2NTQ0Yzg5Y2I5ZTMiLCJpYXQiOjE2NTQ5OTM4MjJ9.trZ3I7OVUNAGio548bA30bhZvbAQMx4RGzS9R8RzgGY