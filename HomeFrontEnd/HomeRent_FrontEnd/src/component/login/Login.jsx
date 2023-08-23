import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {

  const [roomNo,setroomNo]=useState('');
  const [password,setpassword]=useState('');


  return (
    <div className='login--container'>

        <form className='login--form'>
        <h1 className='login--title'>Login</h1>
        <hr
        style={{

          color: 'black',
          borderColor: 'black',
          width:'100%',
          marginBottom: '40px',
        }}
      />
            <input className='login--input' type='number' name='roomNo' onChange={(e)=>{ setroomNo(e.target.value)}}  placeholder='Room No.' value={roomNo} ></input>
            <input className='login--input' type='password'  name='password' onChange={(e)=>{ setpassword(e.target.value)}} placeholder='Password'  value={password}></input>
            <span><Link to={'/loginOwner'}> Owner ? </Link> </span> 
           <br></br>
            <button className='login--button' type='submit'>Login</button>
        </form>

    </div>
  )
}

export default Login