import { ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';

export const useLayoutTitleState = () => {
  const layoutTitleState = useState<ComponentChildren | undefined>(undefined);
  return layoutTitleState;
};
