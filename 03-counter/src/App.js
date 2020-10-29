import React, { Component } from "react";

class App extends Component {
  state = { likes: 0, color: "#eee" };

  //method to add likes
  addHandler = (event) => {
    this.setState({ likes: this.state.likes + 1 });
    let newColor = this.state.color === "#eee" ? "#ACCEEC" : "#eee";
    this.setState({ color: newColor });
  };
  //method to remove likes
  removeHandler = () => {
    if (this.state.likes === 0) {
      return;
    } else {
      this.setState({ likes: this.state.likes - 1 });
    }
  };
  //method for reseting likes
  resetHandler = () => {
    this.setState({ likes: 0 });
  };

  render() {
    return (
      <div className="App">
        <h1 className="likes" style={{ backgroundColor: this.state.color }}>
          Total Likes:{this.state.likes}
        </h1>
        <div>
          <button
            className="button"
            onClick={(event) => {
              this.addHandler(event);
            }}
          >
            Add one
          </button>
          <button className="button" onClick={this.removeHandler}>
            Remove one
          </button>
          <button className="button" onClick={this.resetHandler}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
