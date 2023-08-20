const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongo = require("mongoose");
const bd = require("body-parser");
const app = express();
const cors = require("cors");
const roomRoutes = require("./Routes/roomRoutes");

mongo.connect(process.env.DB_URL_DASHRATH);
mongo.connection.on("error", (err) => {
  console.log("Error Connection Failed", err);
});

mongo.connection.on("connected", (connected) => {
  console.log("DataBase Connection Successfull");
});

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(bd.json({ limit: "50mb" }));

app.listen(3000, () => {
  console.log("server up and running ");
});
