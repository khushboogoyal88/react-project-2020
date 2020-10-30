import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = { likes: 0 };
  //method to add likes
  addHandler = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  refreshPage = () => {
    this.setState({ likes: 0 });
  };

  resetHandler = () => {
    this.setState({ likes: 0 });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <div className="cardholder">
            <img
              src="http://source.unsplash.com/EhTcC9sYXsw"
              alt="Computer_img"
            />
            <div className="article">
              <h2>Full Stack Web Developer Program</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas a, nostrum ex rerum aliquid velit ducimus, ullam
                repellat, repellendus temporibus quos quidem exercitationem.
                Totam provident sequi doloribus praesentium aliquam repellendus.
              </p>
              <p> {this.state.likes} people like this article</p>
              <button>Read More</button>
              <button onClick={this.addHandler}>Give a vote</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
