import React from 'react'
import Image from './Image'
import './Picture.css'
function Picture() {
    return (
        <div style={{padding:10}}>
            {[1,2,3,4,5].map(()=>(
                <div style={{paddingTop:10,display:'flex', justifyContent:'space-between'}}>
            <Image/>
            <Image/>
            <Image/>
            <Image/>

        </div>
    ))}
        
        </div>
    )
}

export default Picture
