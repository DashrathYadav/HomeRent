import "./MonthDetail.css";

function MonthDetail(props) {
  const map = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"],
  ]);

  return (
    <div className="MonthDetail--container">
      <table>
      <tr>
        <th colSpan={2}>
          <h3>{map.get(props.month.month)}</h3>
        </th></tr>
        <br></br>
        <tr>
          <td>
            <h5>Tenent :</h5>
          </td>{" "}
          <td>
            <h5>{" " + props.month.tenantHeadName}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <span>Actul Room-Rent</span>:
          </td>{" "}
          <td>
            <span>{"  " + props.month.roomRent}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>Actul Light-Rent :</span>
          </td>{" "}
          <td>
            <span>{"  " + props.month.lightBillRent}</span>
          </td>
        </tr>
        <hr></hr>
        <tr><td>
          <span>paid Room-Rent : </span></td><td><span> {"  " + props.month.roomRentPaid}</span>
          </td></tr>
        <tr>
          <td>
            <span>paid Light-Rent : </span>
          </td>{" "}
          <td>
            <span> {"  " + props.month.lightBillRentPaid}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>Tenents :</span>
          </td>{" "}
          <td>
            <span>
              {" "}
              {props.month.tenantIds.map((tenant, key) => {
                return <span key={key}>{" " + tenant + ", "}</span>;
              })}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span>Note :</span>
          </td>
          <td>
            <span> {props.month.note}</span>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MonthDetail;
