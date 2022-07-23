

const mongoose = require('../db/conn')
const {Schema} =  mongoose

const Files =new Schema({
    title: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: false,
    },
    hmac: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
    
    user: Object,
    filesfrom: Object,
  }, {timestamps: true}
)

module.exports = mongoose.model('files',Files)

//"_id" : ObjectId("621181d1a0a0cfe775fdd4ed"),




