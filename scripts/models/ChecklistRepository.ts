// Copyright (c) Curtis Hollibaugh. All rights reserved.

import {useEffect, useState} from 'preact/hooks';
import { Subject } from 'rxjs';
import { Checklist } from 'js/models/Checklist';

/**
 * A repository of checklists.
 */
export class ChecklistRepository {
  private readonly exampleData: Checklist[] = [
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
  private readonly allSubject = new Subject<Checklist[]>;
  private readonly itemSubjects = new Map<number, Subject<Checklist>>();
  private checklists: Checklist[] = this.exampleData;

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
      }, 0) + 1);
    const newChecklist: Checklist = {
      id: nextChecklistId(),
      items: [],
      title,
    };
    this.checklists = [...this.checklists, newChecklist];
    this.allSubject.next(this.checklists);
    this.getItemSubject(newChecklist.id).next(newChecklist);
    return Promise.resolve(newChecklist);
  }

  /**
   * Deletes the given checklist.
   * @param checklist The checklist to delete.
   */
  deleteChecklist(checklist: Checklist): void {
    this.checklists = this.checklists.filter(c => c.id !== checklist.id);
    this.allSubject.next(this.checklists);
    this.getItemSubject(checklist.id).next(undefined);
  }

  /**
   * Gets all of the current user's checklists.
   * @returns All of the current user's checklists.
   */
  getAllChecklists(): Checklist[] {
    return this.checklists;
  }

  /**
   * Gets the checklist with the given ID.
   * @param id ID of the checklist to get.
   * @returns The checklist with the given ID.
   */
  getChecklist(id: number): Checklist {
    return this.checklists.filter(checklist => checklist.id === id)[0];
  }

  updateChecklist(newChecklist: Checklist): Checklist {
    this.checklists = this.checklists.map(checklist => checklist.id === newChecklist.id
      ? newChecklist
      : checklist);
    this.allSubject.next(this.checklists);
    this.getItemSubject(newChecklist.id).next(newChecklist);
    return newChecklist;
  }

  useAllChecklists(): Checklist[] {
    const [allChecklists, setAllChecklists] = useState(this.getAllChecklists());

    useEffect(() => {
      const subscription = this.allSubject.subscribe(setAllChecklists);
      return () => subscription.unsubscribe();
    }, []);

    return allChecklists;
  }

  useChecklist(id: number): Checklist {
    const [checklist, setChecklist] = useState(this.getChecklist(id));

    useEffect(() => {
      const subscription = this.getItemSubject(id).subscribe(setChecklist);
      return () => subscription.unsubscribe();
    }, []);

    return checklist;
  }

  private getItemSubject(id: number) : Subject<Checklist> {
    if (!this.itemSubjects.has(id)) {
      this.itemSubjects.set(id, new Subject<Checklist>());
    }

    return this.itemSubjects.get(id);
  }
}
