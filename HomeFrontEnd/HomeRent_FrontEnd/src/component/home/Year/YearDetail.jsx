import React from 'react'
import './YearDetail.css'
import MonthDetail from '../month/MonthDetail';

function YearDetail(props) {

    console.log(props.data.year);
    const monts=props.data.months;
    console.log(props.data.months[0]);

  return (
    <div className='YearDetail--container'>
    <hr></hr>
    <hr></hr>
    <table>
        <h1> {props.data.year}</h1>
        <div className='yeraDetail--year'>
        {
          monts.map((month,id)=>{
          return <MonthDetail id={id} month={month}/>
          })
        }
        </div>
        </table>
    </div>
  )
}

export default YearDetail