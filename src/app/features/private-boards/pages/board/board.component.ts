import { Component, OnInit } from '@angular/core';
import { IBoard } from 'src/app/core/models/Board';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask } from 'src/app/core/models/Task';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from 'src/app/shared/components/task-modal/task-modal.component';
import { CurrentColumnService } from 'src/app/core/services/current-column/current-column.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { first, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  viewIndex!: number;
  clickedColumnIndex!: number;

  uid!: string | undefined;
  boardId!: string;

  currentBoardFromServer!: IBoard;
  currentBoard!: IBoard;

  addNewTaskToggle: boolean = false;
  addNewColumnToggle: boolean = false;

  columnName = new FormControl('', [Validators.required]);
  taskName = new FormControl('', [Validators.required]);

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private currentColumnService: CurrentColumnService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(first())
      .subscribe((params) => (this.boardId = params.id));

    this.afAuth.user
      .pipe(
        switchMap((res) => {
          this.uid = res?.uid;
          return this.afStore
            .doc(`user/${this.uid}/boards/board${this.boardId}`)
            .valueChanges()
            .pipe(first());
        })
      )
      .subscribe((res) => {
        if (res) {
          this.currentBoardFromServer = res as IBoard;
          this.currentBoardFromServer.boardId = this.boardId;
          this.currentBoard = this.currentBoardFromServer;
        } else console.log('Something goes wrong');
      });
  }

  openColumnForm() {
    this.addNewColumnToggle = !this.addNewColumnToggle;
  }

  addNewColumn() {
    this.currentBoard.columns?.push({
      columnId: this.currentBoard.columns.length,
      name: this.columnName.value!,
      tasks: [],
    });

    this.afStore
      .doc(`user/${this.uid}/boards/board${this.boardId}`)
      .update({ columns: this.currentBoard.columns });

    this.addNewColumnToggle = !this.addNewColumnToggle;
    this.columnName.reset();
  }

  cancelAddingColumn() {
    this.addNewColumnToggle = !this.addNewColumnToggle;
    this.columnName.reset();
  }

  dropColumn(event: CdkDragDrop<string[]>) {
    if (event.isPointerOverContainer) {
      this.openTaskForm();
    }
    moveItemInArray(
      this.currentBoard.columns!,
      event.previousIndex,
      event.currentIndex
    );
    this.afStore
      .doc(`user/${this.uid}/boards/board${this.boardId}`)
      .update({ columns: this.currentBoard.columns });
  }

  dropTask(event: CdkDragDrop<ITask[] | any>, index: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.currentBoard.columns?.[index].tasks!,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.afStore
      .doc(`user/${this.uid}/boards/board${this.boardId}`)
      .update(this.currentBoard);
  }

  openTaskForm(index?: number) {
    this.addNewTaskToggle = !this.addNewTaskToggle;
    this.viewIndex = index!;
    this.taskName.reset();
  }

  addNewTask(index: number) {
    this.currentBoard.columns?.[index].tasks?.push({
      taskId: `${this.currentBoard.columns?.[index].tasks?.length!}`,
      name: this.taskName.value!,
      text: '',
    });

    this.afStore
      .doc(`user/${this.uid}/boards/board${this.boardId}`)
      .update({ columns: this.currentBoard.columns });

    this.addNewTaskToggle = !this.addNewTaskToggle;
    this.taskName.reset();
  }

  openTaskWindow(clickedTaskIndex: number, clickedColumnIndex: number) {
    this.currentColumnService._currentColumn.next(
      this.currentBoard.columns?.[clickedColumnIndex]!
    );
    this.currentColumnService._currentTask.next(
      this.currentBoard.columns?.[clickedColumnIndex].tasks?.[clickedTaskIndex]!
    );
    this.currentColumnService._currentBoard.next(this.currentBoard);

    this.dialog.open(TaskModalComponent, {
      width: '80vw',
      height: '80vh',
      autoFocus: false,
    });
  }
}
