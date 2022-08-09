import { IColumn } from '../models/Column'

export interface IBoard {
  boardId?: number;
  ownerId?: string;
  name?: string;
  isPublic?: boolean;
  columns?: IColumn[];
  invitedUsers?: string[];
}