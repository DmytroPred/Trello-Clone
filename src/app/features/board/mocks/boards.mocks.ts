import { IBoard } from "src/app/core/models/Board";

export const BoardsMock: IBoard[] = [
  {
    id: '0',
    name: 'Home work',
    columns: [
      {name: 'To Do'},
      {name: 'In progress'},
      {name: 'Done'}
    ]
  },
  {
    id: '1',
    name: 'Pet Project',
    columns: [
      {name: 'To Do'},
      {name: 'In progress'}
    ]
  },
  {
    id: '2',
    name: 'Commercial Project',
    columns: [
      {name: 'To Do'},
    ]
  }
]