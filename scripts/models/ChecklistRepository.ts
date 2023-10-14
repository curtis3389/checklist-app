import { Checklist } from 'js/models/Checklist';

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

  getAllChecklistsAsync(): Promise<Checklist[]> {
    return Promise.resolve(this.checklists);
  }

  getChecklistAsync(id: number): Promise<Checklist> {
    return Promise.resolve(this.checklists.filter(checklist => checklist.id === id)[0]);
  }
}
