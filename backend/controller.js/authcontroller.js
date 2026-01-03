const User = require("../model/usermodel");
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { generatetoken, generatetoken1 } = require("../config/token");
module.exports.signup=async(req,res)=>{
  try{
      const {name,email,password} = req.body;
      const existuser = await User.findOne({email})
      if(existuser){
          return res.status(400).json({message:"user already exist"})
      }
      if(!validator.isEmail(email)){
       return res.status(400).json({message:"enter valid email"})
      }
      if(password.length < 8){
          return res.status(400).json({message:"enter strong password"})
      }
      let hashpassword = await bcrypt.hash(password,10);
      const user  = await User.create({
          name,email,password:hashpassword
      })
      let token = await generatetoken(user._id)
      res.cookie("token",token,{
          httpOnly:true,
          secure:true,
          sameSite:"none",
          maxAge:7*24*60*60*1000
      })
      return res.status(201).json(user)
  }catch(err){
   console.log("signup err",err)
   return res.status(500).json({message:"sign up err",err})
  }
}
module.exports.login=async(req,res)=>{
          try{
   const {email,password} = req.body;
   const userlogin = await User.findOne({email})
   if(!email){
          return res.status(404).json({message:"user not found"})
   }
   let ismatch = await bcrypt.compare(password,userlogin.password)
   if(!ismatch){
          return res.status(400).json({message:"incorect password"})
   }
   let token = await generatetoken(userlogin._id)
      res.cookie("token",token,{
          httpOnly:true,
          secure:true,
          sameSite:"none",
          maxAge:7*24*60*60*1000
      })
      return res.status(200).json(userlogin)
          }catch(err){
       console.log("login err",err)
   return res.status(500).json({message:"log in err",err})
          }
}
module.exports.logout=async(req,res)=>{
          try{
         res.clearCookie("token")
return res.status(200).json({message:"logout"})
          }catch(err){
       console.log("logout err",err)
       return res.status(400).json({message:"logout"},err)
          }
}
module.exports.googlelogin=async(req,res)=>{
           try{
   const {email,password} = req.body;
   const userlogin = await User.findOne({email})
   if(!userlogin){
      userlogin = await User.create({
        name,email
      })
   }
   let token = await generatetoken(userlogin._id)
      res.cookie("token",token,{
          httpOnly:true,
          secure:true,
          sameSite:"none",
          maxAge:7*24*60*60*1000
      })
      return res.status(200).json(userlogin)
          }catch(err){
       console.log("login err",err)
   return res.status(500).json({message:"google log in err",err})
          }
}
module.exports.adminlogin=async(req,res)=>{
    try{
    const {email,password} = req.body;
    if(email === process.env.EMAIL && password === process.env.PASSWORD){
        let token = await generatetoken1(email)
      res.cookie("token",token,{
          httpOnly:true,
          secure:true,
          sameSite:"none",
          maxAge:7*24*60*60*1000
      })
      return res.status(200).json(token)
    }
    return res.status(400).json({message:"invalid creadentials"})
    }catch(err){
        console.log("login err",err)
   return res.status(500).json({message:"admin log in err",err})
    }
}
