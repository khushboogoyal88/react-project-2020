import React from "react";
import "./App.css";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box name="Margit" title="Teacher" age="25" />
        <Box name="Khushboo" title="Student" age="32" />
        <Box name="XYZ" title="Student" age="38" />
      </header>
    </div>
  );
}

export default App;
