const express = require("express");
const { addcart,  cartitems, deletecart } = require("../controller.js/cartcontroller");
const isauth = require("../middleware/isauth");
const cartRouter = express.Router();
cartRouter.post("/addcart",isauth,addcart);
cartRouter.get("/cartitems",isauth,cartitems);
cartRouter.get("/cartdelete/:id",isauth,deletecart);
module.exports = cartRouter
