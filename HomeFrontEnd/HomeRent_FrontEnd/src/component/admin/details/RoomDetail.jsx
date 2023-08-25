import React from "react";
import "./RoomDetail.css";
import { useLoaderData, useParams } from "react-router-dom";
import YearDetail from "../../home/Year/YearDetail";

export const roomDataFetch = async ({ params }) => {
  const backedURL = "http://localhost:3000/";
  console.log("params room no", params.roomNo);
  let result = await fetch(backedURL + "login", {
    body: JSON.stringify({ roomNo: params.roomNo }),
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return result;
};

function RoomDetail() {
  const roomData = useLoaderData();
  console.log("got room data", roomData.years);
  const years=roomData.years;
  return <div className="RoomDetail--container">
    <div className="RoomDetail--room">
    { years.map( (year,id)=>{
        return <YearDetail id={id} data={year}/>
        } )
        }
    </div>
  </div>;
}

export default RoomDetail;
