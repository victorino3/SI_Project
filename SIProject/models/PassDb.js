const mongoose = require('../db/conn')
const { Schema } = mongoose;
const PassDb =new Schema({ 
    //password with hexadecimal type
   password:{type:String , required:true},
        
    },
    {timestamps: true}
)


module.exports =mongoose.model('PassDb', PassDb)