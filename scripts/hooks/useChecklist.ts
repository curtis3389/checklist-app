// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { useEffect, useState } from 'preact/hooks';
import { useChecklistRepository } from 'js/hooks/useChecklistRepository';
import { Checklist } from 'js/models/Checklist';

/**
 * Returns the checklist with the given ID.
 * @param id The ID of the checklist to get.
 */
export const useChecklist = (id: number): Checklist | undefined => {
  const checklistRepository = useChecklistRepository();
  const [checklist, setChecklist] = useState<Checklist | undefined>();

  useEffect(() => {
    checklistRepository
      .getChecklistAsync(id)
      .then(checklist => setChecklist(checklist));
  }, [id]);

  return checklist;
};
