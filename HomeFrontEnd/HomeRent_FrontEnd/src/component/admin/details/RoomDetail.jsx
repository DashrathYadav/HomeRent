import React from "react";
import "./RoomDetail.css";
import { useLoaderData, useParams } from "react-router-dom";
import YearDetail from "../../home/Year/YearDetail";
import { toastErrortInvoke } from "../../customToast";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { backendURL } from "../../backEndURl";

export const roomDataFetch = async ({ params }) => {
  const backedURL = backendURL();


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
  const navigate = useNavigate();
  const roomData = useLoaderData();
  console.log("got room data", roomData.years);
  if (!roomData.years) {
    toastErrortInvoke(`Failed to fetch room Data}`);
    setTimeout(() => {
      navigate("/admin/roomDetails");
    }, 4000);
    return (
      <div>
        Error
        <ToastContainer/>
      </div>
    );
  }
  const years = roomData.years;
  return (
    <div className="RoomDetail--container">
      <div className="RoomDetail--room">
        {years.map((year, id) => {
          return <YearDetail id={id} data={year} />;
        })}
      </div>
    </div>
  );
}

export default RoomDetail;
