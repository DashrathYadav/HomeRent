const {Router}= require("express");

const router= Router();

router.post("/createNewYear",newYearPost);
router.post("/createNewMonth",newMonthPost);

module.exports=router;  