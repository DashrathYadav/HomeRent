module.exports.dataUri = async (file) => {
    try {
      const b64 = Buffer.from(file.buffer).toString("base64");
      let dataURI = "data:" + file.mimetype + ";base64," + b64;
      return dataURI;
    } catch (error) {
      console.log("error in dataUri",error);

  };
}
