import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IBoard } from "../../models/Board";
import { IColumn } from "../../models/Column";
import { ITask } from "../../models/Task";

@Injectable({
  providedIn: 'root'
})

export class CurrentColumnService {
  public _currentBoard: BehaviorSubject<IBoard>;
  public _currentColumn: BehaviorSubject<IColumn>;
  public _currentTask: BehaviorSubject<ITask>;

  constructor() { 
    this._currentBoard = new BehaviorSubject<IBoard>({});
    this._currentColumn = new BehaviorSubject<IColumn>({});
    this._currentTask = new BehaviorSubject<ITask>({});
  }
}