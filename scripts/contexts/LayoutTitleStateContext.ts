import { createContext, ComponentChildren } from 'preact';
import { StateUpdater } from 'preact/hooks';

export const LayoutTitleStateContext = createContext<[ComponentChildren, StateUpdater<ComponentChildren>] | undefined>(undefined);
