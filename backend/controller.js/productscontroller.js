const uploadOnCloudinary = require("../config/cloudinary");
const Products = require("../model/productmodel");

module.exports.addproducts=async(req,res)=>{
         try{
      let{name,description,price,category,subcategory,sizes,bestseller} = req.body;
      let image1 = await uploadOnCloudinary(req.files.image1[0].path);
      let image2 = await uploadOnCloudinary(req.files.image2[0].path);
      let image3 = await uploadOnCloudinary(req.files.image3[0].path);
      let image4 = await uploadOnCloudinary(req.files.image4[0].path);
       let productdata = {
          name,description,price:Number(price),category,subcategory,sizes:JSON.parse(sizes),bestseller:bestseller=== "true"?true:false,date:Date.now(),image1,image2,image3,image4
       }
       const product = await Products.create(productdata)
       return res.status(201).json(product)
         }catch(err){
            console.log(err)
   return res.status(400).json({message:"product add error",err})
         }
}
module.exports.listproducts=async(req,res)=>{
   try{
      const product = await Products.find({})
      return res.status(200).json(product)
   }catch(err){
console.log(err)
   return res.status(400).json({message:"list product error",err})
   }
}
module.exports.deleteproduct=async(req,res)=>{
   try{
   let {id} = req.params;
   const product = await Products.findByIdAndDelete(id)
   return res.status(200).json(product)
   }catch(err){
     console.log("delete err",err)
     return res.status(500).json({messgae:"delete err"},err)
   }
}