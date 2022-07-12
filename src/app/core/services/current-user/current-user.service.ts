import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BoardsMock } from "src/app/features/board/mocks/boards.mocks";
import { IBoard } from "../../models/Board";

@Injectable({
  providedIn: 'root'
})

export class CurrentUserService {
  
  // public currentUser$!: BehaviorSubject<IBoard[]>

  // constructor() {
  //   this.currentUser$ = BoardsMock
  // }
}