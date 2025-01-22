import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-app">
      <h1>Counter - App</h1>
      <span className="count"> Count :- {count}</span>
      <div className="button">
        <button 
          onClick={decrement} 
          className="btn decrement-btn" 
          disabled={count === 0} 
        >
          Decrement
        </button>
        <button onClick={reset} className="btn reset-btn">Reset</button>
        <button onClick={increment} className="btn increment-btn">
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;