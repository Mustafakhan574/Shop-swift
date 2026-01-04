const env= require("dotenv")
const cors =require('cors');
const express = require('express');
const connectdb = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authroutes");
const userRoutes = require("./routes/userroutes");
const productrouter = require("./routes/productroutes");
const cartRouter = require("./routes/cartroutes");
const orderRouter = require("./routes/orderroutes");
env.config();
let app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
     origin:["https://shop-swift-frontend6.onrender.com","https://shop-swift-admin1.onrender.com"],
     credentials:true
}))
app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes);
app.use("/api/product",productrouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);
console.log("Cart router mounted at /api/cart");
const port = process.env.PORT || 3001
app.get("/",(req,res)=>{
          res.send("hello from server")
})
app.listen(port,()=>{
          console.log(`http://localhost:${port}`)
          connectdb();
})
