import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./component/login/Login";
import LoginOwner from "./component/login/LoginOwner";

import { Provider } from "react-redux";
import HomePage from "./component/home/HomePage";
import store from "./component/store/store";
import Dashboard from "./component/admin/Dashboard";
import Details from "./component/admin/details/Details";
import RoomDetail, {
  roomDataFetch,
} from "./component/admin/details/RoomDetail";
import CreateOptions from "./component/admin/create/CreateOptions";
import NewRoom from "./component/admin/create/NewRoom";
import NewMonth from "./component/admin/create/NewMonth";
import NewYear from "./component/admin/create/NewYear";
import EditOptions from "./component/admin/edits/EditOptions";
import EditMonth from "./component/admin/edits/EditMonth";
import LanginPage from "./component/LandingPage";
import CreateTenent from "./component/admin/tenents/CreateTenent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<CreateTenent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginOwner" element={<LoginOwner />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/admin" element={<Dashboard />}>
        <Route path="roomDetails" element={<Details />}>
          <Route
            path=":roomNo"
            element={<RoomDetail />}
            loader={roomDataFetch}
          />
        </Route>
        <Route path="create" element={<CreateOptions />}>
          <Route path="newRoom" element={<NewRoom />} />
          <Route path="newYear" element={<NewYear />} />
          <Route path="newMonth" element={<NewMonth />} />
        </Route>
        <Route path="edit" element={<EditOptions />}>
          <Route path="EditMonth" element={<EditMonth />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
