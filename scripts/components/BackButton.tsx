// Copyright (c) Curtis Hollibaugh. All rights reserved.

/**
 * A button equivalent to the browser's back button.
 */
export const BackButton = () => {
  const onClick = () => {
    window.history.back();
  };
  return (
    <button onClick={onClick}>Back</button>
  );
};
