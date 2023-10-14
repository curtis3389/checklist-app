import { Checklist } from 'js/models/Checklist';

export interface ChecklistDisplayProps {
  checklist?: Checklist,
}

export const ChecklistDisplay = (props: ChecklistDisplayProps) => {
  const {checklist} = props;

  return (
    <div>
      <h1>{checklist?.title}</h1>
      <ul>
        {
          checklist?.items.map(item => (
            <li>
              <label>
                <input type="checkbox" />
                {item.text}
              </label>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
