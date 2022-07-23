

const mongoose = require('../db/conn')
const { Schema } = mongoose;
const User =new Schema({ 
        name: {type:String, required: true },
        email: {type:String, required:true},
        password:{type:String , required:true},
        
    },
    {timestamps: true}
)


module.exports =mongoose.model('Users', User)



