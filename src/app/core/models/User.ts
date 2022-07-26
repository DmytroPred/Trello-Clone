import { IBoard } from '../models/Board'
import { ITask } from './Task'

export interface IUser {
  uid: string,
  email: string,
  username: string,
  password: string,
  assignedTasks: ITask[],
  boards?: IBoard[]
}