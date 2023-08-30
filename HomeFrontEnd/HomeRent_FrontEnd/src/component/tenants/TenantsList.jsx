import { backendURL } from "../backEndURl";
import axios from "axios";
import "./TenantsList.css";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import TenantCard from "./TenantCard";

export const tenantList = async () => {
  try {
    const url = backendURL() + "fetchTenantList";
    const result = await axios.get(url, { withCredentials: true });
    console.log(result);
    return result;
  } catch (err) {
    console.log("error in tenentlist loder", err);
  }
};

function TenantsList() {

 const navigate= useNavigate();
  const data = useLoaderData();
  const dataList = data.data.result;
  console.log(dataList);

//   function handleCardClick(e){
//     const id= e.target.;

//     console.log("value of clicked tenant", id);
//     navigate(`${id}`);

//   }

  return (
    <div className="TenantsList--container">
      <div className="TenantsList--grid">
          {dataList.map((tenantInfo, key) => {
            return <div className="TenantsList--card"  key={key}   onClick={(e)=>{ navigate(`/tenants/${tenantInfo._id}`)}} >
             <TenantCard data={tenantInfo} />
            </div>
          })}
        
      </div>
      <div>
      </div>
    </div>
  );
}

export default TenantsList;
