const mongoose=require('mongoose');

const roomSchema= new mongoose.Schema(
{

    roomNo:Int32Array,    // Reference to the user document
    years: [
      {
        year: Number,        // Year of the records
        months: [
          {
            month: Number,    // Month (1 to 12)
            tenantName:String,        
            rent: Number,     // Monthly rent amount
            members: Number,  // Number of members in the room
            pic: String ,      // URL or file path to the picture
            lightBillRent:Number,
            Remaining:Number,
            ExtraPaid:Number,
          },
          // ... (12 entries, one for each month)
        ]
      },
      // ... (each year's object)
    ]
  }
);


module.exports =mongoose.model('roomS',roomSchema);