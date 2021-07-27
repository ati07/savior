import React, { useState, useEffect } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "./JobHeader.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  jobHeader,
  specification1,
  specification12,
  methodTouse,
  selectJobHeader,
  selectMethoduse,
  selectS1,
  selectS2,
} from "../../../../features/counter/jobHeaderSlice";
import Checkbox from "../../../Checkbox/Checkbox";

// selectJobHeader

const rows1 = [
  "DS-1",
  "NS-2",
  "API RP7G-2",
  "Customer Spec",
  "Other",
  "Other",
  "Other",
  "Other",
];
const rows2 = [
  "Clean and Visual",
  "Catagory 3",
  "Catagory 4",
  "Catagory 5",
  "Rattle ID",
  "Pressure Wash ID",
  "Blacklight Connections",
  "UT Upsets",
  "Full Dimensional",
  "Sandpaper Reface",
  "Lathe Reface",
];
const rows3 = [
  "Magnetic Particale (MPI)",
  "Liquid Penatrent(LPI)",
  "ElectroMagnetic Induction(EMI)",
  "Ultrasonic Thickness Testing",
  "Ultrasonic Testing (UT)",
  "Visual Testing(VT)",
  "Eddy Current(ET)",
];

export default function JobHeader() {
  const jobHeader_g = useSelector(selectJobHeader);
  const [sp1_g] = useSelector(selectS1);
  const [sp2_g] = useSelector(selectS2);
  const [mtu_g] = useSelector(selectMethoduse);
  const dispatch = useDispatch();
  // console.log("jobheader_g", jobHeader_g);
  const [Input, setInput] = useState({
    Customer: "",
    Operator: "",
    Rig_Name: "",
    Well_Name: "",
    Location_Of_Rig: "",
    Location_Of_Job: "",
    AFE: "",
    PO: "",
    Comments: "",
  });
  useEffect(() => {
    if (jobHeader_g.length > 0) {
      setInput({
        Customer: `${jobHeader_g[0].Customer}`,
        Operator: `${jobHeader_g[0].Operator}`,
        Rig_Name: `${jobHeader_g[0].Rig_Name}`,
        Well_Name: `${jobHeader_g[0].Well_Name}`,
        Location_Of_Rig: `${jobHeader_g[0].Location_Of_Rig}`,
        Location_Of_Job: `${jobHeader_g[0].Location_Of_Job}`,
        AFE: `${jobHeader_g[0].AFE}`,
        PO: `${jobHeader_g[0].PO}`,
        Comments: `${jobHeader_g[0].Comments}`,
      });
    }
  }, []);
  const [sp1, setSp1] = useState([
    {
      id: null,
      name: null,
      done: false,
    },
  ]);

  //
  const [sp2, setSp2] = useState([
    {
      id: null,
      name: null,
      done: false,
    },
  ]);
  const [mtu, setMtu] = useState([
    {
      id: null,
      name: null,
      done: false,
    },
  ]);
  useEffect(() => {
    dispatch(jobHeader(Input));
  }, [Input]);
  useEffect(() => {
    dispatch(specification1(sp1));
  }, [sp1]);

  //only run when component render first time
  useEffect(() => {
    if (sp1_g) {
      setSp1(sp1_g);
    }
  }, []);
  useEffect(() => {
    dispatch(specification12(sp2));
  }, [sp2]);
  useEffect(() => {
    if (sp2_g) {
      setSp2(sp2_g);
    }
  }, []);
  useEffect(() => {
    dispatch(methodTouse(mtu));
  }, [mtu]);
  useEffect(() => {
    if (mtu_g) {
      setMtu(mtu_g);
    }
  }, []);
  // console.log("INput", Input);

  // console.log("sp1_g", sp1_g);
  // console.log("sp1", sp1);
  const ids1 = [];
  if (sp1_g) {
    sp1_g.map((i, j) => {
      // console.log(`elm${j}`, i);

      if (i.id !== null) {
        ids1.push(i.id);
      }
    });
  }
  // console.log("ids1", ids1);
  const ids2 = [];
  if (sp2_g) {
    sp2_g.map((i, j) => {
      // console.log(`elm${j}`, i);

      if (i.id !== null) {
        ids2.push(i.id);
      }
    });
  }

  const idsmtu = [];
  if (mtu_g) {
    mtu_g.map((i, j) => {
      // console.log(`elm${j}`, i);
      if (i.id !== null) {
        // n_sp1.push(i)
        idsmtu.push(i.id);
      }
    });
  }
  const handleChange = (e) => {
    // Computed property names
    // keys of the objects are computed dynamically
    setInput({
      ...Input,
      [e.target.name]: e.target.value,
    });
  };
  const Value = [
    "Customer",
    "Operator",
    "Rig_Name",
    "Well_Name",
    "Location_Of_Rig",
    "Location_Of_Job",
    "AFE",
    "PO",
    "Comments",
  ];

  // console.log("input", Input);

  return (
    <div className="job1">
      <table className="table1" aria-label="simple table">
        <TableBody>
          {jobHeader_g.length > 0
            ? Value.map((row, i) => (
                <TableRow key={row}>
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                  <TableCell align="right">
                    <input
                      name={row}
                      placeholder="Enter"
                      value={Input[`${row}`]}
                      onChange={handleChange}
                    />
                  </TableCell>
                </TableRow>
              ))
            : Value.map((row, i) => (
                <TableRow key={row}>
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                  <TableCell align="right">
                    <input
                      name={row}
                      placeholder="Enter"
                      value={Input[`${row}`]}
                      onChange={handleChange}
                    />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </table>
      <div className="table_">
        <table className="table2" aria-label="simple table">
          <tr className="thead">
            <th>Specification</th>
          </tr>

          <TableBody>
            {rows1.map((row, i) => (
              <tr className="tbody">
                <th style={{ display: "inline-flex", border: "none" }}>
                  {row}
                  {ids1.length > 0 && ids1.includes(`${i}`) ? (
                    <div
                      onClick={() => {
                        const sp1_n = sp1.filter((value) => {
                          console.log("value", value);
                          return value.id !== `${i}`;
                        });
                        console.log("sp1_n", sp1_n);
                        // const [...sp1n] = sp1_n;
                        setSp1([...sp1_n]);
                      }}
                    >
                      <Checkbox done="true" />
                    </div>
                  ) : (
                    <div
                      onClick={() =>
                        setSp1([
                          ...sp1,
                          {
                            id: `${i}`,
                            name: `${row}`,
                            done: true,
                          },
                        ])
                      }
                    >
                      <Checkbox />
                    </div>
                  )}
                </th>
              </tr>
            ))}
          </TableBody>
        </table>
      </div>
      <div className="table_">
        <table className="table3" aria-label="simple table">
          <tr className="thead">
            <th>Specification</th>
          </tr>
          <TableBody>
            {rows2.map((row, i) => (
              <tr className="tbody">
                <th style={{ display: "inline-flex", border: "none" }}>
                  {row}

                  {ids2.length > 0 && ids2.includes(`${i}`) ? (
                    <div
                      onClick={() => {
                        const sp2_n = sp1.filter((value) => {
                          console.log("value", value);
                          return value.id !== `${i}`;
                        });
                        console.log("sp2_n", sp2_n);
                        // const [...sp1n] = sp1_n;
                        setSp2([...sp2_n]);
                      }}
                    >
                      <Checkbox done="true" />
                    </div>
                  ) : (
                    <div
                      onClick={() =>
                        setSp2([
                          ...sp2,
                          {
                            id: `${i}`,
                            name: `${row}`,
                            done: true,
                          },
                        ])
                      }
                    >
                      <Checkbox />
                    </div>
                  )}
                </th>
              </tr>
            ))}
          </TableBody>
        </table>
      </div>
      <div className="table_">
        <table className="table4" aria-label="simple table">
          <tr className="thead">
            <th>Method to be use</th>
          </tr>
          <TableBody>
            {rows3.map((row, i) => (
              <tr className="tbody">
                <th style={{ display: "inline-flex", border: "none" }}>
                  {row}
                  {idsmtu.length > 0 && idsmtu.includes(`${i}`) ? (
                    <div
                      onClick={() => {
                        const mtu_n = sp1.filter((value) => {
                          console.log("value", value);
                          return value.id !== `${i}`;
                        });
                        console.log("mtu_n", mtu_n);
                        // const [...sp1n] = sp1_n;
                        setMtu([...mtu_n]);
                      }}
                    >
                      {" "}
                      <Checkbox done="true" />
                    </div>
                  ) : (
                    <div
                      onClick={() =>
                        setMtu([
                          ...mtu,
                          {
                            id: `${i}`,
                            name: `${row}`,
                            done: true,
                          },
                        ])
                      }
                    >
                      <Checkbox />
                    </div>
                  )}
                </th>
              </tr>
            ))}
          </TableBody>
        </table>
      </div>
    </div>
  );
}
