import React from "react";

const Animal = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt="" />
      <button
        className="button"
        onClick={() => {
          greeting(props.name);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

const greeting = (name) => {
  alert(`Hello, I am a ${name}.`);
};

export default Animal;
