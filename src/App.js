import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  const convertWordToNumber = (event) => {
    const number = event.target.value;
    if (number === "0") {
      setResult("zero");
    } else {
      setResult("one");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Number to Word</h1>
        <input
          placeholder="Enter a number"
          onChange={convertWordToNumber}
        ></input>
        <p data-testid="result">{result}</p>
      </header>
    </div>
  );
}

export default App;
