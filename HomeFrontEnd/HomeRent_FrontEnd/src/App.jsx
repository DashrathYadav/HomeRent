import { Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Login from "./component/login/Login"
import LanginPage from "./component/LanginPage"
import LoginOwner from "./component/login/LoginOwner"

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
    <Route path="/" element={<LanginPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/loginOwner" element={<LoginOwner/>} />
    </Route>
  )
)

function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App