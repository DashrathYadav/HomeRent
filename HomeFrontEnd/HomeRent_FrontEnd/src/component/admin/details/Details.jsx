import React from "react";
import "./Details.css";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
      <br></br>
      <div className="Details--roomNoDiv">
        {roomArray.map((room,id) => {
        return   <Link to={`${room}`}>
            <div className="Details--roomNo">
              Room No: {room}
            </div>
           
          </Link>;   
        })}
      </div>
      <br></br>
      <hr></hr>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default Details;
