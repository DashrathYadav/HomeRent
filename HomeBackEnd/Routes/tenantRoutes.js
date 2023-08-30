const { Router } = require("express");
const {
  createTenant,
  login,
  adminLogin,
  fetchTenantList,
  fetchFullTenantDetail,
} = require("../Controller/tenantHandler");
const multer = require("multer");
const { multerUpload } = require("../middleware/multerConfiguration");

const router = Router();

router.post("/createTenant",multerUpload.fields([{name:'tenantPic', maxCount:1},{name:'tenentDocs',maxCount:1}]), createTenant);
router.get("/fetchTenantList",fetchTenantList)
router.post("/fetchFullTenantDetail",fetchFullTenantDetail)

// router.post("/updateTenant",updateTenant);
// router.post("/deleteTenant",deleteTenant);

// login.
router.post("/Login", login);
router.post("/adminLogin", adminLogin);

module.exports = router;
