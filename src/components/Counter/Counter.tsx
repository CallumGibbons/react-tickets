import { useState } from 'react';
import "./Counter.css";

function TicketCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="ticket-counter">
      <h2>Tickets</h2>
      <div className="counter-wrapper">
        <button className="counter-button" onClick={decrementCount}>-</button>
        <h3 className="counter-value">{count}</h3>
        <button className="counter-button" onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default TicketCounter;