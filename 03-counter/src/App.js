import React, { Component } from "react";

class App extends Component {
  state = { likes: 0 };

  //method to add likes
  addHandler = () => {
    this.setState({ likes: this.state.likes + 1 });
  };
  //method to remove likes
  removeHandler = () => {
    this.setState({ likes: this.state.likes - 1 });
  };
  //method for reseting likes
  resetHandler = () => {
    this.setState({ likes: 0 });
  };

  render() {
    return (
      <div>
        <h1>Total Likes:{this.state.likes}</h1>
        <button onClick={this.addHandler}>Add one</button>
        <button onClick={this.removeHandler}>Remove one</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default App;
