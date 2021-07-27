import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import './Sidebar.css'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 230,
    minWidth:230,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },

  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const Dashboard = {
    Title: "Dashboard",
    SubTitle: [],
    Link:['/']
  };
  const quotes = {
    Title: "Quotes",
    SubTitle: ["New Quotes", "Past Quotes"],
    Link:["/NewQuotes","/PastQuotes"]
  };
  const jobs = {
    Title: "Jobs",
    SubTitle: [
      "Welds/Top Drive/Specially Tools",
      "BHA",
      "Drills pipe",
      "Tubing",
      "Casting",
      "Monitoring",
    ],
    Link:['/welds','/BHA','/Drillspipe','/Tubing','/Casting','/Monitoring']
  };

  const companyPolicies = {
    Title: "Company Policies",
    SubTitle: [
      "Vacation Form",
      "BBS card",
      "Employee Handbook",
      "Safty Manual",
      "SDS",
    ],
    Link:['/VacationForm','/BBScard','/EmployeeHandbook','/SaftyManaul','/SDS']
  };

  const QMS = {
      Title:"QMS/SOP's",
      SubTitle:["Savior SOP's", "Customer Policies"],
      Link:['/SaviorSop','/CustomerPolicies']
  }
  const Program_Alterations = {
    Title: "Program Alterations",
    SubTitle: [],
    Link:[]
  };
  const administration = {
    Title: "Administration",
    SubTitle: ["Manage Users", "Manage Equipment", "Alter Restriction"],
    Link:['/ManageUsers','/ManageEquipment','/AlterRestriction']
  };
  const AccordianName = [
    Dashboard,
    quotes,
    jobs,
    companyPolicies,
    QMS,
    Program_Alterations,
    administration,
  ];
  //   const Accordian = []

  return (
    <div className={classes.root}>
      {AccordianName.map((items, i) => {
        return (
          <Accordion
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
          >
            <AccordionSummary
              expandIcon={i === 0 ? "" : <ExpandMoreIcon />}
              aria-controls={`panel${i}bh-content`}
              id={`panel${i}bh-header`}
            >
              
              <Typography className={classes.heading}>
              {i===0? <Link to={items['Link'][i]} style={{textDecoration:'none', color:"black"}}>
              {items.Title}
              </Link>
              :`${items.Title}`}
                
              
              </Typography>
              {/* <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography> */}
            </AccordionSummary>
            <AccordionDetails
              style={{ display: "flex", flexDirection: "column" }}
            >
                {
                    
                    console.log(`Sb${i}`,`${items.Title}-->${items['SubTitle']}`)
                
                }
              {items['SubTitle'].map((item, i) => {
                return (
                  
                  <Typography style={{ padding: "10px" }}>
                    <Link to={items['Link'][i]} style={{textDecoration:'none'}}>
                    {item}
                    </Link>
                    </Typography>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}

    </div>
  );
}
