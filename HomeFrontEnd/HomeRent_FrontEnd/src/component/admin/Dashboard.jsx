import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard--container">
      <nav className="Dashboard--nav">
        <Link to={"roomDetails"}>
          <div className="Dashboard--viewDetails Dashboard--link">Details</div>
        </Link>

        <Link to={"create"}>
          <div className="Dashboard--Create Dashboard--link">Add</div>
        </Link>

        <Link to={"edit"}>
          <div className="Dashboard--Edit Dashboard--link">Edit</div>
        </Link>
       
      </nav>
      <div className="Dashboard--Outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
