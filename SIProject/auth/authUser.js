const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CreateUserToken = require('../auth/create-token');
const GetToken = require('../auth/get-token');

module.exports = class UserAuthent {
    /*static Login(req, res) {
        res.json({ message: 'User Authenticated!' });
    }

    static Register(req, res) {
        res.json({ message: 'User Registered!' });
    }*/

    static async Registerdata(req, res) {
        const { name, email, password, confirmpassword } = req.body;
    
        //Validations
        if (!name) {
            res.status(422).json({ message: 'Name is required!' });
            return;     
        }
        if (!email) {
            res.status(422).json({ message: 'Email is required!' });
            return;
        }
        if (!password) {
            res.status(422).json({ message: 'Password is required!' });
            return;
        }
        if (!confirmpassword) {
            res.status(422).json({ message: 'confirmation of password is required!' });
            return
        }
        if (password !== confirmpassword) {
            res.status(422).json({ message: 'Password and confirmation of password do not match!' });
            return;
        }
        //check user
        const username = await User.findOne({ email: email });
        if (username) {
            res.status(422).json({ message: 'User already exists!' });
            return;
        }

        //apply password
        const salt = await bcrypt.genSalt(12);
        const passwordhash = await bcrypt.hash(password, salt);
        //create user using sequelize
      
        //create user
        const user = new User({
            name,
            email,
            password:passwordhash,
            
        })
        try{
            const addUser = await user.save()
            //generate token
            await CreateUserToken(addUser,req,res)  
        }catch(err){
             res.status(500).json({message:err.message})}


}

    static async logindata(req, res) {
        const { email, password } = req.body;
        console.log(email, password)
        //Validations
        if (!email) {
            res.status(422).json({ message: 'Email is required!!!' });
            return;
        }
        if (!password) {
            res.status(422).json({ message: 'Password is required!' });
            return;
        }
        //check user
        const user = await User.findOne({ email: email });
      
        if (!user) {
            res.status(422).json({ message: 'User does not exist!' });
            return;
        }
        //check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            res.status(422).json({ message: 'Password is invalid!' });
            return; 
        }
        //create token
        await CreateUserToken(user,req,res) 
       
        
}

 static async logout (req, res) {
    const getToken = GetToken(req)
    const decoded = jwt.verify(getToken, 'qwertyAzerty')
    const user = await User.findById(decoded.id)
    user.password = null
    user._id = null
    user.name = null 
    user.email = null 
    res.json({ message: 'User logged out!'});
  }

}