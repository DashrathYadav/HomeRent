const {Router}= require("express");

const { newRoomPost, newYearPost, newMonthPost, updateMonthPost } = require("../Controller/roomHandler");

const router= Router();
//create
router.post("/createRoom",newRoomPost);
router.post("/createYear",newYearPost);
router.post("/createMonth",newMonthPost);

//update
router.post("/updateMonth",updateMonthPost);

module.exports=router;  