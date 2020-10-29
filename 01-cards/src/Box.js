import React from "react";

function Box(props) {
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Box;
