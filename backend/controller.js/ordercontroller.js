const Order = require("../model/ordermodel");

module.exports.placeorder=async(req,res)=>{
          try{
    const {cartitems,total} = req.body;
    const userId = req.userid;
    if(cartitems.length === 0 || !total){
          return res.status(404).json({message:"no order in cart"})
    }
     if (!total || total <= 0) {
      return res.status(400).json({ message: "Invalid total amount" });
    }
    const orderitems= cartitems.map(item=>({
           name:item.name,
           price: item.price,
      image: item.image,
      size: item.size,
      qty: item.qty,
          }))
    const order = await Order.create({
         items:orderitems,
         user:userId,
         totalAmount: total,
    })
     return res.status(201).json({
      order,
    });
          }catch(err){
    console.error(err);
    res.status(500).json({ message: "Server error" });
          }
}
module.exports.getorders=async(req,res)=>{
          try{
    const userId = req.userid;
    const orders = await Order.find({user:userId})
    
    return res.status(200).json(orders)
          }catch(err){
     console.error(err);
    res.status(500).json({ message: "Server error" });
          }
}
module.exports.cancelorder=async(req,res)=>{
      try{
  const {id} = req.params;
  if(!id){
      return res.status(404).json({message:"id not found in cancel order"})
  }
  const item = await Order.findByIdAndDelete(id);
  const result  = await Order.find({user:req.userid})
  return res.status(200).json(result)
      }catch(err){
   return  res.status(500).json({message:"cancel order err",err})
      }
}
module.exports.getallorders=async(req,res)=>{
      try{
   const AllOrders = await Order.find().populate("user","name email");
   if(AllOrders.length === 0){
      return res.status(404).json({message:"orders not found"})
   }
   return res.status(200).json(AllOrders);
      }catch(err){
           return res.status(400).json({message:"admin order err",err})
      }
}
module.exports.updatestatus=async(req,res)=>{
      try{
    const {id} = req.params;        
   const {status} = req.body;
   const item = await Order.findById(id);
   if (!item) {
      return res.status(404).json({ message: "Order not found" });
    }
         item.status = status;
         await item.save(); 
         return res.status(200).json(item);
      }catch(err){
    return res.status(400).json({message:"status not update"})
      }
}