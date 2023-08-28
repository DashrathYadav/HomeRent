const { Router } = require("express");
const {
  createTenant,
  login,
  adminLogin,
} = require("../Controller/tenantHandler");
const multer = require("multer");
const { upload } = require("../middleware/multerConfiguration");

const router = Router();

router.post("/createTenant",upload.fields([{name:'tenantPic', maxCount:1},{name:'tenentDocs',maxCount:1}]), createTenant);
// router.post("/updateTenant",updateTenant);
// router.post("/deleteTenant",deleteTenant);

// login.
router.post("/Login", login);
router.post("/adminLogin", adminLogin);

module.exports = router;
