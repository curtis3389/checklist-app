import { useState } from 'preact/hooks';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={increment}>Count: {count}</button>
  );
};
