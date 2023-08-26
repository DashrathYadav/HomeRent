import { Link, Outlet } from 'react-router-dom'
import './EidtOptions.css'

function EditOptions() {
  console.log("Edit options");
  return (
    <div className='EditOptions--container'>
    <div className='EditOptions--options'>
        {/* <Link to={"EditRoom"}> <span className='EditOptions--span'> New Room </span></Link> */}
        {/* <Link to={"EditYear"}> <span className='EditOptions--span'> New Year </span></Link> */}
        <Link to={"EditMonth"}> <span style={{backgroundColor:"purple"}} className='EditOptions--span'> Edit Month </span></Link>
        </div>
        <div className='EditOptions--outletContainer'>
        <br></br>
        <hr></hr>
        <hr></hr>
        <div className='EditOptions--outlet'>
        <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default EditOptions