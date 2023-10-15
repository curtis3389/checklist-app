// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { createContext } from 'preact';
import { ChecklistRepository } from 'js/models/ChecklistRepository';

/**
 * A context for a repository of checklists.
 */
export const ChecklistRepositoryContext = createContext<ChecklistRepository>(undefined);
