import React from 'react'

function Checkbox({done=false}) {
    return (
        <>
        {done?<input id="checked" type='checkbox' checked/>:<input id="unchecked" type='checkbox'/>}
        </>
    )
}

export default Checkbox
