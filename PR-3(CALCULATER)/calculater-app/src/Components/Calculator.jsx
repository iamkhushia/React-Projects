import React, { useState } from "react";
import "./Calculator.css"; 

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult(null);
    } else if (value === "=") {
      try {
        setResult(eval(input)); 
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    
    <div>
        <h1 className="calc-data">Simple Calculator</h1>
        <div className="calculator">
      <div className="display">
        <div className="input">{input || "0"}</div>
        <div className="result">{result !== null ? `= ${result}` : ""}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={btn === "C" ? "clear" : btn === "=" ? "equals" : ""}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Calculator;
