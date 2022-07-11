import { ITask } from "src/app/core/models/Task";

export interface IColumn {
  name?: string | null;
  tasks?: ITask[];
}