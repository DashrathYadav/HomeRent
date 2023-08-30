const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongo = require("mongoose");
const bd = require("body-parser");
const app = express();
const cors = require("cors");
const multer  = require('multer')
const cookieParser = require("cookie-parser");
const roomRoutes = require("./Routes/roomRoutes");
const tenantRoutes = require("./Routes/tenantRoutes");
const adminSchema = require("./Schema/adminSchema");
// 
// https://homerent.netlify.app
app.use(
  cors({
    origin:"http://localhost:5173",
    credentials: true,
  })
);  


mongo.connect(process.env.DB_URL_DASHRATH);
mongo.connection.on("error", (err) => {
  console.log("Error Connection Failed", err);
});

//admin record initilize
function adminInitilize() {
  const admin = new adminSchema({
    role: "Admin",
    rooms: [],
    password: "1234",
  });

  admin.save();
}
mongo.connection.on("connected", (connected) => {
  console.log("DataBase Connection Successfull");

  // adminInitilize();
});

app.use(cookieParser());

app.use(bd.urlencoded({ extended: false }));
app.use(bd.json());

app.use(roomRoutes);
app.use(tenantRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    msg: "Error Bad Request can not find the page you are requesting for",
  });
});
const port= process.env.PORT || 3000
app.listen(port, () => {
  console.log("server up and running ");
});
