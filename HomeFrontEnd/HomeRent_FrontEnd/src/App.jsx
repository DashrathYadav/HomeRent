import React from "react";
import { Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Login from "./component/login/Login"
import LanginPage from "./component/LanginPage"
import LoginOwner from "./component/login/LoginOwner"

import { Provider } from "react-redux";
import HomePage from "./component/home/HomePage";
import store from "./component/store/store";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
    <Route path="/" element={<LanginPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/loginOwner" element={<LoginOwner/>} />
    <Route path="/home" element={<HomePage/>} />
    </Route>
  )
)

function App() {
  return (
    <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
  )
}

export default App