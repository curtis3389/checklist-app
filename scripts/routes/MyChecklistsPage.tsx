// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { Fragment } from 'preact';
import { RoutableProps } from 'preact-router';
import { Layout } from 'js/components/Layout';
import { useMyChecklists } from 'js/hooks/useMyChecklists';
import {BackButton} from "js/components/BackButton";

/**
 * The "My Checklists" page. This is where the user selects their checklist.
 */
export const MyChecklistsPage = (_: RoutableProps) => {
  const checklists = useMyChecklists();

  return (
    <Fragment>
      <Layout.Header.Left><BackButton /></Layout.Header.Left>
      <Layout.Header.Title documentTitle="My Checklists">My Checklists</Layout.Header.Title>
      <Layout.Header.Right>
        <a className="button button-primary" href="/checklists/new">New!</a>
      </Layout.Header.Right>
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
