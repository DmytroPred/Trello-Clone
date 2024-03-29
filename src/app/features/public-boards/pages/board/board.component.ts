import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
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
import { first } from 'rxjs';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { BoardFirebaseService } from 'src/app/core/services/firebase-entities/board-firebase.service';
import { AsyncValidatorService } from 'src/app/shared/validators/service/async-validator.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { UserFirebaseService } from 'src/app/core/services/firebase-entities/user-firebase.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class PubBoardComponent implements OnInit {
  isOwner!: boolean;
  addNewTaskToggle: boolean = false;
  addNewColumnToggle: boolean = false;
  isEditable: boolean = false;

  viewTaskFormIndex!: number;
  viewColumnNameFormIndex!: number;
  boardId!: number;

  uid!: string;

  invitedUsersNames: string[] = [];
  currentBoard!: IBoard;

  @ViewChild('columnNameInput', { static: false })
  _inputElement!: ElementRef;

  columnName = new FormControl('', [Validators.required]);
  taskName = new FormControl('', [Validators.required]);
  username = new FormControl(
    '',
    [Validators.required],
    [this.asyncValidatorService.usernameExistValidator('invite')]
  );
  constructor(
    private boardFirebaseService: BoardFirebaseService,
    public asyncValidatorService: AsyncValidatorService,
    public currentUserService: CurrentUserService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private currentDataService: CurrentDataService,
    private userFirebaseService: UserFirebaseService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(first())
      .subscribe((params) => (this.boardId = params.id));

    this.currentUserService.currentUser$.pipe(first()).subscribe((user) => {
      if (user) {
        this.uid = user.uid;
      }
    });

    this.boardFirebaseService
    .getPublicBoard(this.boardId)
    .pipe(first())
    .subscribe(res => {
      if (res) {
        this.currentBoard = res as IBoard;
        this.uid === this.currentBoard.ownerId
          ? (this.isOwner = true)
          : (this.isOwner = false);
          
        this.currentBoard.invitedUsers?.map(uid => this.userFirebaseService
          .getUserDocById(uid)
          .pipe(first())
          .subscribe(user => this.invitedUsersNames.push(user?.username)));
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

    this.boardFirebaseService.updatePublicBoard(this.boardId, {
      columns: this.currentBoard.columns,
    });

    this.addNewColumnToggle = !this.addNewColumnToggle;
    this.columnName.reset();
  }

  cancelAddingColumn() {
    this.addNewColumnToggle = !this.addNewColumnToggle;
    this.columnName.reset();
  }

  updateColumnName(index: number) {
    this.isEditable = !this.isEditable;
    this.viewColumnNameFormIndex = index;

    if (this.isEditable) {
      setTimeout(() => {
        return this._inputElement.nativeElement.focus();
      }, 25);
    } else if (this.currentBoard.columns?.[index].name?.length! >= 3) {
      this.boardFirebaseService.updatePublicBoard(this.currentBoard.boardId!, {
        columns: this.currentBoard.columns,
      });
    } else {
      alert("Names with less than 3 char didn't saving.");

      this.boardFirebaseService
        .getPublicBoard(this.boardId)
        .pipe(first())
        .subscribe((res) => {
          if (res) {
            this.currentBoard = res as IBoard;
          } else console.log('Something goes wrong');
        });
    }
  }
  dropColumn(event: CdkDragDrop<string[]>) {
    if (event.isPointerOverContainer) {
      this.openTaskForm();
      this.isEditable = false;
    }
    if (this.isOwner) {
      moveItemInArray(
        this.currentBoard.columns!,
        event.previousIndex,
        event.currentIndex
      );
      this.boardFirebaseService.updatePublicBoard(this.boardId, {
        columns: this.currentBoard.columns,
      });
    }
  }

  dropTask(event: CdkDragDrop<ITask[] | any>, columnId: number) {
    if (this.isOwner) {
      if (event.previousContainer === event.container) {
        moveItemInArray(
          this.currentBoard.columns?.[columnId].tasks!,
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
      this.boardFirebaseService.updatePublicBoard(
        this.boardId,
        this.currentBoard
      );
    }
  }

  openTaskForm(columnId?: number) {
    this.addNewTaskToggle = !this.addNewTaskToggle;
    this.viewTaskFormIndex = columnId!;
    this.taskName.reset();
  }

  addNewTask(columnId: number) {
    this.currentBoard.columns?.[columnId].tasks?.push({
      taskId: this.currentBoard.columns?.[columnId].tasks?.length!,
      name: this.taskName.value!,
      text: '',
      assignedUsers: [],
      comments: [],
    });

    this.boardFirebaseService.updatePublicBoard(this.boardId, {
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

    this.currentDataService.changeTaskSubjectValue(
      this.currentDataService._currentTask,
      this.currentBoard.columns?.[clickedColumnIndex].tasks?.[clickedTaskIndex]!
    )

    this.dialog.open(TaskModalComponent, {
      width: '95vw',
      height: '90vh',
      maxWidth: '95vw',
      autoFocus: false,
    });
  }

  inviteUserToBoard() {
    this.userFirebaseService.getUserWhere('username', '==', this.username.value!)
      .pipe(first())
      .subscribe(user => {
        this.currentBoard.invitedUsers?.push(user[0].uid);
        this.boardFirebaseService.updatePublicBoard(this.boardId, {
      invitedUsers: this.currentBoard.invitedUsers
    });
  });
    this.invitedUsersNames.push(this.username.value!);

    this.username.reset();
  }

  deleteInvitedUser(index: number) {
    this.invitedUsersNames.splice(index, 1);

    this.currentBoard.invitedUsers?.splice(index, 1);
    this.boardFirebaseService.updatePublicBoard(
      this.boardId,
      this.currentBoard
    );
  }

  deleteColumn(columnId: number) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          text: 'Are you sure you want to delete this list?',
          subtext: 'All tasks inside will be deleted to',
        },
      })
      .afterClosed()
      .pipe(first())
      .subscribe((response) => {
        if (response) {
          this.currentBoard.columns?.splice(columnId, 1);

          this.boardFirebaseService.updatePublicBoard(this.boardId, {
            columns: this.currentBoard.columns,
          });
        }
      });
  }

  deleteTask(taskId: number, columnId: number) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          text: 'Are you sure you want to delete this task?',
          subtext: 'All information inside will be deleted',
        },
      })
      .afterClosed()
      .pipe(first())
      .subscribe((response) => {
        if (response) {
          this.currentBoard.columns?.[columnId].tasks?.splice(taskId, 1);

          this.boardFirebaseService.updatePublicBoard(this.boardId, {
            columns: this.currentBoard.columns,
          });
        }
      });
  }
}
