const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNo: {
    type:Number,
    required:true,
    unique:true,
  }, //Room No.
  years: [
    {
      year: Number, // Year of the records
      months: [
        {
          month: {
            // Month (1 to 12)
            type: Number,
            min: 1,
            max: 12,
          },
          tenantHeadName: String,
          tenantIds: [], //later chage to mongo DB object
          roomRent: Number, // Monthly rent amount
          members: Number, // Number of members in the room
          lightBillRent: Number,
          roomRentPaid: Number,
          lightBillRentPaid: Number,
          ExtraPaid: Number,
          note:String,
        },
        // ... (12 entries, one for each month)
      ],
    },
    // ... (each year's object)
  ],
});

module.exports = mongoose.model("roomS", roomSchema);
