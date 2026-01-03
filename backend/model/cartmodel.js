const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
          name:{
                    type:String,
                    required:true
          },
          price:{
                    type:Number,
                    required:true
          },
          image:{
                    type:String,
                    required:true
          },
   
          size:[],
          user:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"User"
          },
          qty: {
    type: Number,
    required: true,
    default: 1 
  }
})
const Cart = mongoose.model("Cart",CartSchema)
module.exports = Cart