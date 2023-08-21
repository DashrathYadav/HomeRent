const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    role:String,
    password:String,
});

module.exports=mongoose.model(admins,adminSchema);