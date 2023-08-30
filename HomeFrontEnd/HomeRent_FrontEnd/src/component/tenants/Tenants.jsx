import { Link, NavLink, Outlet } from "react-router-dom";
import './Tenants.css'


function Tenants() {

    

  return <div className="Tenants--Container">
    <nav className="Tenants--nav">
    <Link to={"createTenant"}>
          <div className="Tenants--viewDetails Tenants--link">+ New Tenant</div>
        </Link>

        <Link to={"tenantsList"}>
          <div className="Tenants--Create Tenants--link">View Tenant</div>
        </Link>

        <Link to={"/section"}>
          <div className="Tenants--Edit Tenants--link">Home</div>
        </Link>
    </nav>
    <br></br>
    <hr></hr>
    <br></br>
   <div className="Tenants--outlet">
   <Outlet/>
   </div>
  </div>;
}

export default Tenants;
