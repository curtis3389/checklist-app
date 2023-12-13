// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { Fragment } from 'preact';
import { RoutableProps } from 'preact-router';
import { Layout } from 'js/components/Layout';
import {BackButton} from "js/components/BackButton";
import {ChecklistList} from 'js/components/ChecklistList';
import {useChecklistRepository} from 'js/hooks/useChecklistRepository';

/**
 * The "My Checklists" page. This is where the user selects their checklist.
 */
export const ChecklistsPage = (_: RoutableProps) => {
  const checklistRepository = useChecklistRepository();
  const checklists = checklistRepository.useAllChecklists();

  return (
    <Fragment>
      <Layout.Header.Left><BackButton /></Layout.Header.Left>
      <Layout.Header.Title documentTitle="chcklst! - Checklists">
        <h1>Checklists</h1>
      </Layout.Header.Title>
      <Layout.Header.Right>
        <a className="button button-primary" href="/checklists/new">New!</a>
      </Layout.Header.Right>
      <ChecklistList checklists={checklists} />
    </Fragment>
  );
};
