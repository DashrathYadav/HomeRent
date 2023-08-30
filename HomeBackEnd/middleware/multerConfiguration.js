const multer = require("multer");
const path = require("path");
module.exports.multerUpload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, files, cb) => {
    const ext = path.extname(files.originalname);
    const allowed = [".png", ".jpg", ".jpeg", ".pdf"];

    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: {
    fileSize: 1 * 1024 * 1024 * 5,
  },
});
