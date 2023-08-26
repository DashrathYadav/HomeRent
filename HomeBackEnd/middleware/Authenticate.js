const tenantSchema = require("../Schema/tenantSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.adminAuthorize = async (req, res, next) => {
  try {
  
    //--> Token Technique.
    const token = req?.headers?.cookie?.slice(4);
    jwt.verify(token, process.env.SECRETE_SEED, async (err, decode) => {
      if (err) {
        console.log("token not match");
        res.status(401).send(`token not match Invalid credintial + ${err}`);
        return;
      } else {
        next();
        return;
      }
    });

    //-- > Adimn tag technique
      // const id=req.body._id;
    // const user = await tenantSchema.findById(id);
    // console.log(user);
    // if (user?.role === "Admin") {
    //   next();
    //   return;
    // }
  } catch {
    console.log("not a authorized user");
    res.status(401).send("Not a Authorized user");
  }
};
