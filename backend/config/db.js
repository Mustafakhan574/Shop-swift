const mongoose = require('mongoose');
const connectdb = async()=>{
          try{
             await mongoose.connect(process.env.MONGODBURL);
             console.log("db connected")
          }catch(err){
      console.log("db error")
          }
}
module.exports = connectdb;