import React, { useState, useEffect,useLayoutEffect } from "react";
import {
  attendence,
  jobSafety,
  jobStep,
  R_PPE,
  selectAttendence,
  selectJobSafety,
  selectJobStep,
  selectRppe,
  selectTools,
  Tools,
} from "../../../../features/counter/jsaSlice";
import "./JSA.css";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "../../../Checkbox/Checkbox";
const tools = [
  "",
  "Die Grinder",
  "Yokes",
  "Electrical Cords",
  "Coil",
  "Files",
  "Boards",
  '7/9" Ginder',
  "Chasing Wheels",
  "Computers",
  "Stencils",
  "Wire Wheels",
  "Paint",
  "Hammers",
  "Generators",
  "Other",
  "Jacks",
  "Fuel",
  "Other",
];
const PPE = [
  "",
  "Hard Hat",
  "Face Shield",
  "Latex Gloves",
  "FR Clothing",
  "Face Mask",
  "Cut Resistent Gloves",
  "Steel Toe Boots",
  "Respirator",
  "Chemical Gloves",
  "Safty Glasses Clear",
  "Apron",
  "Eat Plugs",
  "Safety Glasses Dark",
  "Work Gloves",
  "Other",
];
function JSA() {
  const jobSafety_g = useSelector(selectJobSafety);
  const jobStep_g = useSelector(selectJobStep);
  const [R_PPE_g] = useSelector(selectRppe);
  const [Tools_g] = useSelector(selectTools);
  const Attendence_g = useSelector(selectAttendence);
  const dispatch = useDispatch();

  // Safty Table
  const [Input1, setInput1] = useState({
    Prepared: "",
    Position: "",
    Date: "",
    Weather_Conditions: "",
    Task_Activity: "",
  });
  //run when state changes
  useEffect(() => {
    dispatch(jobSafety(Input1));
  }, [Input1]);

  //Run at once

  useEffect(() => {
    if (jobSafety_g.length > 0) {
      setInput1(jobSafety_g[0]);
    }
  }, []);

  //JobSteps Table
  const [steps, setSteps] = useState({});
  //Run once
  // if(steps=== null){
    
  // }
  useEffect(() => {
    const new_row = {};
    for (var i = 0; i < 30; i++) {
      new_row[`input${i}`] = "";
    }
    setSteps(new_row)
    // console.log("1")
  }, []);
  
  useEffect(() => {
    dispatch(jobStep(steps));
    // console.log("2")
  }, [steps]);

  useEffect(() => {
    // setTimeout(timeout,400)
    if (jobStep_g.length>0) {
      // console.log("jobSg",jobStep_g)
      setSteps(jobStep_g[0]);
    }
  }, []);

  // Tools/Equipment Table
  const [s_tool, setStools] = useState([
    {
      id: null,
      name: null,
      done: false,
    },
  ]);

  const idTools = [];
  if (Tools_g) {
    Tools_g.map((i, j) => {
      console.log(`elm${j}`, i);

      if (i.id !== null) {
        idTools.push(i.id);
      }
    });
  }
  //run when state change
  useEffect(()=>{
    dispatch(Tools(s_tool))
  },[s_tool])
  useEffect(()=>{
    if(Tools_g){
      setStools(Tools_g)
    }
  },[])
  // console.log("Tools_g",Tools_g)
  // console.log("s_tool",s_tool)
  // console.log('idTools',idTools)

// R_PPE
const [rppe,setRppe] = useState([
  {
    id: null,
    name: null,
    done: false,
  },
])

const idrppe = [];
if (R_PPE_g) {
  R_PPE_g.map((i, j) => {
    console.log(`elm${j}`, i);

    if (i.id !== null) {
      idrppe.push(i.id);
    }
  });
}
//run when state change
useEffect(()=>{
  dispatch(R_PPE(rppe))
},[rppe])
useEffect(()=>{
  if(R_PPE_g){
    setRppe(R_PPE_g)
  }
},[])
// console.log("R_PPE_g",R_PPE_g)
// console.log("rppe",rppe)
// console.log('idrppe',idrppe)

// Attendence
const [att,setAtt] = useState({})
useEffect(() => {
  const new_row = {};
  for (var i = 0; i < 16; i++) {
    new_row[`input${i}`] = "";
  }
  setAtt(new_row)
  // console.log("1")
}, []);

useEffect(() => {
  dispatch(attendence(att));
  // console.log("2")
}, [att]);

useEffect(() => {
  // setTimeout(timeout,400)
  if (Attendence_g.length>0) {
    // console.log("jobSg",jobStep_g)
    setAtt(Attendence_g[0]);
  }
}, []);
console.log("Attendence_g",Attendence_g)
console.log("att",att)
// console.log('i',idrppe)
  return (
    <div>
      <div className="table1">
        <table>
          <tr>
            <th colspan="6" style={{ backgroundColor: "#1a487d", height: 45 }}>
              Job Safety Analysis Worksheet
            </th>
          </tr>
          <tr style={{ height: 35 }}>
            <th>Prepared By:</th>
            <th>
              <input
                name="Prepared"
                type="text"
                value={Input1["Prepared"]}
                onChange={(e) =>
                  setInput1({ ...Input1, [e.target.name]: e.target.value })
                }
              />
            </th>
            <th>Position</th>
            <th>
              <input
                name="Position"
                type="text"
                value={Input1["Position"]}
                onChange={(e) =>
                  setInput1({ ...Input1, [e.target.name]: e.target.value })
                }
              />
            </th>
            <th>Date</th>
            <th>
              <input
                name="Date"
                type="text"
                value={Input1["Date"]}
                onChange={(e) =>
                  setInput1({ ...Input1, [e.target.name]: e.target.value })
                }
              />
            </th>
          </tr>
          <tr style={{ height: 35 }}>
            <th>Weather Conditions:</th>
            <th>
              <input
                name="Weather_Conditions"
                type="text"
                value={Input1["Weather_Conditions"]}
                onChange={(e) =>
                  setInput1({ ...Input1, [e.target.name]: e.target.value })
                }
              />
            </th>
            <th colspan="3">Task/Activity:</th>
            <th>
              <input
                name="Task_Activity"
                type="text"
                value={Input1["Task_Activity"]}
                onChange={(e) =>
                  setInput1({ ...Input1, [e.target.name]: e.target.value })
                }
              />
            </th>
          </tr>
        </table>
      </div>
      <div style={{ paddingTop: 15 }}>
        <table className="table_2">
          <tr>
            <th style={{ backgroundColor: "#1a487d", height: 45 }}>
              Job Step 1
            </th>
            <th style={{ backgroundColor: "#1a487d", height: 45 }}>
              Sequince Of Basic Job Steps
            </th>
            <th style={{ backgroundColor: "#1a487d", height: 45 }}>
              Potential Hazards
            </th>
            <th style={{ backgroundColor: "#1a487d", height: 45 }}>
              Safrty Controlls To Reduce or Eliminate Hazard
            </th>
          </tr>

          {[0, 3, 6, 9, 12, 15, 18, 21, 24, 27].map((el, i) => (
            <tr style={{ height: 35 }}>
              <th>{i + 1}</th>
              <th>
                <input
                  name={`input${el}`}
                  placeholder="Enter"
                  value={steps[`input${el}`]}
                  onChange={(e) =>
                    setSteps({
                      ...steps,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <input
                  name={`input${el + 1}`}
                  placeholder="Enter"
                  value={steps[`input${el + 1}`]}
                  onChange={(e) =>
                    setSteps({
                      ...steps,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <input
                  name={`input${el + 2}`}
                  placeholder="Enter"
                  value={steps[`input${el + 2}`]}
                  onChange={(e) =>
                    setSteps({
                      ...steps,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </th>
            </tr>
          ))}
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ paddingTop: 15 }}>
          <table className="table_3" style={{ width: 550 }}>
            <tr>
              <th
                colspan="3"
                style={{ backgroundColor: "#1a487d", height: 45 }}
              >
                Tools/Equipment
              </th>
            </tr>

            {[0, 2, 4, 6, 8, 10].map((el, i) => (
              <tr style={{ height: 35 }}>
                {/* <th>{el}</th> */}
                <th className="tool" >
                  {tools[el + i + 1]}
                  {idTools.includes(`${el + i + 1}`) ? (
                    <div style={{display:'contents'}}
                      onClick={() => {
                        const tools_n = s_tool.filter((value) => {
                          console.log("value", value);
                          return value.id !== `${el + i + 1}`;
                        });
                        console.log("sp1_n", tools_n);
                        // const [...sp1n] = sp1_n;
                        setStools([...tools_n]);
                      }}
                    >
                      <Checkbox done="true" />
                    </div>
                  ) : (
                    <div style={{display:'contents'}}
                      onClick={() =>
                        setStools([
                          ...s_tool,
                          {
                            id: `${el + i + 1}`,
                            name: `${tools[el + i + 1]}`,
                            done: true,
                          },
                        ])
                      }
                    >
                      <Checkbox />
                    </div>
                  )}
                  {/* <input type="checkbox" placeholder="Enter" /> */}
                </th>
                <th className="tool">
                  {tools[el + i + 2]}
                  {idTools.includes(`${el + i + 2}`) ? (
                    <div style={{display:'contents'}}
                      onClick={() => {
                        const tools_n = s_tool.filter((value) => {
                          console.log("value", value);
                          return value.id !== `${el + i + 2}`;
                        });
                        console.log("sp1_n", tools_n);
                        // const [...sp1n] = sp1_n;
                        setStools([...tools_n]);
                      }}
                    >
                      <Checkbox done="true" />
                    </div>
                  ) : (
                    <div style={{display:'contents'}}
                      onClick={() =>
                        setStools([
                          ...s_tool,
                          {
                            id: `${el + i + 2}`,
                            name: `${tools[el + i + 2]}`,
                            done: true,
                          },
                        ])
                      }
                    >
                      <Checkbox />
                    </div>
                  )}
                </th>
                <th className="tool">
                  {tools[el + i + 3]}
                  {idTools.includes(`${el + i + 3}`) ? (
                    <div style={{display:'contents'}}
                      onClick={() => {
                        const tools_n = s_tool.filter((value) => {
                          console.log("value", value);
                          return value.id !== `${el + i + 3}`;
                        });
                        console.log("sp1_n", tools_n);
                        // const [...sp1n] = sp1_n;
                        setStools([...tools_n]);
                      }}
                    >
                      <Checkbox done="true" />
                    </div>
                  ) : (
                    <div style={{display:'contents'}}
                      onClick={() =>
                        setStools([
                          ...s_tool,
                          {
                            id: `${el + i + 3}`,
                            name: `${tools[el + i + 3]}`,
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
          </table>
        </div>
        <div style={{ paddingTop: 15 }}>
          <table className="table_4">
            <tr>
              <th
                colspan="3"
                style={{ backgroundColor: "#1a487d", height: 45 }}
              >
                Required - Personal Protective Equipment
              </th>
            </tr>

            {[0, 2, 4, 6, 8].map((el, i) => (
              <tr style={{ height: 35 }}>
                {/* <th>{el}</th> */}
                <th>
                  {PPE[el + i + 1]}
                  {idrppe.includes(`${el + i + 1}`) ? (
                    <div style={{display:'contents'}}
                      onClick={() => {
                        const rppe_n = rppe.filter((value) => {
                          console.log("value", value);
                          return value.id !== `${el + i + 1}`;
                        });
                        console.log("rppe_n", rppe_n);
                        // const [...sp1n] = sp1_n;
                        setRppe([...rppe_n]);
                      }}
                    >
                      <Checkbox done="true" />
                    </div>
                  ) : (
                    <div style={{display:'contents'}}
                      onClick={() =>
                        setRppe([
                          ...rppe,
                          {
                            id: `${el + i + 1}`,
                            name: `${PPE[el + i + 1]}`,
                            done: true,
                          },
                        ])
                      }
                    >
                      <Checkbox />
                    </div>
                  )}
                </th>
                <th>
                  {PPE[el + i + 2]}
                  {idrppe.includes(`${el + i + 2}`) ? (
                    <div style={{display:'contents'}}
                      onClick={() => {
                        const rppe_n = rppe.filter((value) => {
                          console.log("value", value);
                          return value.id !== `${el + i + 2}`;
                        });
                        console.log("rppe_n", rppe_n);
                        // const [...sp1n] = sp1_n;
                        setRppe([...rppe_n]);
                      }}
                    >
                      <Checkbox done="true" />
                    </div>
                  ) : (
                    <div style={{display:'contents'}}
                      onClick={() =>
                        setRppe([
                          ...rppe,
                          {
                            id: `${el + i + 2}`,
                            name: `${PPE[el + i + 2]}`,
                            done: true,
                          },
                        ])
                      }
                    >
                      <Checkbox />
                    </div>
                  )}
                </th>
                <th>
                  {PPE[el + i + 3]}
                  {idrppe.includes(`${el + i + 3}`) ? (
                    <div style={{display:'contents'}}
                      onClick={() => {
                        const rppe_n = rppe.filter((value) => {
                          console.log("value", value);
                          return value.id !== `${el + i + 3}`;
                        });
                        console.log("rppe_n", rppe_n);
                        // const [...sp1n] = sp1_n;
                        setRppe([...rppe_n]);
                      }}
                    >
                      <Checkbox done="true" />
                    </div>
                  ) : (
                    <div style={{display:'contents'}}
                      onClick={() =>
                        setRppe([
                          ...rppe,
                          {
                            id: `${el + i + 3}`,
                            name: `${PPE[el + i + 3]}`,
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
          </table>
        </div>
      </div>
      <div style={{ paddingTop: 15 }}>
        <table className="table_5">
          <tr>
            <th colspan="4" style={{ backgroundColor: "#1a487d", height: 45 }}>
              Persons In Attendence
            </th>
          </tr>

          {[0, 2, 4, 6, 8, 10, 12, 14].map((el, i) => (
            <tr style={{ height: 35 }}>
              {/* <th>{el}</th> */}
              <th style={{ backgroundColor: "#1a487d" }}>Print</th>
              <th>
              <input
                  name={`input${el}`}
                  placeholder="Enter"
                  value={att[`input${el}`]}
                  onChange={(e) =>
                    setAtt({
                      ...att,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </th>
              <th style={{ backgroundColor: "#1a487d" }}>Sign</th>
              <th>
              <input
                  name={`input${el+1}`}
                  placeholder="Enter"
                  value={att[`input${el+1}`]}
                  onChange={(e) =>
                    setAtt({
                      ...att,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default JSA;
