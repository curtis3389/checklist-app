import { useContext } from 'preact/hooks';
import { ChecklistRepositoryContext } from 'js/contexts/ChecklistRepositoryContext';

export const useChecklistRepository = () => {
  return useContext(ChecklistRepositoryContext);
};
