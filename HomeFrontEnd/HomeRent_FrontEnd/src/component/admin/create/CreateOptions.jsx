import { Link, Outlet } from 'react-router-dom'
import './CreateOptions.css'

function CreateOptions() {
  console.log("Create options");
  return (
    <div className='CreateOptions--container'>
    <div className='CreateOptions--options'>
        <Link to={"newRoom"}> <span style={{backgroundColor:"red"}} className='CreateOptions--span'> New Room </span></Link>
        <Link to={"newYear"}> <span style={{backgroundColor:"grey"}} className='CreateOptions--span'> New Year </span></Link>
        <Link to={"newMonth"}> <span style={{backgroundColor:"green"}} className='CreateOptions--span'> + New Month </span></Link>
        </div>
        <div className='CreateOptions--outletContainer'>
        <hr></hr>
        <div className='CreateOptions--outlet'>
        <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default CreateOptions