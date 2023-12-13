import { Fragment } from 'preact';
import { RoutableProps, route } from 'preact-router';
import { Layout } from 'js/components/Layout';
import {BackButton} from "js/components/BackButton";
import {ChecklistEditor} from 'js/components/ChecklistEditor';
import {useChecklistRepository} from 'js/hooks/useChecklistRepository';
import {Checklist} from 'js/models/Checklist';

export interface EditChecklistPageProps extends RoutableProps {
  /**
   * The ID of the checklist to show.
   */
  id?: string;
}

export function EditChecklistPage(props: EditChecklistPageProps) {
  const { id } = props;
  const checklistRepository = useChecklistRepository();
  const checklist = checklistRepository.useChecklist(Number(id));
  const deleteChecklist = () => {
    checklistRepository.deleteChecklist(checklist);
    route('/checklists', true);
  };
  const updateChecklist = (newChecklist: Checklist) => {
    checklistRepository.updateChecklist(newChecklist);
  };

  return (
    <Fragment>
      <Layout.Header.Left><BackButton /></Layout.Header.Left>
      <Layout.Header.Title documentTitle={`chcklst! - ${checklist?.title}`}>
        <h1>{checklist?.title}</h1></Layout.Header.Title>
      <Layout.Header.Right><button onClick={deleteChecklist}>Delete</button></Layout.Header.Right>
      <ChecklistEditor checklist={checklist} updateChecklist={updateChecklist} />
    </Fragment>
  );
}
