import React from "react";
import './Bss.css'
function Bss() {
    const Mh = ['Manual Lifting','Tag Lines','Body Position','Signals','Mechanical Lifting','Slings','Other']
    const PPE = ['Head','Clothing','Eyes','Hard Hat','Face','Feet','Ear','PFD','Hands','Respirator','Other']
    const Tools = ['Proper Tool','Guards/ Safetys','Proper Condition','Pinch Points','Proper Use','Hot Spots','Other']
    return (
    <div >
        <div style={{display:"flex", justifyContent:'space-between'}}>
      <div style={{ paddingTop: 15 }}>
        <table className="bss_table">
          <tr>
            <th colspan="6" style={{ backgroundColor: "#1a487d", height: 45 }}>
              Material Handling
            </th>
          </tr>
          <tr>
          {['S','AR','','S','AR',''].map((e)=>(
            <th  style={ e==''?{height:45}:{backgroundColor: "#1a487d", height: 45 }}>
              {e}
            </th> 
          ))}
          </tr>

          {[0, 2, 4, 6].map((e, i) => (
            <tr style={{ height: 35 }}>
              {/* <td>{el}</td> */}
              <td>           
                <input type="checkbox" placeholder="Enter" />
              </td>
              <td>
              <input type="checkbox" placeholder="Enter" />
              </td>
              {e === 6?<td colspan='4'>
                {Mh[e]}
              </td>
              : <td>
                  {Mh[e]}
                  </td>}
              {e===6?'':<td> 
                            
                <input type="checkbox" placeholder="Enter" />
              </td>}
              {e===6?'':<td>
                <input type="checkbox" placeholder="Enter" />
              </td>}
              {e===6?'':<td>
                {Mh[1+e]}
              </td>}
            </tr>
          ))}
        </table>
      </div>
      <div style={{ paddingTop: 15 }}>
        <table className="bss_table">
          <tr>
            <th colspan="6" style={{ backgroundColor: "#1a487d", height: 45 }}>
              Material Handling
            </th>
          </tr>
          <tr>
          {['S','AR','','S','AR',''].map((e)=>(
            <th  style={ e==''?{height:45}:{backgroundColor: "#1a487d", height: 45 }}>
              {e}
            </th> 
          ))}
          </tr>

          {[0, 2, 4, 6,8,10].map((e, i) => (
            <tr style={{ height: 35 }}>
              {/* <td>{el}</td> */}
              <td>           
                <input type="checkbox" placeholder="Enter" />
              </td>
              <td>
              <input type="checkbox" placeholder="Enter" />
              </td>
              {e === 10?<td colspan='4'>
                {PPE[e]}
              </td>
              : <td>
                  {PPE[e]}
                  </td>}
              {e===10?'':<td> 
                            
                <input type="checkbox" placeholder="Enter" />
              </td>}
              {e===10?'':<td>
                <input type="checkbox" placeholder="Enter" />
              </td>}
              {e===10?'':<td>
                {PPE[1+e]}
              </td>}
            </tr>
          ))}
        </table>
      </div>
      <div style={{ paddingTop: 15 }}>
        <table className="bss_table">
          <tr>
            <th colspan="6" style={{ backgroundColor: "#1a487d", height: 45 }}>
              Material Handling
            </th>
          </tr>
          <tr>
          {['S','AR','','S','AR',''].map((e)=>(
            <th  style={ e==''?{height:45}:{backgroundColor: "#1a487d", height: 45 }}>
              {e}
            </th> 
          ))}
          </tr>

          {[0, 2, 4, 6].map((e, i) => (
            <tr style={{ height: 35 }}>
              {/* <td>{el}</td> */}
              <td>           
                <input type="checkbox" placeholder="Enter" />
              </td>
              <td>
              <input type="checkbox" placeholder="Enter" />
              </td>
              {e === 6?<td colspan='4'>
                {Tools[e]}
              </td>
              : <td>
                  {Tools[e]}
                  </td>}
              {e===6?'':<td> 
                            
                <input type="checkbox" placeholder="Enter" />
              </td>}
              {e===6?'':<td>
                <input type="checkbox" placeholder="Enter" />
              </td>}
              {e===6?'':<td>
                {Tools[1+e]}
              </td>}
            </tr>
          ))}
        </table>
      </div>
    </div>
    <div style={{ paddingTop: 15 }}>
        <table className='Bss_table1'>
            <tr>
                <td style={{ backgroundColor: "#1a487d", height: 45 }}>Was Feedback Given</td>
                <td>Yes <input type="checkbox" placeholder="Enter" /></td>
                <td>No <input type="checkbox" placeholder="Enter" /></td>

            </tr>
        </table>
    </div>
    </div>
  );
}

export default Bss;
