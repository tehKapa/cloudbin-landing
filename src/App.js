import React from "react";
import logo from "./bin.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>cloudBin</code>
          <br />
          put your code inside
        </p>
      </header>
    </div>
  );
}

export default App;
