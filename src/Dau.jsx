import React from "react";
import "./Dau.css";

const Dau = ({ value }) => {
  return <div className={`Dau Dau--${value}`}>{value}</div>;
}

export default Dau;