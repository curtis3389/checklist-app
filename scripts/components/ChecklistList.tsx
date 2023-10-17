import {JSX} from 'preact';
import {Checklist} from 'js/models/Checklist';
import {ChecklistListItem} from 'js/components/ChecklistListItem';

export interface ChecklistListProps {
  checklists: Checklist[];
}

export function ChecklistList(props: ChecklistListProps): JSX.Element {
  const {checklists} = props;

  return (
    <ul class="list">
      {
        checklists?.map(checklist => <ChecklistListItem checklist={checklist} />)
      }
    </ul>
  );
}
