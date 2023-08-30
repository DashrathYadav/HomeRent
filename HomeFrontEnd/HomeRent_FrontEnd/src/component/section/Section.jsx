import React from "react";
import "./Section.css";
import { useNavigate } from "react-router-dom";
function Section() {
  const navigate = useNavigate();
  return (
    <div className="Section--container">
      <div className="Section--buttons">
        <button
          style={{
            padding: "10px",
            backgroundColor: "#12c9ff",
            color: "white",
          }}
          className="Section--button"
          onClick={(e) => {
            navigate("/admin");
          }}
        >
          {" "}
          Rooms
        </button>
        <button
          style={{
            padding: "10px",
            backgroundColor: "#1317EC",
            color: "white",
          }}
          onClick={(e) => {
            navigate("/tenants");
          }}
        >
          {" "}
          Tenants
        </button>
      </div>
    </div>
  );
}

export default Section;
