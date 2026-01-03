const jwt = require('jsonwebtoken');
const isauth=async(req,res,next)=>{
     console.log("isauth triggered");
      try{
     let {token} = req.cookies;
     if(!token){
          return res.status(400).json({message:"token not found"})
     }
     let verifytoken = jwt.verify(token,process.env.JWTSECRET)
     if(!verifytoken){
          return res.status(400).json({message:"token not verify "})
     }
     console.log("UserID from token:", verifytoken.userid);

     req.userid = verifytoken.userid;
     next();
      }catch(err){
    console.log("isauth",err)
    return res.status(400).json({message:"error in is auth",err})
      }
}
module.exports = isauth;