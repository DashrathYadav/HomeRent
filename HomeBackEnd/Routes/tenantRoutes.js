const {Router}= require("express");

const { newRoomPost, newYearPost, newMonthPost } = require("../Controller/roomHandler");

const router= Router();

router.post("/createTenant",createTenant);
router.post("/updateTenant",updateTenant);
router.post("/deleteTenant",deleteTenant);

module.exports=router;  