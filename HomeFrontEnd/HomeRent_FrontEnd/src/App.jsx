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
import CreateTenent from "./component/tenants/CreateTenent";
import Section from "./component/section/Section";
import Tenants from "./component/tenants/Tenants";
import TenantsList, { tenantList } from "./component/tenants/TenantsList";
import LandingPage from "./component/LandingPage";
import TenantFullDetail, { tenantFullDetail } from "./component/tenants/TenantFullDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginOwner" element={<LoginOwner />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/section" element={<Section />} />
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
      <Route path="/tenants" element={<Tenants />}>
        <Route path="createTenant" element={<CreateTenent/>} />
        <Route path="tenantsList" element={<TenantsList />} 
        loader={tenantList}>
      </Route>
      <Route path=":id" element={<TenantFullDetail/>} loader={tenantFullDetail} />
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
