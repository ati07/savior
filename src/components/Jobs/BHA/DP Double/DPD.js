import React from "react";
import "./DPD.css";
function DPD() {
  const rows = [];
  for (var i = 0; i < 10; i++) {
    rows.push(i + 1);
  }
 
  return (
    <div style={{padding:10}}>
      <table className="table_DPD">
        <tr>
          <th className='th'>No</th>
          <th colSpan="5" className='th'>Before Reface</th>
          <th style={{ width: 60 }} className='th'></th>
          <th colSpan="5" className='th'>After Refcase & Adjust</th>
        </tr>

        <tr>
          <td>Serial Number</td>
          <td> Connection</td>
          <td>0°</td>
          <td>90°</td>
          <td>180°</td>
          <td>270°</td>
          <td style={{backgroundColor: '#1a487d'}}></td>
          <td>0°</td>
          <td>90°</td>
          <td>180°</td>
          <td>270°</td>
        </tr>

        {rows.map((e) => (
          <>
            <tr>
              <td rowSpan="2">{e}</td>
              <td>Pin</td>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => (
                <>
                  {e===4?<td style={{backgroundColor: '#1a487d'}}></td >:<td><input type="checkbox" /></td>}
                </>
                
              ))}
            </tr>
            <tr>
              <td>Box</td>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => (
                <>
                {e===4?<td style={{backgroundColor: '#1a487d'}}></td >:<td><input type="checkbox" /></td>}
              </>
              ))}
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}

export default DPD;
