const { dataUri } = require("./dataUri");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports.cloudinaryUpload = async (file, folder) => {
  try {
    const fileDataUri = await dataUri(file);
    const res = await cloudinary.uploader.upload(fileDataUri, {
      folder: folder,
    });
    return res;
  } catch (err) {
    console.log("error in cloudnaryUpload", err);
  }
};
