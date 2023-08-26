import {useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import './NewYear.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastErrortInvoke, toastSuccesstInvoke } from "../../customToast";
import { backendURL } from "../../backEndURl";
function NewYear() {
    const navigate=useNavigate();
    const [roomNo, setRoomNo] = useState("");
    const [year, setYear] = useState("");
    const backedURL = backendURL();
    async function handleAddYear(e) {
      let result = await fetch(backedURL + "createYear", {
        body: JSON.stringify({ roomNo: roomNo,year:year }),
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
  
      if (result.status === 200) {
        console.log(result);
        toastSuccesstInvoke("Year add Successfully");
        setTimeout(()=>{navigate('/admin/roomDetails');},4000);
      } else {
        console.log(result);
        toastErrortInvoke(result);
        return;
      }
    }
  
    return (
      <div className="NewRoom--container">
        <h1>Add Year</h1>
        <br></br>
        <div className="newYear--form">
        <table>
        <tr><td>
          Enter Room No:</td><td>
          <input
            type="number"
            onChange={(e) => {
              setRoomNo(e.target.value);
            }}
          ></input></td></tr><br></br>  
          <tr><td>
          Enter Year :</td><td>
          <input
            type="number"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          ></input></td></tr>
          <br></br>
          {/* <button onClick={handleCreateRoom}>Add Year</button> */}
          <button style={{padding:'10px',backgroundColor:"#12c9ff",color:"white" }} onClick={handleAddYear}>+ Add Year</button>
        </table>
        </div>
        <ToastContainer />
      </div>
    );
  }

export default NewYear