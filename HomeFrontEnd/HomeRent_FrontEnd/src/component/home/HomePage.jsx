import React from 'react'
import './HomePage.css'
import { useSelector } from 'react-redux';
import YearDetail from './Year/YearDetail';

function HomePage() {
    let roomData=sessionStorage.getItem('roomData');
    console.log(roomData);
    roomData=JSON.parse(roomData);
    const years=roomData.years;
    

  return (
    <div className='homePage--container'>
    <h1>Home</h1>
    <div className='homePage--yearContainer'>
        { years.map( (year,id)=>{
        return <YearDetail id={id} data={year}/>
        } )
        }
    </div>
    </div>
  )
}

export default HomePage