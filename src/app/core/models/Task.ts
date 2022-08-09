import { IComment } from "./Comment";

export interface ITask {
  taskId?: number;
  name?: string;
  text?: string;
  assignedUsers?: string[];
  comments?: IComment[];
} 