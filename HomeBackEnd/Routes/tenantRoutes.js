const {Router}= require("express");
const { createTenant, login, adminLogin } = require("../Controller/tenantHandler");
const router= Router();
router.post("/createTenant",createTenant);
// router.post("/updateTenant",updateTenant);
// router.post("/deleteTenant",deleteTenant);


// login.
router.post("/Login",login);
router.post("/adminLogin",adminLogin);

module.exports=router;  