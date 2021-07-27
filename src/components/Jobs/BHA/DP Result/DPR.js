import React from 'react'
import './DPR.css'
function DPR() {
    const Pin = ['Prime Pins:','Shop Recut Pins:','Cracked Pins:','Short Tools Joint:','Damaged hardbands:','ECC Wear:','Missing Protectors:']
    const Box = ['Prime Pins:','Shop Recut Pins:','Cracked Pins:','Short Tools Joint:','Damaged hardbands:','ECC Wear:','Missing Protectors:']
    const Tube = ['Total Joints:','Premium:','Class 2:','Class 3:','Bent:','ROD Wear','IPC Condition 1:','IPC Condition 2:','IPC Condition 3:','IPC Condition 4:','NO IPC','Scrap']
    const Total = ['TOTAL MACHINE SHOP JOINTS RECUTS ONLY:','TOTAL MACHINE SHOP JOINTS WITH HARDBANDS:','TOTAL JOINTS HARDBAND ONLY:','TOTAL RIG READY JOINTS:','TOTAL SCRAP JOINTS:']
    return (
        <div>
        <div style={{display:'flex'}}>
            <div>
                <div style={{display:'flex'}}>
                    <div>
                        <table>
                            <tr>
                                <th colSpan='2'>Pin Connection/Tool Joint Results</th>
                            </tr>
                            {Pin.map((e)=>(
                              <tr>
                                <td>{e}</td>
                                <td><input type="text" placeholder="Enter"/></td>
                            </tr>  
                            ))}
                        </table>
                    </div>
                    <div>
                    <table>
                            <tr>
                                <th colSpan='2'>Box Connection/Tool Joint Results</th>
                            </tr>
                            {Box.map((e)=>(
                              <tr>
                                <td>{e}</td>
                                <td><input type="text" placeholder="Enter"/></td>
                            </tr>  
                            ))}
                        </table>
                    </div>
                </div>
                <div>
                    <table>
                        <tr>
                            <th colSpan='2'>Total</th>
                        </tr>
                        {Total.map((e)=>(
                            <tr colSpan='2'>
                                <td>{e}</td>
                                <td><input type="text" placeholder="Enter"/></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>  
            <div>
            <table>
                        <tr>
                            <th colSpan='2'>Tube Inspection Result</th>
                        </tr>
                        {Tube.map((e)=>(
                            <tr>
                                <td>{e}</td>
                                <td><input type="text" placeholder="Enter"/></td>
                            </tr>
                        ))}
                    </table>
            </div>        
        </div>
        <div>
            <table>
                <th>Comments</th>
                <tr><input type='text' placeholder='Your Comments'/></tr>
            </table>
        </div>
    </div>
    )
}

export default DPR
