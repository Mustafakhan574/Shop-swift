const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const uploadOnCloudinary=async(filepath)=>{
      cloudinary.config({ 
        cloud_name: process.env.CLOUDINARYNAME, 
        api_key: process.env.CLOUDINARYKEY, 
        api_secret: process.env.APISECRET
    });
    try{
if(!filepath){
          return null
    }
 const uploadResult = await cloudinary.uploader.upload(filepath)
    fs.unlinkSync(filepath)
    return uploadResult.secure_url
    }catch(err){
fs.unlinkSync(filepath)
console.log(err)
    }   
}
module.exports = uploadOnCloudinary;