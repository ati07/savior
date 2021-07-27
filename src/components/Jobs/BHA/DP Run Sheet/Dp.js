import React from "react";
import "./Dp.css";
function Dp() {
  const TubeBody = [
    "No",
    "Serial No",
    "Clas",
    "Band",
    "Low Wall",
    "RWB%",
    "Grade",
    "Bent",
  ];
  const BoxEnd = [
    "Box OD",
    "Tong Space",
    "CounterBore Depth",
    "CounterBore Wall",
    "CounterBore Diameter",
    "Shoulder Seal",
    "Shoulder Width",
    "",
    "Heardband comments",
    "Tool Joint Class",
  ];
  const PinEnd = [
    "Pin OD",
    "Pin ID",
    "Tong Space",
    "Cylinder Diameter",
    "Connection Length",
    "Pin Neck",
    "Bevel Diameter",
    "Nose Diameter",
    "Pin Lead",
    "Damages",
    "Hardband Comments",
    "Tool Joint Class",
    "Comments",
  ];
  const Dp_n = TubeBody.concat(BoxEnd);
  const DP_new = Dp_n.concat(PinEnd);
  console.log("DP_N", DP_new);
  const rows = [];
  const inputs = [];
  for (var i = 0; i < 10; i++) {
    rows.push(i + 1);
  }
  for (var j = 0; j < 30; j++) {
    inputs.push(j + 1);
  }
  return (
    <div>
      <table>
        <tr>
          <th colSpan="8">TubeBody</th>
          <th colSpan="10">BoxEnd</th>
          <th colSpan="13">PinEnd</th>
        </tr>
        <tr style={{ color: "white", backgroundColor: "#1a487d", height: 45 }}>
          {DP_new.map((e) => (
            <td className="heading">{e}</td>
          ))}
        </tr>
        {rows.map((e) => (
          <tr>
            <td style={{ width: 50, paddingLeft: 15, paddingRight: 15 }}>
              {e}
            </td>
            {inputs.map(() => (
              <td>
                <input className="input" type="text" placeholder="Enter" />
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Dp;
