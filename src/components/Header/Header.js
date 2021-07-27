import React from 'react'
import './Header.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
    return (
        <div className="Header">
            <div className="left">Halo Program</div>
            <div className="middle">Savior</div>
            <div className="right"><ExitToAppIcon/></div>
            
        </div>
    )
}

export default Header
