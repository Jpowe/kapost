import React, { useState, Fragment } from "react";
const styles = {
  button: {
    backgroundColor: "#ff9800" /* Materil Design Orange 500 */,
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "8px",
    cursor: "pointer"
  },
  disabledButton: {
    backgroundColor: "#ff9800" /* Materil Design Orange 500 */,
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "8px",
    opacity: "0.3"
  }
};

export default function Pagination({ prev, next, cursor, count, limit }) {
  return (
    <div style={{ margin: "8px" }}>
      {cursor === 0 ? (
        <button style={styles.disabledButton} disabled onClick={prev}>
          PREVIOUS
        </button>
      ) : (
        <button style={styles.button} onClick={prev}>
          PREVIOUS
        </button>
      )}
      {count > limit ? (
        <button style={styles.button} onClick={next}>
          NEXT
        </button>
      ) : (
        <button style={styles.disabledButton} onClick={next}>
          NEXT
        </button>
      )}
    </div>
  );
}
