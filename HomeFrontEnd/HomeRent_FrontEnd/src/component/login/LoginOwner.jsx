import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { backendURL } from "../backEndURl";

function LoginOwner() {
  const backedURL =backendURL();
 const navigate=useNavigate();

  const [password, setpassword] = useState("");

  async function handleLoginFormSubmit(e) {
    try {
      const data = {
        adminPassword: password,
      };
      let result = await fetch(backedURL + "adminLogin", {
        body: JSON.stringify(data),
        method: "POST",
        credentials:'include',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!result.ok) throw Error("Failed to Login");
      else {
        result=await result.json()
       result= JSON.stringify(result);
       console.log(result);   
        sessionStorage.setItem('adminDetail',result);
        // location.href='/admin';
        navigate('/admin');
        
      }
    } catch (err) {
      //handling error display
      document
        .getElementsByClassName("login--input")[0]
        .classList.add("login--wrongPassword");

      console.log("error in handleLoginFormSubmit", err);
    }
  }

  return (
    <div className="login--container">
      <div className="login--form" action="" method="post">
        <h1 className="login--title">Login</h1>
        <hr
          style={{
            color: "black",
            borderColor: "black",
            width: "100%",
            marginBottom: "40px",
          }}
        />
        <input
          className="login--input"
          onChange={(e) => {
            setpassword(e.target.value);
            console.log(password);
          }}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
        ></input>
        <span>
          <Link to={"/login"}>Tenant ?</Link>
        </span>
        <br></br>
        <button className="login--button"   onClick={handleLoginFormSubmit} >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginOwner;
