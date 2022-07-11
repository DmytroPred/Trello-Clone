import { IBoard } from 'src/app/core/models/Board';

export const BoardsMock: IBoard[] = [
  {
    id: '0',
    name: 'Home work',
    columns: [
      {
        name: 'To Do',
        tasks: [
          {
            name: 'Crea'
          },
          {
            name: 'must have'
          }
        ],
      },
      {
        name: 'In progress',
        tasks: [],
      },
      {
        name: 'Done',
        tasks: [
          {
            name: 'Cader',
          },          
          {
            name: 'musdsafaxczave'
          }
        ],
      },
    ],
  },
  {
    id: '1',
    name: 'Pet Project',
    columns: [{ name: 'To Do', tasks: []}, { name: 'In progress', tasks: []}],
  },
  {
    id: '2',
    name: 'Commercial Project',
    columns: [{ name: 'To Do', tasks: [] }],
  },
];
