import { useState } from "react";
import "../create/NewMonth.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastErrortInvoke, toastSuccesstInvoke } from "../../customToast";
import { useNavigate } from "react-router-dom";
import { backendURL } from "../../backEndURl";


// Mostly copy of NewMonth component 
function EditMonth() {
  const navigate=useNavigate();
  const [optionValue, setOptionValue] = useState([]);
  const [formData, setFromData] = useState({
    roomNo: "",
    year: "",
    month: "",
    roomRent: "",
    lightBillRent: "",
    members: "",
    roomRentPaid: "",
    lightBillRentPaid: "",
    tenantHeadName: "",
    ExtraPaid: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // handle tenant name changes
  const handleOptionChange = (e) => {
    let arr = [...optionValue];
    const pos = Number(e.target.getAttribute("pos"));
    arr[pos] = e.target.value;
    setOptionValue(arr);
  };

  //handle tenant add options
  const addOption = (e) => {
    console.log(optionValue);
    let arr = [...optionValue];
    let id = `${optionValue.length}`;
    const ele = document.getElementById(id);
    console.log(ele);
    arr.push(ele.value);
    setOptionValue(arr);
  };

  //handle tenant remove options
  const removeOption = (e) => {
    let arr = [...optionValue];
    arr.pop();
    setOptionValue(arr);
  };

  const handleEditSubmit = async (e) => {
    try {
      const data = {
        ...formData,
        tenantIds: optionValue,
      };
      const backedURL =backendURL();
      let result = await fetch(backedURL + "updateMonth", {
        body: JSON.stringify(data),
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!result.ok) {        
        throw Error(`Failed to Edit  Month ${result}`);
      } else {
        console.log(result);
        toastSuccesstInvoke("edited Successfully");
        setTimeout(()=>{navigate('/admin/roomDetails');},4000);
        return;
      }
    } catch (err) {
      //handling error display
      toastErrortInvoke(`Failed to Edit Month`);
      console.log("error in handleLoginFormSubmit", err);
    }
  };

  return (
    <div className="newMonth--container">
    <h1>Edit Month</h1>
    <br></br>
    <table>
      <div className="newMonth--form">
      <tr> <td>
        Room No.{" "}</td><td>
        <input
          type="number"
          name="roomNo"
          placeholder="Room No"
          onChange={handleChange}
          required
        ></input>
        </td>
        </tr>
        <br></br>
        <tr> <td>
        Year.{" "}</td><td>
        <input
          type="number"
          name="year"
          placeholder="year"
          required
          onChange={handleChange}
        ></input>
        </td> </tr> 
        <br></br>
        <tr><td>
        Month{" "}</td><td>
        <input
          type="number"
          name="month"
          placeholder="Month"
          required
          onChange={handleChange}
        ></input>
       </td> </tr>
        <br></br>
        <tr><td>
        Rent:{" "}</td><td>
        <input
          type="number"
          name="roomRent"
          placeholder="Rent"
          required
          onChange={handleChange}
        ></input>
       </td> </tr>
        <br></br>
        <tr><td>
        LightBill Rent:{" "}</td><td>
        <input
          type="number"
          name="lightBillRent"
          placeholder="Light Rent"
          required
          onChange={handleChange}
        ></input>
        </td></tr>
        <br></br>
        <tr><td>
        members:{" "}</td><td>
        <input
          type="number"
          name="members"
          placeholder="Members living"
          required
          onChange={handleChange}
        ></input>
        </td></tr>
        <br></br>
        <tr><td>
        Rent Paid:{" "}</td><td>
        <input
          type="number"
          name="roomRentPaid"
          placeholder="Rent paid"
          required
          onChange={handleChange}
        ></input>
        </td></tr>
        <br></br>
        <tr><td>
        LighBill Paid:{" "}</td><td>
        <input
          type="number"
          name="lightBillRentPaid"
          placeholder="LightBill Rent paid"
          required
          onChange={handleChange}
        ></input>
        </td></tr>
        <br></br>
        <tr><td>
        Tenent Head:{" "} </td><td>
        <input
          type="text"
          name="tenantHeadName"
          placeholder="Room holder"
          required
          onChange={handleChange}
        ></input>
        </td></tr>
        <br></br>
        <tr><td>
        Tenent Names :</td><td>
        <div>
          {optionValue.map((option, id) => {
            return (
              <>
              <input
                type="text"
                name="tenant name"
                key={id}
                pos={`${id}`}
                onChange={handleOptionChange}
                value={option}
              ></input>
              <br></br>
              </>
            );
          })}
          <input style={{width:"100px"}}
            id={`${optionValue.length}`}
            type="text"
            name="tenant name"
            key={`${optionValue.length}`}
            placeholder="Tenant Name"
          ></input>
          <br></br>
          <br></br>
          <button style={{padding:"5px",paddingRight:"20px" ,backgroundColor:"lightgreen",marginRight:"3px"}} onClick={addOption}>add</button>
          <button style={{padding:"5px",paddingRight:"10px" ,backgroundColor:"#ff8533"}} onClick={removeOption}>remove</button>
        </div>
        </td></tr>
        <br></br>
        <br></br>
        <tr><td>
        ExtraPaid:{" "}</td><td>
        <input
          type="number"
          name="ExtraPaid"
          placeholder="Extra Paid"
          required
          onChange={handleChange}
        ></input>
        </td></tr>
        <br></br>
        <tr><td>
        Note{" "}:</td><td>
        <textarea
          type="text"
          name="note"
          placeholder="Note"
          required
          onChange={handleChange}
        ></textarea>
        </td></tr>
      </div>
      </table>
      <br></br>
      <hr></hr>
      <hr></hr>
      <br></br>
      <button style={{padding:'10px',backgroundColor:"#12c9ff",color:"white" }} onClick={handleEditSubmit}>+ Edit Month</button>
      <ToastContainer/>
      <br></br>
    </div>
  );
}

export default EditMonth;
