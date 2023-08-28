const adminSchema = require("../Schema/adminSchema");
const roomSchema = require("../Schema/roomSchema");
const tenantSchema = require("../Schema/tenantSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const maxAge = 60 * 60; //1 hour
function createToken(id) {
  return jwt.sign({ id }, process.env.SECRETE_SEED, { expiresIn: maxAge });
}

module.exports.createTenant = async (req, res) => {
  try {
    
    console.log("create tenanat hit");
    console.log(req.file);
    console.log(req.file?.AdharNumber);
    return ;
    // if no date provided default current date
    const defaultDate=`${new Date().getDate}-${new Date().getMonth}-${new Date().getFullYear}`;

    const tenantData = {
      AdharNumber: req.body.AdharNumber,
      tenantName: req.body.tenantName,
      role: "tenant",
      tenantProfileUrl: req.body.tenantProfileUrl|| "",
      tenantDoc: req.body.tenantDoc ||"",
      tenantMobile: req.body.tenantMobile || "" ,
      villageAddress:req.body.villageAddress||" ",
      deposited: req.body.Deposited || 0,
      email:req.body.email || "",
      registeredOn: req.body.registeredOn || defaultDate ,
      lastDay: req.body.lastDay|| "N/A",
      roomNo: req.body.roomNo || 0,
      note:req.body.note || " ",

    };

    let tenant = new tenantSchema(tenantData);
    let result = await tenant.save();

    const response={
      msg:"Tenent created successfully ",
      result:result,
    }
    res.status(200).send(response);
  } catch (err) {
    console.log("Error in creating Tenant", err);
  }
};

// update Tenant

// Delete Tenant

//login
module.exports.login = async (req, res) => {
  // required params :- roomNo ,  roomPassword
  try {
    console.log(req.body);
    const roomNo = Number(req.body.roomNo);
    const roomPassword = req.body.roomPassword;
    console.log("room request of ", roomNo, roomPassword);
    const room = await roomSchema.findOne({ roomNo: roomNo });
    const token = req?.headers?.cookie?.slice(4);
    console.log("token found is",token);
    
    console.log("found room", room);

    if (room?.roomPassword === roomPassword) {
      console.log("response successfully");
      res.status(201).send(room);
      return;
    } else if (token) {
      jwt.verify(token, process.env.SECRETE_SEED, async (err, decode) => {
        if (err) {
          console.log("token not match");
          res.status(401).send(`token not match Invalid credintial + ${err}`);
          return;
        }
        res.status(201).send(room);
        return;
      });
    } else {
      console.log("password not match");
      res.status(401).send("Invalid credintial");
      return;
    }
  } catch (err) {
    console.log("error in login", err);
    res.status(400).send(err);
  }
};

// module.exports.adminPassword = async(req,res)=>{
//    const admin= new adminSchema({
//     role:"Admin",
//     password:"1234",
//    });

//     admin.save();
// }

module.exports.adminLogin = async (req, res) => {
  // required params :- adminPassword
  try {
    console.log(req.body);
    const adminPass = req.body.adminPassword;
    const admin = await adminSchema.findOne({ role: "Admin" });
    if (!admin || admin?.password !== adminPass) {
      console.log("admin not found or Password not match");
      res.status(401).send("Invalid Credintial");
      return;
    }
    const token = createToken(adminPass);
    console.log("token is", token);
    console.log("admin login success");
    res
      .cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000, sameSite: 'none', secure: true }) //  hour
      .status(200)
      .send(admin);
      

  } catch (err) {
    console.log("error in login", err);
    res.status(400).send(err);
  }
};
