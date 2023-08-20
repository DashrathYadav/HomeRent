const roomSchema = require("../Schema/roomSchema");
//post request for creating new Room
module.exports.newRoom = async (req, res) => {
  // params need roomNo.

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
              tenantName: "Ambika Yadav",
              tenantId: 101,
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
          tenantName: "Ambika Yadav",
          tenantId: 103,
          roomRent: 1000,
          members: 4,
          lightBillRent: 500,
          roomRentPaid: 0,
          lightBillRentPaid: 0,
          ExtraPaid: 0,
        },
      ],
    };

    const filter = { roomNo: req.body.roomNo };
    let room = await roomSchema.findOne(filter);
    room = room.years.push(yearData);
    room = await room.save();
    console.log("room saved successfully");
  } catch (err) {
    console.log("Error in years", err);
  }
};

// post request for creating new month
module.exports.newMonth = async (req, res) => {
  // required parms:  room No, year
  //month,tenenatName,tenantId, roomRent,members,lightBillrent

  try {
    const month = {
      month: req.body.month,
      tenantName: req.body.tenantName,
      tenantId: 103,
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
    room = await room.save();
    console.log("month added successfully");
  } catch (err) {
    console.log("error in month update");
    console.log(err);
  }
};
