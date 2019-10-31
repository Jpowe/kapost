import React, { useState, Fragment } from "react";
import "./TableList.css";

//const indigo500 = "#3f51b5";
//const indigo200 = "#9fa8da";
/*
const styles = {
  headerRow: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderBottom: `6px solid ${indigo500}`
  },
  headerCell: {
    width: "100px",
    height: "100px",
    margin: "auto",
    display: "flex",
    alignItems: "flex-end"
  },

  row: {
    display: "flex",
    border: `1px solid ${indigo200}`
  },
  cell: {
    width: "100px",
    margin: "auto"
  }
};
*/
export default function TableList({ data }) {
  return (
    <div style={{ margin: "8px", maxWidth: "900px" }}>
      <div className="headerRow">
        <div className="headerCell">NAME</div>
        <div className="headerCell">EMAIL</div>
      </div>

      {data.map((item, i) => (
        <div className="row" key={item.id}>
          <div className="cell">{item.name}</div>
          <div className="cell">{item.email}</div>
        </div>
      ))}
    </div>
  );
}
