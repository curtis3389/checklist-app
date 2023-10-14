import { Fragment } from 'preact';
import { RoutableProps } from 'preact-router';
import { Layout } from 'js/components/Layout';
import { useMyChecklists } from 'js/hooks/useMyChecklists';

export const MyChecklistsPage = (_: RoutableProps) => {
  const checklists = useMyChecklists();

  return (
    <Fragment>
      <Layout.Title>My Checklists</Layout.Title>
      <ul>
        {
          checklists?.map(checklist => (
            <a href={`/checklists/${checklist.id}`}>
              <li>{checklist.title}</li>
            </a>
          ))
        }
      </ul>
    </Fragment>

  );
};
