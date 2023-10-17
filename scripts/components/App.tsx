// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { Router } from 'preact-router';
import { Layout } from 'js/components/Layout';
import { ChecklistRepositoryContext } from 'js/contexts/ChecklistRepositoryContext';
import { ChecklistRepository } from 'js/models/ChecklistRepository';
import { ChecklistPage } from 'js/routes/ChecklistPage';
import { ErrorPage } from 'js/routes/ErrorPage';
import { HomePage } from 'js/routes/HomePage';
import { ChecklistsPage } from 'js/routes/ChecklistsPage';
import { NewChecklistPage } from 'js/routes/NewChecklistPage';
import {EditChecklistPage} from 'js/routes/EditChecklistPage';

/**
 * Represents the Checklist single-page app as a whole.
 */
export const App = () => {
  return (
    <Layout>
      <ChecklistRepositoryContext.Provider value={new ChecklistRepository}>
        <Router>
          <HomePage path="/" />
          <ChecklistsPage path="/checklists" />
          <NewChecklistPage path="/checklists/new" />
          <EditChecklistPage path="/checklists/:id/edit" />
          <ChecklistPage path="/checklists/:id" />
          <ErrorPage default />
        </Router>
      </ChecklistRepositoryContext.Provider>
    </Layout>
  );
};
