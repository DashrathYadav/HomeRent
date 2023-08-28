const { Router } = require("express");
const {
  createTenant,
  login,
  adminLogin,
} = require("../Controller/tenantHandler");
const multer = require("multer");
const router = Router();
const upload = multer({ storage: multer.memoryStorage(),limits:{fi} });

router.post("/createTenant", upload.fields([{}]), createTenant);
// router.post("/updateTenant",updateTenant);
// router.post("/deleteTenant",deleteTenant);

// login.
router.post("/Login", login);
router.post("/adminLogin", adminLogin);

module.exports = router;
