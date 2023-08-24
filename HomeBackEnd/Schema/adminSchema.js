const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    role:String,
    rooms:[],
    password:String,
});

module.exports=mongoose.model("admins",adminSchema);