const jwt = require('jsonwebtoken');
const adminauth=async(req,res,next)=>{
          try{
     const {token} =  req.cookies
     if(!token){
          return res.status(400).json({message:"admin token not found"})
     }
      let verifytoken = jwt.verify(token,process.env.JWTSECRET)
      if(!verifytoken){
          return res.status(400).json({message:"token not admin verify "})
     }
     req.email = process.env.EMAIL
     next()
          }catch(err){
console.log("admin isauth",err)
    return res.status(400).json({message:"error admin auth ",err})
          }
}
module.exports = adminauth