import React from "react";
import "./Details.css";
import { Link } from "react-router-dom";
function Details() {
  let data = sessionStorage.getItem("adminDetail");
  data = JSON.parse(data);
  console.log(data);
  let roomArray = data.rooms;
  console.log(roomArray)

  return (
    <div className="Details--container">
      <h1>Details</h1>
      <hr></hr>
      <div className="Details--roomNoDiv">
        {roomArray.map((room) => {
        return   <Link to={"roomDetail:id"}>
            <div className="Details--roomNo">
              Room No: {room}
            </div>
          </Link>;
        })}
      </div>
    </div>
  );
}

export default Details;
