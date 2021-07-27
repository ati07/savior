import React, { useState } from "react";
import "./Dashboard.css";
// import Pdftron from "../Pdftron/Pdftron";
// import CloseIcon from "@material-ui/icons/Close";
import CardC1 from "../Card/CardC1";
import CardC2 from '../Card/CardC2'
import STable from "../Table/STable";
// import DocReader from '../DocReader/DocReader'
// import Reader from "../Renderfile/Reader";
// import Loading from '../Loading/Loading'

function Dashboard() {
  // const [Url, setUrl] = useState("");
  // const [show, setShow] = useState(false);
  // const [loading, setLoading] = useState()
  // console.log("Url", Url)
  return (
    <div className="dashboard">
      <h2>Welcome to Dashboard - HALO Program</h2>
      <div className="Card">
        <CardC1 />
        <CardC1 />
        <CardC1/>
        <CardC1 />
      </div>
      
      
      <div className="row">
        <div className="table">
          <STable />
        </div>
        <div className="subheader">
          <CardC2 color="#045592" />
          <CardC2 color="#045592"/>
        </div>
      </div>
      {/* <button
        onClick={() => {
          setUrl("/files/sample.pdf");
          setShow(true);
        }}
      >
        <p>Zillow-Redfin Scrapers - Req Sheet.docx</p>Click to View
      </button>
      {show ? <CloseIcon onClick={() => setShow(false)} /> : ""}
      {show ? <Pdftron url={Url} /> : ""}

      <DocReader/>
      <Reader/> */}
    </div>
    
  );
}

export default Dashboard;
