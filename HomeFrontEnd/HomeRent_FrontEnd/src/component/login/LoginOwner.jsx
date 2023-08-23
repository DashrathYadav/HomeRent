import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


function LoginOwner() {

  const [password,setpassword]=useState("");
  
 


  return (
    <div className='login--container'>

        <form className='login--form' action='' method='post'>
        <h1 className='login--title'>Login</h1>
        <hr
        style={{

          color: 'black',
          borderColor: 'black',
          width:'100%',
          marginBottom: '40px',
        }}
      />
            <input className='login--input' onChange={(e)=>{ setpassword(e.target.value); console.log(password)} } type='password'  name='password' placeholder='Password' value={password} ></input>
            <span><Link to={'/login'}>Tenant ?</Link></span> 
           <br></br>
            <button className='login--button' type='submit'>Login</button>
        </form>

    </div>
  )
}

export default LoginOwner