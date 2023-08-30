const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema({
  AdharNumber:{
    type:String,
    unique:true,
  },
  tenantName: {
    type: String,
    required: true,
  },
  role:String,
  tenantProfileUrl: String,
  tenantDoc: String,
  tenantMobile: String,
  villageAddress:String,
  email:String,
  deposited: Number,
  registeredOn: String,
  lastDay: String,
  roomNo: Number,
  note:String,
});

module.exports = mongoose.model("tenants", tenantSchema);
