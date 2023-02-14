import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  const convertWordToNumber = (event) => {
    const number = event.target.value;
    const LESS_THAN_TWENTY = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    if (number < 20) {
      setResult(LESS_THAN_TWENTY[number]);
    } else {
      setResult("twenty");
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
