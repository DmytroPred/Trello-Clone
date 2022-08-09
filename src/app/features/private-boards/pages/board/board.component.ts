import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { CurrentDataService } from 'src/app/core/services/current-data/current-data.service';
import { first, switchMap } from 'rxjs';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { BoardFirebaseService } from 'src/app/core/services/firebase-entities/board-firebase.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  viewTaskFormIndex!: number;
  viewColumnNameFormIndex!: number;

  clickedColumnIndex!: number;

  uid!: string | undefined;
  boardId!: number;

  currentBoardFromServer!: IBoard;
  currentBoard!: IBoard;

  addNewTaskToggle: boolean = false;
  addNewColumnToggle: boolean = false;
  editColumnNameToggle: boolean = false;

  columnName = new FormControl('', [Validators.required]);
  taskName = new FormControl('', [Validators.required]);

  @ViewChild('columnNameInput', { static: false })
  _inputElement!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private boardFirebaseService: BoardFirebaseService,
    private currentUserService: CurrentUserService,
    private currentDataService: CurrentDataService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(first())
      .subscribe((params) => (this.boardId = params.id));

    this.currentUserService.currentUser$
      .pipe(
        first(),
        switchMap((user) => {
          this.uid = user.uid;
          return this.boardFirebaseService
            .getPrivateBoard(this.uid, this.boardId)
            .pipe(first());
        })
      )
      .subscribe((res) => {
        if (res) {
          this.currentBoardFromServer = res as IBoard;
          this.currentBoard = this.currentBoardFromServer;
        } else console.log('Something goes wrong');
      });
  }

  addingColumnWindowToggle() {
    this.addNewColumnToggle = !this.addNewColumnToggle;
    this.columnName.reset();
  }

  addNewColumn() {
    this.currentBoard.columns?.push({
      columnId: this.currentBoard.columns.length,
      name: this.columnName.value!,
      tasks: [],
    });
    this.boardFirebaseService.updatePrivateBoard(this.uid!, this.boardId, {
      columns: this.currentBoard.columns,
    });

    this.addingColumnWindowToggle();
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

    this.boardFirebaseService.updatePrivateBoard(this.uid!, this.boardId, {
      columns: this.currentBoard.columns,
    });
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

    this.boardFirebaseService.updatePrivateBoard(
      this.uid!,
      this.boardId,
      this.currentBoard
    );
  }

  openTaskForm(index?: number) {
    this.addNewTaskToggle = !this.addNewTaskToggle;
    this.viewTaskFormIndex = index!;
    this.taskName.reset();
  }

  addNewTask(index: number) {
    this.currentBoard.columns?.[index].tasks?.push({
      taskId: this.currentBoard.columns?.[index].tasks?.length!,
      name: this.taskName.value!,
      text: '',
    });

    this.boardFirebaseService.updatePrivateBoard(this.uid!, this.boardId, {
      columns: this.currentBoard.columns,
    });

    this.addNewTaskToggle = !this.addNewTaskToggle;
    this.taskName.reset();
  }

  openTaskWindow(clickedTaskIndex: number, clickedColumnIndex: number) {
    this.currentDataService.changeBehaviorSubjectValue(
      this.currentDataService._currentBoard,
      this.currentBoard
    );

    this.currentDataService.changeBehaviorSubjectValue(
      this.currentDataService._currentColumn,
      this.currentBoard.columns?.[clickedColumnIndex]!
    );

    this.currentDataService.changeBehaviorSubjectValue(
      this.currentDataService._currentTask,
      this.currentBoard.columns?.[clickedColumnIndex].tasks?.[clickedTaskIndex]!
    );

    this.dialog.open(TaskModalComponent, {
      width: '95vw',
      height: '90vh',
      maxWidth: '95vw',
      autoFocus: false,
    });
  }

  updateColumnName(index: number) {
    this.editColumnNameToggle = !this.editColumnNameToggle;
    this.viewColumnNameFormIndex = index;

    if (this.editColumnNameToggle) {
      setTimeout(() => this._inputElement.nativeElement.focus(), 25);
    }

    this.boardFirebaseService.updatePublicBoard(this.boardId, {
      columns: this.currentBoard.columns,
    });
  }
}
