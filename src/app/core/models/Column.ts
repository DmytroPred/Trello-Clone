import { ITask } from "src/app/core/models/Task";

export interface IColumn {
  docId?: string;
  columnId?: number;
  name?: string;
  tasks?: ITask[];
}