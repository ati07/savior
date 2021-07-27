import React from 'react'
import JSA from '../JSA/JSA'
import JobHeader from '../JobHeader/JobHeader';
import Equipment from '../Equipment/Equipment';

class Print extends React.Component {
    render(){
    return (
        <div disable>
            {/* <h1>Job Header</h1> */}
            <JobHeader/>          
            
            {/* <h1>Equipment</h1> */}
            < Equipment/>
            <h1>JSA</h1>
            <JSA/>
        </div>
    )
    }
}

export default Print
