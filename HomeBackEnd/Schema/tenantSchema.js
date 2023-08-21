const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema({
  tenantName: {
    type: String,
    required: true,
  },
  role:String,
  tenantProfileUrl: String,
  tenantDoc: String,
  tenantMobile: String,
  Deposited: Number,
  RegisteredOn: Date,
  lastDay: Date,
  roomNo: Number,
});

module.exports = mongoose.model("tenants", tenantSchema);
