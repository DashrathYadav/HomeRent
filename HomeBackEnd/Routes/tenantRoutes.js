const {Router}= require("express");
const { createTenant } = require("../Controller/tenantHandler");
const router= Router();
router.post("/createTenant",createTenant);
// router.post("/updateTenant",updateTenant);
// router.post("/deleteTenant",deleteTenant);

module.exports=router;  