// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { Checklist } from 'js/models/Checklist';

/**
 * The checklist display props.
 */
export interface ChecklistDisplayProps {
  /**
   * The checklist to display.
   */
  checklist?: Checklist,
}

/**
 * A checklist display. Allows the user to use a checklist.
 */
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
