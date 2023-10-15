// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';

/**
 * Returns the layout title's state.
 */
export const useLayoutTitleState = () => {
  const layoutTitleState = useState<ComponentChildren | undefined>(undefined);
  return layoutTitleState;
};
