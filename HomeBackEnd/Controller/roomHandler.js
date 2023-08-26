const adminSchema = require("../Schema/adminSchema");
const roomSchema = require("../Schema/roomSchema");

//post request for creating new Room
module.exports.newRoomPost = async (req, res) => {
  // params need roomNo.

  console.log(req.body.roomNo);
  console.log(req.body.year);

  try {
    const room = {
      roomNo: Number(req.body.roomNo),
      roomPassword: `${req.body.roomNo}`,
      years: [
        //each year as object
        {
          year: new Date().getFullYear(),
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
              note: "Nothing",
            },
          ],
        },
      ],
    };

    const admin = await adminSchema.findOne({ role: "Admin" });
    if (!admin) {
      throw Error("Admin not found Roon can not be created");
    }
    admin.rooms.unshift(Number(req.body.roomNo));
    await admin.save();
    const result = await roomSchema.create(room);
    console.log("room Create succesfully", result);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(`Failed to create room ${err}`);
  }
};

// post request for creating new Year.
module.exports.newYearPost = async (req, res) => {
  // pass parametes roomNo , yearNo
  try {
    const yearData = {
      year: Number(req.body.year),
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
          note: "Nothing",
        },
      ],
    };

    const filter = { roomNo: req.body.roomNo };
    let room = await roomSchema.findOne(filter);

    if (!room) {
      throw Error("Room Not Exist wrong room No");
    }

    const isExist = room.years.find((year) => {
      return year.year === Number(req.body.year);
    });

    if (isExist) {
      throw Error("Year Already Exist");
    }

    console.log("room", room);
    room.years.unshift(yearData);
    console.log("room to be update is", room);
    let rooms = new roomSchema(room);
    room = await rooms.save();
    console.log("room saved successfully");
    res.status(200).send(room);
  } catch (err) {
    console.log("Error in year creation");
    res.status(400).send(`Failed to Create Error ${err}`);
  }
};

// post request for creating new month
module.exports.newMonthPost = async (req, res) => {
  // required parms:  room No, year
  //month,tenenatName,tenantId, roomRent,members,lightBillrent

  try {
    const month = {
      month: Number(req.body.month),
      tenantHeadName: req.body.tenantHeadName || "",
      tenantIds: req.body.tenantIds || [],
      roomRent: req.body.roomRent || 0, // later implement default value  feature.
      members: req.body.members || 0,
      lightBillRent: req.body.lightBillRent || 0,
      roomRentPaid: req.body.roomRentPaid || 0,
      lightBillRentPaid: req.body.lightBillRent || 0,
      ExtraPaid: req.body.ExtraPaid || 0,
      note: req.body.note || "Nothing",
    };
    const filter = { roomNo: req.body.roomNo };
    let room = await roomSchema.findOne(filter);

    if (!room) {
      throw Error("Not able to find room | room Not exist");
    }
    console.log(room);
    const year = room.years.find((year) => {
      console.log(year.year, "!=", Number(req.body.year));
      return year.year === Number(req.body.year);
    });
    if (!year) {
      throw Error("Year not Exist");
    }
    const alreadyExist = year.months.find((month) => {
      return month.month === Number(req.body.month);
    });

    if (alreadyExist) {
      throw Error("Month already exist update insted of adding new");
    }

    year.months.unshift(month);
    let rooms = new roomSchema(room);
    room = await rooms.save();
    console.log("month added successfully");
    res.status(200).send(room);
  } catch (err) {
    console.log("error in month creation");
    console.log(err);
    res.status(401).send(` failed to create ${err} `);
  }
};

// creating update on month.
module.exports.updateMonthPost = async (req, res) => {
  // required parms:  room No, year
  //month,tenenatName,tenantIds, roomRent,members,lightBillrent

  try {
    const filter = { roomNo: req.body.roomNo };
    console.log("details", req.body.month);
    let room = await roomSchema.findOne(filter);
    if (!room) {
      throw Error("Not able to find room | room Not exist");
    }
    const year = room.years.find((year) => {
      console.log(year.year, "!=", Number(req.body.year));
      return year.year === Number(req.body.year);
    });

    if (!year) {
      throw Error("Year not Exist");
    }

    const pos = year.months.findIndex((month) => {
      return month.month === Number(req.body.month);
    });
    console.log("pos is", pos);
    if (pos === -1) {
      throw Error("Month not Exist to Update");
    }
    let Month = year.months[pos];
    console.log("old month deatail", room);
    console.log("month detail", Month);

    Month.tenantIds = Month.tenantIds;
    //checking empty array of tenants.
    if (req.body?.tenantIds) {
      if (req.body?.tenantIds.length > 0) Month.tenantIds = req.body?.tenantIds;
    }
    Month.tenantHeadName = req.body?.tenantHeadName || Month.tenantHeadName;
    Month.roomRent = req.body.roomRent || Month.roomRent; // later implement default value  feature.
    Month.members = req.body.members || Month.members;
    Month.lightBillRent = req.body.lightBillRent || Month.lightBillRent;
    Month.roomRentPaid = req.body.roomRentPaid || Month.roomRentPaid;
    Month.lightBillRentPaid = req.body.lightBillRent || Month.lightBillRent;
    Month.ExtraPaid = req.body.ExtraPaid || Month.ExtraPaid;
    Month.note = req.body.note || Month.note;
    console.log("update month detail data", room);
    let rooms = new roomSchema(room);

    room = await rooms.save();
    console.log("month updated successfully");
    res.status(201).send(room);
  } catch (err) {
    console.log("error in month update");
    console.log(err);

    res.status(401).send(` failed to update ${err} `);
  }
};
