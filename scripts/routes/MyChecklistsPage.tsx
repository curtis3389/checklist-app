// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { Fragment } from 'preact';
import { RoutableProps } from 'preact-router';
import { Layout } from 'js/components/Layout';
import { useMyChecklists } from 'js/hooks/useMyChecklists';

/**
 * The "My Checklists" page. This is where the user selects their checklist.
 */
export const MyChecklistsPage = (_: RoutableProps) => {
  const checklists = useMyChecklists();

  return (
    <Fragment>
      <Layout.Title documentTitle="My Checklists">My Checklists</Layout.Title>
      <a class="button button-primary" href="/checklists/new">Create New Checklist!</a>
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
