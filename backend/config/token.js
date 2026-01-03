const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();
module.exports.generatetoken=async(userid)=>{
    try{
     let token = await jwt.sign({userid},process.env.JWTSECRET,{
          expiresIn:"7d"
     })
     return token;
    }catch(err){
     console.log("token err")
    }
}
module.exports.generatetoken1=async(email)=>{
    try{
     let token = await jwt.sign({email},process.env.JWTSECRET,{
          expiresIn:"7d"
     })
     return token;
    }catch(err){
     console.log("token err")
    }
}