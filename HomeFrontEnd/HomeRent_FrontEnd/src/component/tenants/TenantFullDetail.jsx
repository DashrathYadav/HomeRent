import React from "react";
import { backendURL } from "../backEndURl";
import { useLoaderData } from "react-router-dom";
import "./TenantFullDetail.css";

export const tenantFullDetail = async ({ params }) => {
  try {
    const backedURL = backendURL() + "fetchFullTenantDetail";
    console.log("id to be searched is", params.id);
    let result = await fetch(backedURL, {
      body: JSON.stringify({ id: params.id }),
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    result = await result.json();

    console.log("tenant details", result);
    return result;
  } catch (err) {
    console.log("failed to fetch tenant detail", err);
  }
};

function TenantFullDetail() {
  let data = useLoaderData();
  data = data.result;
  console.log("full detail", data);

  return (
    <div className="TenantFullDetail--container">
      <div className="TenantFullDetail--page">
        <div  className="TenantFullDetail--imgSection">
          <img className="TenantFullDetail--tenantProfile" src={data.tenantProfileUrl}></img>
        </div>
      
        <div className="TenantFullDetail--infoSection">
          <table className="TenantFullDetail--table">
            <tr>
              <td>Photo Url:</td>
              <td><a target="_blank" href={data.tenantProfileUrl} >Photo</a></td>
            </tr>
            <tr>
              <td>Room No:</td>
              <td>{data.roomNo}</td>
            </tr>
            <tr>
              <td> Name:</td>
              <td><span>{data.tenantName}</span></td>
            </tr>
            <tr>
              <td>email:</td>
              <td><span>{data.email}</span></td>
            </tr>
            <tr>
              <td>Phone NO : </td>
              <td><span>{data.tenantMobile}</span></td>
            </tr>

            <tr>
              <td><span>AdharNumber:</span></td>
              <td><span>{data.AdharNumber}</span></td>
            </tr>

            <tr>
              <td>Docs Url :</td>
              <td>
                {" "}
                <a target="_blank" href={data.tenantDoc}>Link</a>
              </td>
            </tr>
            (y-m-d) 
            <tr>
              <td>registered On :</td>
              <td>{data.registeredOn} </td>
            </tr>
            <tr>
              <td>lastDay :</td>
              <td>{data.lastDay}  </td>
            </tr>

            <tr>
              <td>Village Addr :</td>
              <td><span>{data.villageAddress}</span></td>
            </tr>
            <tr>
              <td>Deposit :</td>
              <td>{data.deposited}</td>
            </tr>

            <tr>
              <td>Note :</td>
              <td><span>{data.note}</span></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TenantFullDetail;
