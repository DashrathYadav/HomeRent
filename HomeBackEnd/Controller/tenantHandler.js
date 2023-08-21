const tenantSchema = require("../Schema/tenantSchema");

module.exports.createTenant = async (req, res) => {

  try{
  const tenantData = {
    AdharNumber:req.body.AdharNumber,
    tenantName: req.body.tenantName,
    role:"tenant",
    tenantProfileUrl: req.body.tenantProfileUrl,
    tenantDoc: req.body.tenantDoc,
    tenantMobile: req.body.tenantMobile,
    deposited: req.body.Deposited,
    registeredOn: new Date(),
    lastDay: new Date(),
    roomNo: req.body.roomNo,

  };

  let tenant = new tenantSchema(tenantData);
  let result= await tenant.save();

  res.status(200).send("Tenent created successfully "+ result);
}
catch(err)
{
  console.log("Error in creating Tenant",err);
}



};

// update Tenant

// Delete Tenant
