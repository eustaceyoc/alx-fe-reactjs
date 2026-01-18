import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', maxWidth: '500px' }}>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
