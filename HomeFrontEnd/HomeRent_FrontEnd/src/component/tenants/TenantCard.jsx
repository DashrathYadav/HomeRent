import React from 'react'
import './TenantCard.css'
function TenantCard( props) {
  return (
    <div className='TenantCard--container'>
        <div className='TenantCard--card'>
            <div className='TenantCard--imgFrame'>
            <img className='TenantCard--img' src= {props.data.tenantProfileUrl} alt='profile pic'></img>
            </div>
            <hr></hr>
            <div className='TenantCard--info'>
            <span className='TenantCard--field'> name : </span> <span className='TenantCard--value'  > {props.data.tenantName}</span>
            <br></br>
            <span className='TenantCard--field'> Ph No : </span > <span className='TenantCard--value'> {props.data.tenantMobile}</span>

            </div>
        </div>
    </div>
  )
}

export default TenantCard