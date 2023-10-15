// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { ChecklistItem } from 'js/models/ChecklistItem';

/**
 * A checklist.
 */
export class Checklist {
  /**
   * The ID of the checklist.
   */
  id: number;

  /**
   * The items of the checklist, in order.
   */
  items: ChecklistItem[];

  /**
   * The visible title of the checklist.
   */
  title: string;
}
