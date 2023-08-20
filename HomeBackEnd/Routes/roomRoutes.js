const {Router}= require("express");

const { newRoomPost, newYearPost, newMonthPost } = require("../Controller/roomHandler");

const router= Router();

router.post("/createRoom",newRoomPost);
router.post("/createYear",newYearPost);
router.post("/createMonth",newMonthPost);

module.exports=router;  