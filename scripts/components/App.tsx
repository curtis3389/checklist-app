import { Router } from 'preact-router';
import { Layout } from 'js/components/Layout';
import { ChecklistRepositoryContext } from 'js/contexts/ChecklistRepositoryContext';
import { ChecklistRepository } from 'js/models/ChecklistRepository';
import { ChecklistPage } from 'js/routes/ChecklistPage';
import { ErrorPage } from 'js/routes/ErrorPage';
import { HomePage } from 'js/routes/HomePage';
import { MyChecklistsPage } from 'js/routes/MyChecklistsPage';

export const App = () => {
  return (
    <Layout>
      <ChecklistRepositoryContext.Provider value={new ChecklistRepository}>
        <Router>
          <HomePage path="/" />
          <MyChecklistsPage path="/checklists" />
          <ChecklistPage path="/checklists/:id" />
          <ErrorPage default />
        </Router>
      </ChecklistRepositoryContext.Provider>
    </Layout>
  );
};
