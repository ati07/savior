import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./BHA.css";
import JobHeader from "./JobHeader/JobHeader";
import Equipment from "./Equipment/Equipment";
import JSA from "./JSA/JSA";
import { useReactToPrint } from "react-to-print";
import Invoice from './Invoice/Invoice'
import Bss from "./BSS Card/Bss";
import Pipe from "./Pipe Information/Pipe";
import Dp from "./DP Run Sheet/Dp";
import DPR from "./DP Result/DPR";
import Picture from "./Picture/Picture";
import DPD from "./DP Double/DPD";
import { ClickAwayListener } from "@material-ui/core";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={10}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BHA() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 const [click,setClick] = useState('')
 const data =()=>{
 setClick(1)
 }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Job Header" {...a11yProps(0)} />
          <Tab label="Equipment" {...a11yProps(1)} />
          <Tab label="JSA" {...a11yProps(2)} />
          <Tab label="BBS Card" {...a11yProps(3)} />
          <Tab label="Pipe Information" {...a11yProps(4)} />
          <Tab label="DP Run Sheet" {...a11yProps(5)} />
          <Tab label="DP Result" {...a11yProps(6)} />
          <Tab label="Picture" {...a11yProps(7)} />
          <Tab label="DP Double Shoulder RF Report" {...a11yProps(8)} />
          <Tab label="Invoice" {...a11yProps(9)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <JobHeader />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Equipment />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <JSA />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Bss/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Pipe/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Dp/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <DPR/>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Picture/>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <DPD/>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <Invoice />
      </TabPanel>
    </div>
  );
}
