import React from 'react'
import './Pipe.css'
function Pipe() {
    const Pipe = ['Max Pin Length','Mean OD','Mean Cbore Depth','Max ID','Max Cbore Diameter','Bevel Diameter','BoreBack Diameter','Min. Seal Width','Pin Relief','Min. Pin Box Tong Space','bBlack Cylinder Length','Min. Pin Tong Space','SRG Diameter','SRG Diameter', 'Minimum Over All Length']
    return (
        <div>
            <div style={{paddingBottom:15, paddingTop:15}}>
                <table>
                    <tr>
                        <td style={{ textAlign:'left',backgroundColor: "#1a487d", height: 30 }}>Total Number Of joints to be Inspected</td>
                        <td><input type='number'/></td>
                        
                    </tr>
                </table>
            </div>
            <div>
                <table className='PipeTable'>
                    
                    {[0,2,4,6,8,10,12,14].map((e)=>(

                    <tr>
                        {e===14?<td colspan='2' style={{ textAlign:'left',backgroundColor: "#1a487d", height: 30 }}>{Pipe[e]}</td>:<td style={{ textAlign:'left',backgroundColor: "#1a487d", height: 30 }}>{Pipe[e]}</td>}
                        {e===14?'':<td><input type='text' placeholder='Enter'/></td>}
                        {e===14?'':<td style={{ textAlign:'left',backgroundColor: "#1a487d", height: 30 }}>{Pipe[e+1]}</td>}
                        {e===14?<td colspan='2'><input type='text' placeholder='Enter'/></td>:<td><input type='text' placeholder='Enter'/></td>}
                    </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Pipe
