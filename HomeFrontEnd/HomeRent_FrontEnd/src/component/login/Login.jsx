import React, { useState } from "react";
import "./Login.css";
import { Link, redirect, redirectDocument } from "react-router-dom";
import { useDispatch } from "react-redux";
import { backendURL } from "../backEndURl";

function Login() {

  const dispatch= useDispatch();

  const backedURL = backendURL();

  const [roomNo, setroomNo] = useState("");
  const [password, setpassword] = useState("");

  async function handleLoginFormSubmit(e) {
    try {
      const data = {
        roomNo,
        roomPassword: password,
      };
      let result = await fetch(backedURL + "login", {
        body: JSON.stringify(data),
        method: "POST",
        credentials:'include',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!result.ok) throw Error("Failed to Login");
      else {

        result= await result.json();
        result=JSON.stringify(result);
        console.log("login result",result);
        sessionStorage.setItem('roomData',result);
        location.href='/home';

      }
    } catch (err) {
      //handling error display
      document
        .getElementsByClassName("login--input")[1]
        .classList.add("login--wrongPassword");

      console.log("error in handleLoginFormSubmit", err);
    }
  }

  return (
    <div className="login--container">
      <div className="login--form">
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
          type="number"
          name="roomNo"
          onChange={(e) => {
            setroomNo(e.target.value);
          }}
          placeholder="Room No."
          value={roomNo}
        ></input>
        <input
          className="login--input"
          type="password"
          name="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Password"
          value={password}
        ></input>
        <span>
          <Link to={"/loginOwner"}> Owner ? </Link>{" "}
        </span>
        <br></br>
        <button
          className="login--button"
          type="submit"
          onClick={handleLoginFormSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
