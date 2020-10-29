import React, { Component } from "react";
import "./App.css";
import Animal from "./Components/Animal";

class App extends Component {
  state = {
    animals: [
      { name: "Tiger", img: "http://source.unsplash.com/dGMcpbzcq1I" },
      { name: "Bird", img: "http://source.unsplash.com/7_TTPznVIQI" },
      { name: "Elephant", img: "http://source.unsplash.com/BuQ1RZckYW4" },
      { name: "Giraffe", img: "http://source.unsplash.com/D6TqIa-tWRY" },
    ],
  };
  render() {
    return (
      <div className="App cardholder">
        <Animal
          name={this.state.animals[0].name}
          image={this.state.animals[0].img}
        />
        <Animal
          name={this.state.animals[1].name}
          image={this.state.animals[1].img}
        />
        <Animal
          name={this.state.animals[2].name}
          image={this.state.animals[2].img}
        />
        <Animal
          name={this.state.animals[3].name}
          image={this.state.animals[3].img}
        />
      </div>
    );
  }
}

export default App;
