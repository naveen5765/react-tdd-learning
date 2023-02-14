import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  const convertWordToNumber = (event) => {
    const number = event.target.value;
    let words = [],
      word,
      remainder;
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

    const TENTHS_LESS_THAN_HUNDERD = ["zero", "ten", "twenty", "thirty"];

    if (number < 20) {
      word = LESS_THAN_TWENTY[number];
    } else {
      remainder = number % 10;
      word = TENTHS_LESS_THAN_HUNDERD[Math.floor(number / 10)];
      if (remainder) {
        word += " " + LESS_THAN_TWENTY[remainder];
      }
    }

    words.push(word);

    setResult(words);
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
