import React,{useState} from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "./JobHeaderC.css";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { selectJobHeader, selectMethoduse, selectS1, selectS2 } from "../../../../../features/counter/jobHeaderSlice";
import {jobHeader,specification1, specification12,methodTouse} from '../../../../../features/counter/jobHeaderSlice'
// import { selectMethoduse } from "../../../../../features/counter/jobHeaderSlice";
// import { selectJobHeader } from "../../../../features/counter/jobHeaderSlice";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
// selectJobHeader

const rows1 = [
  createData("DS-1"),
  createData("NS-2"),
  createData("API RP7G-2"),
  createData("Customer Spec"),
  createData("Other"),
  createData("Other"),
  createData("Other"),
  createData("Other"),
];
const rows2 = [
  createData("Clean and Visual"),
  createData("Catagory 3"),
  createData("Catagory 4"),
  createData("Catagory 5"),
  createData("Rattle ID"),
  createData("Pressure Wash ID"),
  createData("Blacklight Connections"),
  createData("UT Upsets"),
  createData("Full Dimensional"),
  createData("Sandpaper Reface"),
  createData("Lathe Reface"),
];
const rows3 = [
  createData("Magnetic Particale (MPI)"),
  createData("Liquid Penatrent(LPI)"),
  createData("ElectroMagnetic Induction(EMI)"),
  createData("Ultrasonic Thickness Testing"),
  createData("Ultrasonic Testing (UT)"),
  createData("Visual Testing(VT)"),
  createData("Eddy Current(ET)"),
];

export default function JobHeaderC () {
  const jobHeader = useSelector(selectJobHeader)
  const [sp1] =useSelector(selectS1)
  const [sp2] =useSelector(selectS2)
  const [mtu] = useSelector(selectMethoduse) 
  
  // console.log("JobHeaderC",jobHeader[0])
  console.log("Sp1",sp1)
  console.log("Sp2",sp2)
  console.log("mtu",mtu)

  // const n_sp1 =[]
  const ids1=[]
sp1.map((i,j)=>{
console.log(`elm${j}`,i)
if(j !==0){
// n_sp1.push(i)
ids1.push(i.id)
}
})
const ids2=[]
sp2.map((i,j)=>{
console.log(`elm${j}`,i)
if(j !==0){
// n_sp1.push(i)
ids2.push(i.id)
}
})
const idsmtu=[]
mtu.map((i,j)=>{
console.log(`elm${j}`,i)
if(j !==0){
// n_sp1.push(i)
idsmtu.push(i.id)
}
})
// console.log("new",n_sp1)
console.log("ids1",ids1)
console.log("ids2",ids2)
console.log("idsmtu",idsmtu)

  // console.log("Sp1.id",n_sp1[0].id)
  const [Input, setInput]=useState({
    Customer:'',
    Operator:'',
    Rig_Name:'',
    Well_Name:'',
    Location_Of_Rig:'',
    Location_Of_Job:'',
    AFE:'',
    PO:'',
    Comments:''
  })
  const Value = ['Customer',
  'Operator',
  'Rig_Name',
  'Well_Name',
  'Location_Of_Rig',
  'Location_Of_Job',
 'AFE',
 'PO',
 'Comments']
 const dispatch = useDispatch()
  const handleChange=(e)=>{
    // Computed property names
      // keys of the objects are computed dynamically
      setInput({
        ...Input,
   [e.target.name] : e.target.value,
   
  })
}
  console.log('input',Input)
  return (
    // <TableContainer component={Paper}>
    <div className="job">
      
      <table className='table1' aria-label="simple table">
        <TableBody>
          {Value.map((row,i) => {
            return (<TableRow key={row} >
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
              <TableCell align="right">
                <input name={row} placeholder="Enter" value={jobHeader[0][`${row}`]} disabled/>
              </TableCell>
              {/* <p>State `${Input}`</p> */}
            </TableRow>)
          })}
          
        </TableBody>

      </table>
      
      <div className="table_">
        <table className='table2' aria-label="simple table">
          <tr className='thead'>
            <th>Specification</th>
          </tr>
          <TableBody>
            {rows1.map((row,i) => (
              <tr
              className='tbody'
              >
                <th>
                  {row.name}
                  {ids1.includes(`${i}`) ? <input type="checkbox" checked/> : <input type="checkbox"/>}
                </th>
              </tr>
            ))}
          </TableBody>
        </table>
      </div>
      <div className="table_">
        <table className='table3' aria-label="simple table">
          <tr className='thead'>
            <th>Specification</th>
          </tr>
          <TableBody>
            {rows2.map((row,i) => (
              <tr
              className='tbody'
              >
                <th>
                  {row.name}
                  {ids2.includes(`${i}`) ? <input type="checkbox" checked/> : <input type="checkbox"/>}

                </th>
              </tr>
            ))}
          </TableBody>
        </table>
      </div>
      <div className="table_">
        <table className='table4' aria-label="simple table">
          <tr className='thead'>
            <th>Method to be use</th>
          </tr>
          <TableBody>
            {rows3.map((row,i) => (
              <tr 
              className='tbody'
              >
                <th>
                  {row.name}
                  {idsmtu.includes(`${i}`) ? <input type="checkbox" checked/> : <input type="checkbox"/>}
                </th>
              </tr>
            ))}
          </TableBody>
        </table>
      </div>
    </div>
  );
}

