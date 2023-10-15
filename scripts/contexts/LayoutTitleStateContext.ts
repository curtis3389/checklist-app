// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { createContext, ComponentChildren } from 'preact';
import { StateUpdater } from 'preact/hooks';

/**
 * A context for the state of the layout's title.
 */
export const LayoutTitleStateContext = createContext<[ComponentChildren, StateUpdater<ComponentChildren>] | undefined>(undefined);
