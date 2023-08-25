import { Navigate } from 'react-router-dom';
import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/css/bootstrap.min.css';

function toastSuccesstInvoke(message,direction="top-right"){
  
  toast.success(`! ${message}`,{
    position:"top-right",
    autoClose:3000,
    hideProgressBar:false,
    closeOnClick:true,
    pauseOnHover:true,
    draggable:true,
    progress:undefined,
    theme:'light',
    
  })
}

function toastErrortInvoke(message,direction="top-right"){
  
  toast.error(`! ${message}`,{
    position:"top-right",
    autoClose:3000,
    hideProgressBar:false,
    closeOnClick:true,
    pauseOnHover:true,
    draggable:true,
    progress:undefined,
    theme:'light',
    
  })
}



function NewRoom() {

    const [roomNo,setRoomNo]=useState('');

   async function  handleCreateRoom(e)
    {
        let result = await fetch(backedURL + "createRoom", {
            body: JSON.stringify({roomNo:roomNo}),
            method: "POST",
            credentials:'include',
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });

          if(result.status===200)
          {

            let roomData=sessionStorage.getItem('roomData');
            console.log(roomData);
            roomData=JSON.parse(roomData);
            roomData.years.unshift(roomNo);
            roomData=JSON.stringify(roomData);
            sessionStorage.setItem(roomData);
            toastSuccesstInvoke("Room Created Successfully");
             return <Navigate to={"/admin"}/>
          }
          else{
            console.log(result);
            toastErrortInvoke(result);
            return;
          }
    }

  return (
    <div className='NewRoom--container'>
        <h1>Create Room</h1>
        <div>
        Enter Room No: 
        <input type="number" onChange={
            (e) => {
                setRoomNo(e.target.value)
        }} ></input>
        <button onClick={handleCreateRoom} >Create Room</button>
        </div>
    </div>
  )
}

export default NewRoom