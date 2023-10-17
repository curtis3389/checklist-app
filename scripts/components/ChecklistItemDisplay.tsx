import {JSX} from 'preact';
import {ChecklistItem} from 'js/models/ChecklistItem';
import {CheckboxInput} from 'js/components/CheckboxInput';

export interface ChecklistItemDisplayProps {
  item: ChecklistItem;
}

export function ChecklistItemDisplay(props: ChecklistItemDisplayProps): JSX.Element {
  const {item} = props;

  return (
    <CheckboxInput>
      <li>
        {item.text}
      </li>
    </CheckboxInput>
  );
}
