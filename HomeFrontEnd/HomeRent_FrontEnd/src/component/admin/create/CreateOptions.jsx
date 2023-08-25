import { Link, Outlet } from 'react-router-dom'
import './CreateOptions.css'

function CreateOptions() {
  return (
    <div className='CreateOptions--container'>
    <div className='CreateOptions--options'>
        <Link to={"newRoom"}> <span className='CreateOptions--span'> New Room </span></Link>
        <Link to={"newYear"}> <span className='CreateOptions--span'> New Year </span></Link>
        <Link to={"newMonth"}> <span className='CreateOptions--span'> New Month </span></Link>
        </div>
        <div className='CreateOptions--outletContainer'>
        <Outlet/>
        </div>
    </div>
  )
}

export default CreateOptions