import { IColumn } from '../models/Column'

export interface IBoard {
  id?: string;
  name?: string;
  permission?: string; // public or private board
  columns?: IColumn[];
}