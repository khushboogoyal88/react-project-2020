import React from "react";
import "../App.css";

function Circle(props) {
  return (
    <div
      className={`circle ${props.color} ${props.active ? " active" : ""}`}
      onClick={props.click}
    ></div>
  );
}

export default Circle;
