// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { Checklist } from 'js/models/Checklist';

/**
 * A repository of checklists.
 */
export class ChecklistRepository {
  private checklists: Checklist[] = [
    {
      id: 0,
      items: [
        {
          index: 0,
          text: 'Put clean dishes away',
        },
        {
          index: 1,
          text: 'Empty recycling rack',
        },
        {
          index: 2,
          text: 'Scrub dirty dishes',
        },
        {
          index: 3,
          text: 'Rinse recycling',
        },
        {
          index: 4,
          text: 'Scrub cast iron',
        },
        {
          index: 5,
          text: 'Wash hand wash dishes',
        },
        {
          index: 6,
          text: 'Start dishwasher, if at least half full',
        },
        {
          index: 7,
          text: 'Clean cutting board',
        },
        {
          index: 8,
          text: 'Clean counters',
        },
      ],
      title: 'Clean Kitchen',
    },
    {
      id: 1,
      items: [
        {
          index: 0,
          text: 'Cut open patient',
        },
        {
          index: 1,
          text: 'Insert rag',
        },
        {
          index: 2,
          text: 'Insert scope',
        },
        {
          index: 3,
          text: 'Remove gall bladder',
        },
        {
          index: 4,
          text: 'Remove scope',
        },
        {
          index: 5,
          text: 'Remove rag',
        },
        {
          index: 6,
          text: 'Close up patient',
        },
      ],
      title: 'Cholecystectomy',
    },
  ];

  /**
   * Creates a new checklist with the given title and returns it.
   * @param title The title of the new checklist.
   * @returns The newly created checklist.
   */
  createChecklistAsync(title: string): Promise<Checklist> {
    const nextChecklistId = () => (this.checklists
      .map(checklist => checklist.id)
      .reduce((previous, current) => {
        return current > previous
          ? current
          : previous;
      }) + 1);
    const newChecklist: Checklist = {
      id: nextChecklistId(),
      items: [],
      title,
    };
    this.checklists.push(newChecklist);
    return Promise.resolve(newChecklist);
  }

  /**
   * Gets all of the current user's checklists.
   * @returns All of the current user's checklists.
   */
  getAllChecklistsAsync(): Promise<Checklist[]> {
    return Promise.resolve(this.checklists);
  }

  /**
   * Gets the checklist with the given ID.
   * @param id ID of the checklist to get.
   * @returns The checklist with the given ID.
   */
  getChecklistAsync(id: number): Promise<Checklist> {
    return Promise.resolve(this.checklists.filter(checklist => checklist.id === id)[0]);
  }
}
