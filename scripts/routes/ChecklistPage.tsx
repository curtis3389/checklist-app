// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { Fragment } from 'preact';
import { RoutableProps } from 'preact-router';
import { BackButton } from "js/components/BackButton";
import { ChecklistDisplay } from 'js/components/ChecklistDisplay';
import { Layout } from 'js/components/Layout';
import {useChecklistRepository} from 'js/hooks/useChecklistRepository';


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
  const checklistRepository = useChecklistRepository();
  const checklist = checklistRepository.useChecklist(Number(id));

  return (
    <Fragment>
      <Layout.Header.Left><BackButton /></Layout.Header.Left>
      <Layout.Header.Title documentTitle={`chcklst! - ${checklist?.title}`}>
        <h1>{checklist?.title}</h1></Layout.Header.Title>
      <Layout.Header.Right>
        <a className="button button-primary" href={`/checklists/${id}/edit`}>Edit</a>
      </Layout.Header.Right>
      <ChecklistDisplay checklist={checklist} />
    </Fragment>
  );
};
