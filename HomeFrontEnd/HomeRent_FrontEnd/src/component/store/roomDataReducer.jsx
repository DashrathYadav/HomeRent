import { createReducer } from "@reduxjs/toolkit";

const initialState={
    roomData:"",
}

const roomDatareducer = createReducer(initialState,{

    setRoomData : (state,payload)=>{
        console.log("setting room Data",payload.roomData);
        state.roomData=payload.roomData;
    },

});

export default roomDatareducer;