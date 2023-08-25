import './NewMonth.css'

function NewMonth() {
  return (
    <div className='newMonth--container'>

    <div className='newMonth--form'>
   Room No. <input type='number' name='roomNo' placeholder='Room No' required ></input><br></br>
   Year. <input type='number' name='year' placeholder='year' required></input><br></br>
   Month <input type='number' name='month' placeholder='Month' required></input><br></br>
   Rent: <input type='number' name='roomRent' placeholder='Rent' required></input><br></br>
   Light Rent: <input type='number' name='lightBillRent' placeholder='Light Rent' required></input><br></br>
   members: <input type='number' name='members' placeholder='Members living' required></input><br></br>
   Rent Paid: <input type='number' name='roomRentPaid' placeholder='Rent paid' required></input><br></br>
   LighBill Paid: <input type='number' name='lightBillRentPaid' placeholder='LightBill Rent paid' required></input><br></br>


    </div>

    </div>
  )
}

export default NewMonth