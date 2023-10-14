import { createContext } from 'preact';
import { ChecklistRepository } from 'js/models/ChecklistRepository';

export const ChecklistRepositoryContext = createContext<ChecklistRepository>(undefined);
