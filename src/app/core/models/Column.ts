import { ITask } from "src/app/core/models/Task";

export interface IColumn {
  id?: string;
  name?: string;
  tasks?: ITask[];
}