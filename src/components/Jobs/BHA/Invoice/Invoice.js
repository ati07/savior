import React from 'react'
import ReactToPrint from 'react-to-print';
import Print from './Print';
import { Button } from '@material-ui/core';
import './Invoice.css'

class Invoice extends React.Component {
  render() {
    return (
      <div>
          <Print ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <Button>Print this out!</Button>;
          }}
          content={() => this.componentRef}
        />
        
      </div>
    );
  }
}

export default Invoice