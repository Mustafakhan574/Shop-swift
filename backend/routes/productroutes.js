const express = require("express");
const { addproducts, listproducts, deleteproduct } = require("../controller.js/productscontroller");
const upload = require("../middleware/multer");
const adminauth = require("../middleware/adminauth");
const productrouter = express.Router();

productrouter.post("/addproduct",upload.fields([{name:"image1",maxCount:1},
          {name:"image2",maxCount:1},
          {name:"image3",maxCount:1},
          {name:"image4",maxCount:1}]),addproducts)
productrouter.get("/list",listproducts);
productrouter.post("/deleteproduct/:id",adminauth,deleteproduct)

module.exports = productrouter;
