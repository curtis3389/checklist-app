// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { Fragment } from 'preact';
import { RoutableProps } from 'preact-router';
import { useChecklist } from 'js/hooks/useChecklist';
import { ChecklistDisplay } from 'js/components/ChecklistDisplay';
import { Layout } from 'js/components/Layout';

/**
 * The checklist page's props.
 */
export interface ChecklistPageProps extends RoutableProps {
  /**
   * The ID of the checklist to show.
   */
  id?: string;
}

/**
 * The checklist page. This is where the user uses a checklist.
 */
export const ChecklistPage = (props: ChecklistPageProps) => {
  const { id } = props;
  const checklist = useChecklist(Number(id));

  return (
    <Fragment>
      <Layout.Title documentTitle={checklist?.title}>{checklist?.title}</Layout.Title>
      <Layout.Header.Right></Layout.Header.Right>
      <ChecklistDisplay checklist={checklist} />
    </Fragment>
  );
};
