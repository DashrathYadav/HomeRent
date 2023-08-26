import {useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastErrortInvoke, toastSuccesstInvoke } from "../../customToast";
import './NewRoom.css'
import { backendURL } from "../../backEndURl";


function NewRoom() {
  const navigate=useNavigate();
  const [roomNo, setRoomNo] = useState("");
  const backedURL = backendURL();
  async function handleCreateRoom(e) {
    let result = await fetch(backedURL + "createRoom", {
      body: JSON.stringify({ roomNo: roomNo }),
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (result.status === 200) {
      let adminDetail = sessionStorage.getItem("adminDetail");
      console.log(adminDetail);
      adminDetail = JSON.parse(adminDetail);
      adminDetail.rooms.unshift(roomNo);
      adminDetail = JSON.stringify(adminDetail);
      sessionStorage.setItem('adminDetail',adminDetail);
      toastSuccesstInvoke("Room Created Successfully");

      setTimeout(()=>{navigate('/admin/roomDetails');},4000); 
   
    } else {
      console.log(result);
      toastErrortInvoke(result);
      return;
    }
  }

  return (
    <div className="NewRoom--container">
      <h1>Add Room</h1>
      <div className="newRoom--form">
      <table><tr><td>
        Enter Room No:</td><td> 
        <input
          type="number"
          onChange={(e) => {
            setRoomNo(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        </td></tr>
        </table>
      </div>
        <button style={{padding:'10px',backgroundColor:"#12c9ff",color:"white" }} onClick={handleCreateRoom}>+ Add Room</button>
      <ToastContainer />
    </div>
  );
}

export default NewRoom;
