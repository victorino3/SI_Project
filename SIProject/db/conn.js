const mongoose = require('mongoose')

async function Main () {
    await mongoose.connect("mongodb://0.0.0.0:27017/Project");
    console.log("Connected")
}

Main().catch(err => console.error("Err catched in db "+err))
module.exports= mongoose