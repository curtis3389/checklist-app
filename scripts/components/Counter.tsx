// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { useState } from 'preact/hooks';

/**
 * A button that counts how many times it has been clicked.
 */
export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={increment}>Count: {count}</button>
  );
};
