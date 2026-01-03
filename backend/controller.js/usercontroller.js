const User = require("../model/usermodel")

module.exports.getcuruser=async(req,res)=>{
          try{
     let user = await User.findById(req.userid).select("-password")
     if(!user){
          return res.status(400).json({message:"user not found in get cur"})
     }
     return res.status(200).json(user)
          }catch(err){
console.log("isauth",err)
    return res.status(400).json({message:"error in current user",err})
          }
}
module.exports.getadmin=async(req,res)=>{
     try{
  let adminemail  = req.email;
  if(!adminemail){
     return res.status(404).json({message:"admin is not found"})
  }
  return res.status(201).json({
     email:adminemail,
     role:"admin"
  })
     }catch(err){
console.log("get admin",err)
    return res.status(400).json({message:"error in get admin",err})
     }
}