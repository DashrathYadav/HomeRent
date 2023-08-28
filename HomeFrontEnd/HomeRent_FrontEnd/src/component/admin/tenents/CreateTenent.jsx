import React, { useEffect, useState } from "react";
import "./CreateTenent.css";
import axios from "axios";
import profile from "../../../assets/tenant.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { backendURL } from "../../backEndURl";
function CreateTenent() {
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState();
  const [selectedDocs, setSelectedDocs] = useState();
  const [preview, setPreview] = useState();

  const [formData, setformData] = useState({
    AdharNumber: "",
    tenantName: "",
    tenantProfileUrl: "",
    tenantMobile: "",
    villageAddress: "",
    tenantDoc: "",
    deposited: "",
    email: "",
    registeredOn: "",
    lastDay: "",
    roomNo: "",
    note: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    const file = new FormData();
    file.append("tenantPic", selectedFile);
    file.append("tenentDocs", selectedDocs);
    file.append("tenantName", formData.tenantName);
    file.append("email", formData.email);
    file.append("tenantMobile", formData.tenantMobile);
    file.append("AdharNumber", formData.AdharNumber);
    file.append("villageAddress", formData.villageAddress);
    file.append("deposited", formData.deposited);
    file.append("registeredOn", formData.registeredOn);
    file.append("lastDay", formData.lastDay);
    file.append("roomNo", formData.roomNo);
    file.append("note", formData.note);
    const backedURL = backendURL()+'createTenant';
console.log(file);
    axios
      .post(backedURL, file, {
        withCredentials:true,
        headers: {"Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        setErrorMessage("An error occurred. Please try again later.");
        console.log(err);
      });
  };

  // handling proflie select dialogbox trigger
  const triggerImageSelect = (e) => {
    document.getElementById("profileimage").click();
  };

  // handeling image selectd url;

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    console.log("objectUrl =", objectUrl);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const onSelectDocs = (e) => {
    if (!e.target.file || e.target.file.length === 0) {
      setSelectedDocs(undefined);
      return;
    }
    setSelectedDocs(e.target.files[0]);
    return;
  };
  return (
    <>
      <div className="CreateTenent--MainContainer">
        <h1>Tenent</h1>
        <br></br>
        <div className="CreateTenent--imagecontainer">
          <input
            type="file"
            name="profileimage"
            id="profileimage"
            onChange={onSelectFile}
            required
          />
          <img
            className="CreateTenent--profile"
            src={preview || profile}
            alt="profile image"
            onClick={triggerImageSelect}
          ></img>
          <h4 className="CreateTenent--profiletext">Profile Picture</h4>
        </div>
        <br></br>
        <br></br>
        <div className="CreateTenent--fileUpload">
          <label>Addhard Card / Docs </label>
          <br></br>
          <br></br>
          <input
            type="file"
            name="selectedDocs"
            onChange={onSelectDocs}
          ></input>
        </div>
        <br></br>
        <div className="CreateTenent--form">
          <input
            type="text"
            name="tenantName"
            placeholder="Name"
            required
            value={formData.tenantName}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <input
            type="text"
            name="tenantMobile"
            placeholder="Phone No."
            required
            value={formData.tenantMobile}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <input
            type="text"
            name="AdharNumber"
            placeholder="Adhar Number"
            required
            value={formData.AdharNumber}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <textarea
            name="villageAddress"
            placeholder="Village Address."
            required
            value={formData.villageAddress}
            onChange={handleInputChange}
          ></textarea>
          <br></br>
          <input
            type="number"
            name="deposited"
            placeholder="deposit"
            required
            value={formData.deposited}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <label>Registration Date:</label>
          <input
            type="date"
            name="registeredOn"
            required
            value={formData.registeredOn}
            onChange={handleInputChange}
          ></input>
            <br></br>
            <label>Last Date:</label>
          <input
            
            type="date"
            name="lastDay"
            required
            value={formData.lastDay}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <input
            type="number"
            name="roomNo"
            placeholder="Room No."
            required
            value={formData.roomNo}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <textarea
            name="note"
            placeholder="Note..."
            required
            value={formData.note}
            onChange={handleInputChange}
          ></textarea>

          <br></br>

          <br></br>
        </div>
        {errorMessage && (
          <div className="CreateTenent--Login--error-message">
            {errorMessage}
          </div>
        )}
        <button onClick={handleSignUp}>Create Tenent</button>
      </div>
    </>
  );
}
export default CreateTenent;
