const express = require('express');
const { signup, login, logout, googlelogin, adminlogin } = require('../controller.js/authcontroller');
const authRoutes = express.Router();
authRoutes.post("/signup",signup)
authRoutes.post("/login",login)
authRoutes.get("/logout",logout)
authRoutes.post("/googlelogin",googlelogin)
authRoutes.post("/adminlogin",adminlogin)
module.exports = authRoutes;