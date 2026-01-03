const express = require('express');
const { getcuruser, getadmin } = require('../controller.js/usercontroller');
const isauth = require('../middleware/isauth');
const adminauth = require('../middleware/adminauth');
const userRoutes = express.Router();
userRoutes.get("/curuser",isauth, getcuruser);
userRoutes.get("/getadmin",adminauth, getadmin);
module.exports = userRoutes;