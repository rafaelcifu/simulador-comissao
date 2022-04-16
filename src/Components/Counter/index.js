import "./styles.css";
import Button from "../Button";
import { useState } from "react";
import CounterResult from "../CounterResult";

export default function Counter() {
  const [Number, setNumber] = useState(30);

  function incrementCounter() {
    setNumber(Number + 1);
  }

  function decrementCounter() {
    setNumber(Number - 1);
  }
  
  return (
    <div className="counter-container">
     
      <div className="counter-result">
        <div>
          <CounterResult getNumber={Number} />
        </div>
      </div>

      <div className="counter">
        <div className="counter-button-decrement">
          <Button changeNumberProps={decrementCounter}>
            <p style={{ fontSize: 20 }}>-</p>
          </Button>
        </div>

        <div className="number-countainer">
          <span className="number">{Number}</span>
        </div>

        <div className="counter-button-increment">
          <Button changeNumberProps={incrementCounter}>
            <p style={{ fontSize: 20 }}>+</p>
          </Button>
        </div>
      </div>

    </div>
  );
}
