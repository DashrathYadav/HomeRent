import {configureStore} from "@reduxjs/toolkit";
import roomDatareducer from "./roomDataReducer.jsx";

const store= configureStore({
    reducer:{
        component:roomDatareducer,
    }
});

 export default store;