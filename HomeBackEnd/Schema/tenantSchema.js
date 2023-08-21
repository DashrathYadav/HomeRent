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
  deposited: Number,
  registeredOn: Date,
  lastDay: Date,
  roomNo: Number,
});

module.exports = mongoose.model("tenants", tenantSchema);
