import './MonthDetail.css';

function MonthDetail(props) {

    const map= new Map([
        [1,"January"],
        [2,"February"],
        [3,"March"],
        [4,"April"],
        [5,"May"],
        [6,"June"],
        [7,"July"],
        [8,"August"],
        [9,"September"],
        [10,"October"],
        [11,"November"],
        [12,"December"],
    ])

  return (
    <div className='MonthDetail--container' >
    <h3>{ map.get(props.month.month)}</h3>
    <h5>Tenents : {" "+props.month.tenantHeadName}</h5>
    <span>Room-Rent {" : "+props.month.roomRent}</span>
    <span>Light-Rent {" : "+props.month.lightBillRent}</span>
    <hr></hr>
    <span>Room-Rent {" : "+props.month.roomRentPaid}</span>
    <span>Light-Rent {" : "+props.month.lightBillRentPaid}</span>
    <span>Note : {props.month.note}</span>
    </div>
  )
}

export default MonthDetail