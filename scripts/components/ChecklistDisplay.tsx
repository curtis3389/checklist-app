// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { Checklist } from 'js/models/Checklist';
import {ChecklistItemDisplay} from 'js/components/ChecklistItemDisplay';

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
    <ul class="list">
      {
        checklist?.items.map(item => <ChecklistItemDisplay key={item.index} item={item} />)
      }
    </ul>
  );
};
