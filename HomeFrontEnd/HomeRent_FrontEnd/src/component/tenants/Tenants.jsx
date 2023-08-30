import { Link, NavLink, Outlet } from "react-router-dom";
import './Tenants.css'


function Tenants() {

    

  return <div className="Tenants--Container">
    <div className="Tenants--Links">
      <Link to={"createTenant"}><span className="Tenants--span" > +  New Tenant</span></Link>
      <Link to={"tenantsList"}><span className="Tenants--span ">  view Tenant</span></Link>
    </div>
    <br></br>
    <hr></hr>
    <br></br>
   <div className="Tenants--outlet">
   <Outlet/>
   </div>
  </div>;
}

export default Tenants;
