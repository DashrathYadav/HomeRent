const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongo = require("mongoose");
const bd = require("body-parser");
const app = express();
const cors = require("cors");

const roomRoutes = require("./Routes/roomRoutes");
const tenantRoutes=require("./Routes/tenantRoutes");

mongo.connect(process.env.DB_URL_DASHRATH);
mongo.connection.on("error", (err) => {
  console.log("Error Connection Failed", err);
});

mongo.connection.on("connected", (connected) => {
  console.log("DataBase Connection Successfull");
});

app.use(
  cors({
    origin: "*",
  })
);

app.use(bd.urlencoded({extended:false}));
app.use(bd.json());

app.use(roomRoutes);
app.use(tenantRoutes);

app.use((req,res,next)=>{
  res.status(404).json({
      msg: "Error Bad Request can not find the page you are requesting for"
  })
})

app.listen(3000, () => {
  console.log("server up and running ");
});
