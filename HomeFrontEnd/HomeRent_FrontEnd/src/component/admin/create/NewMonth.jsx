import { useState } from "react";
import "./NewMonth.css";

function NewMonth() {
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

  return (
    <div className="newMonth--container">
      <div className="newMonth--form">
        Room No.{" "}
        <input
          type="number"
          name="roomNo"
          placeholder="Room No"
          onChange={handleChange}
          required
        ></input>
        <br></br>
        Year.{" "}
        <input type="number" name="year" placeholder="year" required  onChange={handleChange}></input>
        <br></br>
        Month{" "}
        <input type="number" name="month" placeholder="Month" required  onChange={handleChange}></input>
        <br></br>
        Rent:{" "}
        <input
          type="number"
          name="roomRent"
          placeholder="Rent"
          required
          onChange={handleChange}
        ></input>
        <br></br>
        LightBill Rent:{" "}
        <input
          type="number"
          name="lightBillRent"
          placeholder="Light Rent"
          required
          onChange={handleChange}
        ></input>
        <br></br>
        members:{" "}
        <input
          type="number"
          name="members"
          placeholder="Members living"
          required
          onChange={handleChange}
        ></input>
        <br></br>
        Rent Paid:{" "}
        <input
          type="number"
          name="roomRentPaid"
          placeholder="Rent paid"
          required
          onChange={handleChange}
        ></input>
        <br></br>
        LighBill Paid:{" "}
        <input
          type="number"
          name="lightBillRentPaid"
          placeholder="LightBill Rent paid"
          required
          onChange={handleChange}
        ></input>
        <br></br>
        Tenent Head:{" "}
        <input
          type="text"
          name="tenantHeadName"
          placeholder="Room holder"
          required
          onChange={handleChange}
        ></input>
        <br></br>
        Tenent Names:
        <div>
          {optionValue.map((option, id) => {
            return (
              <input
                type="text"
                name="tenant name"
                key={id}
                pos={`${id}`}
                onChange={handleOptionChange}
                value={option}
              ></input>
            );
          })}
          <input
            id={`${optionValue.length}`}
            type="text"
            name="tenant name"
            key={`${optionValue.length}`}
            placeholder="Tenant Name"
          ></input>
          <button onClick={addOption}>add</button>
          <button onClick={removeOption}>remove</button>
        </div>
        <br></br>
        ExtraPaid:{" "}
        <input
          type="number"
          name="ExtraPaid"
          placeholder="Extra Paid"
          required
          onChange={handleChange}
        ></input>
        <br></br>
        Note:{" "}
        <input type="number" name="note" placeholder="Note" required  onChange={handleChange}></input>
      </div>
    </div>
  );
}

export default NewMonth;
