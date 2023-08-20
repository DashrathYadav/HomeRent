const roomSchema = require("../Schema/roomSchema");
//post request for creating new Room
module.exports.newRoomPost = async (req, res) => {
  // params need roomNo.
  
  console.log(req.body.roomNo);
  console.log(req.body.year);
  console.log(req.body);
  try {
    const room = {
      roomNo: req.body.roomNo,
      years: [
        //each year as object
        {
          year: req.body.year,
          // each month as object as month.
          months: [
            {
              month: 1,
              tenantHeadName: "Ambika Yadav",
              tenantId: [101],
              roomRent: 1000,
              members: 4,
              lightBillRent: 500,
              roomRentPaid: 0,
              lightBillRentPaid: 0,
              ExtraPaid: 0,
            },
          ],
        },
      ],
    };

    const result = await roomSchema.create(room);
    console.log("room Create succesfully", result);
    res.status(200).send(result);    
  } catch (err) {
    console.log(err);
  }

};

// post request for creating new Year.
module.exports.newYearPost = async (req, res) => {
  // pass parametes roomNo , yearNo,month
  try {
    const yearData = {
      year: req.body.year,
      // each month as object as month.
      months: [
        {
          month: 1,
          tenantHeadName: "Ambika Yadav",
          tenantId: [103],
          roomRent: 5000,
          members: 3,
          lightBillRent: 700,
          roomRentPaid: 0,
          lightBillRentPaid: 0,
          ExtraPaid: 0,
        },
      ],
    };

    const filter = { roomNo: req.body.roomNo };
    let room = await roomSchema.findOne(filter);
    console.log("room",room);
     room.years.push(yearData);
    console.log("room to be update is",room);
    let rooms= new roomSchema(room);
    room = await rooms.save();
    console.log("room saved successfully");
    res.status(200).send(room);    
  } catch (err) {
    console.log("Error in years", err);
  }
};

// post request for creating new month
module.exports.newMonthPost = async (req, res) => {
  // required parms:  room No, year
  //month,tenenatName,tenantId, roomRent,members,lightBillrent

  try {
    const month = {
      month: req.body.month,
      tenantHeadName: req.body.tenantName,
      tenantId: [103],
      roomRent: req.body.roomRent, // later implement default value  feature.
      members: req.body.members,
      lightBillRent: req.body.lightBillRent,
      roomRentPaid: 0,
      lightBillRentPaid: 0,
      ExtraPaid: 0,
    };

  
    const filter = { roomNo: req.body.roomNo };
    let room = await roomSchema.findOne(filter);
    room.years[req.body.year - 2023].months.push(month);
    let rooms= new roomSchema(room);
    room = await rooms.save();
    console.log("month added successfully");
    res.status(200).send(room);    
  } catch (err) {
    console.log("error in month update");
    console.log(err);
  }
  
};
