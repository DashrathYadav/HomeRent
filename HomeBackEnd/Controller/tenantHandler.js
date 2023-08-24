const adminSchema = require("../Schema/adminSchema");
const roomSchema = require("../Schema/roomSchema");
const tenantSchema = require("../Schema/tenantSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const maxAge = 60 * 60; //1 hour
function createToken(id) {
  return jwt.sign({ id },"This is the secret key", { expiresIn: maxAge });
}

module.exports.createTenant = async (req, res) => {
  try {
    const tenantData = {
      AdharNumber: req.body.AdharNumber,
      tenantName: req.body.tenantName,
      role: "tenant",
      tenantProfileUrl: req.body.tenantProfileUrl,
      tenantDoc: req.body.tenantDoc,
      tenantMobile: req.body.tenantMobile,
      deposited: req.body.Deposited,
      registeredOn: new Date(),
      lastDay: new Date(),
      roomNo: req.body.roomNo,
    };

    let tenant = new tenantSchema(tenantData);
    let result = await tenant.save();
    res.status(200).send("Tenent created successfully " + result);
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
    console.log("room request of ",roomNo,roomPassword);
    const room = await roomSchema.findOne({ roomNo: roomNo });

    console.log("found room", room);

    if (room?.roomPassword !== roomPassword) {
      console.log("password not match");
      res.status(401).send("Invalid credintial");
      return;
    }
    console.log("response successfully")
  
    res.status(201).send(room);
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
    const adminPass=req.body.adminPassword;
    const admin=await adminSchema.findOne({role:'Admin'});
    if( !admin || (admin?.password !== adminPass) )
    {
      console.log("admin not found or Password not match");
      res.status(401).send("Invalid Credintial");
      return;
    }
    const token = createToken(adminPass);
    console.log("token is",token);
    console.log("admin login success");
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 10000 }).status(200).send(admin); // 1 hour
    // res.status(200).send(admin);


  } catch (err) {
    console.log("error in login", err);
    res.status(400).send(err);
  }
};
