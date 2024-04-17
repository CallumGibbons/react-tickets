import React, { useState } from 'react';

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
    <div>
      <h2>Ticket Counter</h2>
      <div>
        <button onClick={decrementCount}>-</button>
        <h3>{count}</h3>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default TicketCounter;