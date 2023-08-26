const {Router}= require("express");

const { newRoomPost, newYearPost, newMonthPost, updateMonthPost } = require("../Controller/roomHandler");
const { adminAuthorize } = require("../middleware/Authenticate");

const router= Router();
//create
router.post("/createRoom",adminAuthorize,newRoomPost);
router.post("/createYear",adminAuthorize,newYearPost);
router.post("/createMonth",adminAuthorize,newMonthPost);

//update
router.post("/updateMonth",adminAuthorize,updateMonthPost);



module.exports=router;  