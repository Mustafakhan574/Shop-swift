const Cart = require("../model/cartmodel");
const User = require("../model/usermodel");
const  mongoose  = require("mongoose");
module.exports.addcart=async(req,res)=>{
          try{
const {name,price,image,size,} = req.body;
          const curuser = await User.findById(req.userid)
          if(!curuser){
                    return res.status(400).json({message:"user not found"})
          }
          const exist = await Cart.findOne({name,user:curuser._id})
          if(exist){
                return res.status(400).json({message:"user already exist"})    
          }
          const newcart = await Cart.create({
                    name,price,image,size,user:curuser._id
          })
          return res.status(201).json(newcart);
          }catch(err){
         console.log(err)
         return res.status(400).json({message:"add to cart err",err})
          }
          
}
module.exports.cartitems = async (req, res) => {
  try {
    const allitems = await Cart.find({ user:req.userid});
    return res.status(200).json(allitems);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "items error found" });
  }
};
module.exports.deletecart=async(req,res)=>{
  try{
   const {id} = req.params;
  if(!id){
    return res.status(404).json({message:"id of cart not find"})
  }
    const cart =  await Cart.findByIdAndDelete(id);
    const final = await Cart.find({user:req.userid})
      return res.status(200).json(final)
  }catch(err){
    res.status(400).json({message:"cart delete error",err})
  }
  
}

