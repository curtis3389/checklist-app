import { useEffect, useState } from 'preact/hooks';
import { useChecklistRepository } from 'js/hooks/useChecklistRepository';
import { Checklist } from 'js/models/Checklist';

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
