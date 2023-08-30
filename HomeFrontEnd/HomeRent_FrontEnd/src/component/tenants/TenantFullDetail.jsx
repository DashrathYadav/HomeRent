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
              <td>{data.tenantName}</td>
            </tr>
            <tr>
              <td>email:</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>Phone NO : </td>
              <td>{data.tenantMobile}</td>
            </tr>

            <tr>
              <td>AdharNumber :</td>
              <td>{data.AdharNumber}</td>
            </tr>

            <tr>
              <td>Docs Url :</td>
              <td>
                {" "}
                <a href={data.tenantDoc}>Link</a>
              </td>
            </tr>
            <tr>
              <td>Docs :</td>
              <td>
                {" "}
                <iframe className="TenantFullDetail--pdfView"
                  src={data.tenantDoc}
                ></iframe>{" "}
              </td>
            </tr>
            <tr>
              <td>registered On :</td>
              <td>{data.registeredOn} (y-m--d) </td>
            </tr>
            <tr>
              <td>lastDay :</td>
              <td>{data.lastDay} (y-m-d) </td>
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
              <td>{data.note}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TenantFullDetail;
