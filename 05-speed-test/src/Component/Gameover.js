import React from "react";
import "./Gameend.css";

const closeHandler = () => {
  window.location.reload();
};

function Gameover(props) {
  return (
    <div className="overlay">
      <div className="gameover_box">
        <h2>Game Over</h2>
        <p>Your score was: {props.score}</p>
        <button onClick={closeHandler}>X</button>
      </div>
    </div>
  );
}

export default Gameover;

// import React, { Component } from "react";
//

// const closeHandler = () => {
//   window.location.reload();
// };
// export class Gameover extends Component {
//   render() {
//     return (
//
//     );
//   }
// }

// export default Gameover;
