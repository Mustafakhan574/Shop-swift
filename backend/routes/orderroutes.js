const express = require("express");
const isauth = require("../middleware/isauth");
const { placeorder, getorders, cancelorder, getallorders, updatestatus } = require("../controller.js/ordercontroller");
const orderRouter = express.Router();
orderRouter.post("/placeorder",isauth,placeorder)
orderRouter.get("/getorders",isauth,getorders)
orderRouter.get("/getallorders",isauth,getallorders)
orderRouter.get("/cancelorder/:id",isauth,cancelorder)
orderRouter.post("/updateorders/:id",isauth,updatestatus)
module.exports = orderRouter;