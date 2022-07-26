import { IColumn } from '../models/Column'

export interface IBoard {
  boardId?: string | number;
  ownerId?: string;
  name?: string;
  isPublic?: boolean;
  columns?: IColumn[];
}