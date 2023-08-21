const roomSchema = require("../Schema/roomSchema");
//post request for creating new Room
module.exports.newRoomPost = async (req, res) => {
  // params need roomNo.

  console.log(req.body.roomNo);
  console.log(req.body.year);

  try {
    const room = {
      roomNo: req.body.roomNo,
      roomPassword:`${req.body.roomNo}`,
      years: [
        //each year as object
        {
          year: req.body.year,
          // each month as object as month.
          months: [
            {
              month: 1,
              tenantHeadName: "Ambika Yadav",
              tenantIds: [101],
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
          tenantIds: [103],
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
    console.log("room", room);
    room.years.push(yearData);
    console.log("room to be update is", room);
    let rooms = new roomSchema(room);
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
      tenantIds: [103],
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
    let rooms = new roomSchema(room);
    room = await rooms.save();
    console.log("month added successfully");
    res.status(200).send(room);
  } catch (err) {
    console.log("error in month creation");
    console.log(err);
  }
};

// creating update on month.
module.exports.updateMonthPost = async (req, res) => {
  // required parms:  room No, year
  //month,tenenatName,tenantIds, roomRent,members,lightBillrent

  try {
    const filter = { roomNo: req.body.roomNo };
    let room = await roomSchema.findOne(filter);
    let Month = room.years[req.body.year - 2023].months[req.body.month-1];
    console.log("old month deatail", room);
    console.log("month detail",Month);

    Month.tenantIds = req.body?.tenantIds || Month.tenantIds;
    Month.tenantHeadName = req.body?.tenantHeadName || Month.tenantHeadName;
    Month.roomRent = req.body.roomRent || Month.roomRent; // later implement default value  feature.
    Month.members = req.body.members || Month.members;
    Month.lightBillRent = req.body.lightBillRent || Month.lightBillRent;
    Month.roomRentPaid = req.body.roomRentPaid || Month.roomRentPaid;
    Month.lightBillRentPaid = req.body.lightBillRent || Month.lightBillRent;
    Month.ExtraPaid = req.body.ExtraPaid || Month.ExtraPaid;
    console.log("update month detail data", room);
    let rooms = new roomSchema(room);
    room = await rooms.save();
    console.log("month updated successfully");
    res.status(201).send(room);
  } catch (err) {
    console.log("error in month update");
    console.log(err);
    res.status(401).send("failed to update");
  }
};
