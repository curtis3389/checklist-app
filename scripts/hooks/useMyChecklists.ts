import { useEffect, useState } from 'preact/hooks';
import { useChecklistRepository } from 'js/hooks/useChecklistRepository';
import { Checklist } from 'js/models/Checklist';

export const useMyChecklists = (): Checklist[] | undefined => {
  const checklistRepository = useChecklistRepository();
  const [checklists, setChecklists] = useState<Checklist[] | undefined>();

  useEffect(() => {
    checklistRepository
      .getAllChecklistsAsync()
      .then(checklists => setChecklists(checklists));
  }, []);

  return checklists;
};
