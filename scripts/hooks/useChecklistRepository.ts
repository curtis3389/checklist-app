// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { useContext } from 'preact/hooks';
import { ChecklistRepositoryContext } from 'js/contexts/ChecklistRepositoryContext';

/**
 * Returns a repository of checklists.
 */
export const useChecklistRepository = () => {
  return useContext(ChecklistRepositoryContext);
};
