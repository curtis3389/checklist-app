import {Checklist} from 'js/models/Checklist';

export interface ChecklistListItemProps {
  checklist: Checklist;
}

export function ChecklistListItem(props: ChecklistListItemProps) {
  const {checklist} = props;

  return (
    <a href={`/checklists/${checklist.id}`}>
      <li><h2>{checklist.title}</h2></li>
    </a>
  );
}
