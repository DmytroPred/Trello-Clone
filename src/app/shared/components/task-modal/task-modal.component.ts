import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { IColumn } from 'src/app/core/models/Column';
import { CurrentDataService } from 'src/app/core/services/current-data/current-data.service';
import { ITask } from 'src/app/core/models/Task';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IBoard } from 'src/app/core/models/Board';
import { BoardFirebaseService } from 'src/app/core/services/firebase-entities/board-firebase.service';
import { UserFirebaseService } from 'src/app/core/services/firebase-entities/user-firebase.service';
import { AsyncValidatorService } from '../../validators/service/async-validator.service';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss'],
})
export class TaskModalComponent implements OnInit {
  isAssignFormOpen: boolean = false;
  isEditable: boolean = false;
  isOwner!: boolean;
  openDescriptionFormToggle: boolean = false;

  uid!: string;
  username!: string;
  initTaskName!: string;

  currentBoard!: IBoard;
  selectedColumn!: IColumn;
  selectedTask!: ITask;

  @ViewChild('taskInput') _taskInput!: ElementRef;

  description = new FormControl('', [Validators.maxLength(128)]);
  commentForm = new FormControl('', [Validators.maxLength(64)]);
  assigningTaskForm = new FormControl(
    '',
    [Validators.required],
    [this.asyncValidatorService.usernameExistValidator('invite')]
  );

  updateTaskName() {
    this.isEditable = !this.isEditable;
    const isNameChanged = this.initTaskName !== this.selectedTask.name
    
    if (this.isEditable) {
      setTimeout(() => this._taskInput.nativeElement.focus(), 25);
    } else if(isNameChanged) {
      if (this.currentBoard.isPublic && this.selectedTask.name?.length! >= 3) {
        this.boardFirebaseService.updatePublicBoard(
          this.currentBoard.boardId!,
          {
            columns: this.currentBoard.columns,
          }
        );
      } else if (this.selectedTask.name?.length! >= 3) {
        this.boardFirebaseService.updatePrivateBoard(
          this.uid,
          this.currentBoard.boardId!,
          { columns: this.currentBoard.columns }
        );
      } else {
        alert('Names with less than 3 char didn\'t saving.');
        this.selectedTask.name = this.initTaskName;
      }
    }
  }

  constructor(
    public asyncValidatorService: AsyncValidatorService,
    private boardFirebaseService: BoardFirebaseService,
    private afAuth: AngularFireAuth,
    private currentDataService: CurrentDataService,
    public currentUserService: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.afAuth.user.pipe(first()).subscribe((res) => {
      if (res) {
        this.username = res.displayName!;
        this.uid = res!.uid;
        this.uid === this.currentBoard.ownerId
          ? (this.isOwner = true)
          : (this.isOwner = false);
      }
    });

    this.currentDataService._currentBoard.pipe(first()).subscribe((result) => {
      this.currentBoard = result;
    });

    this.currentDataService._currentColumn.pipe(first()).subscribe((result) => {
      this.selectedColumn = result;
    });

    this.currentDataService._currentTask.pipe(first()).subscribe((result) => {
      (this.selectedTask = result); 
      this.description.setValue(result.text!);
      this.initTaskName = this.selectedTask.name!
    });
  }

  openCloseDescriptionForm() {
    this.openDescriptionFormToggle = !this.openDescriptionFormToggle;
    this.description.reset(this.selectedTask?.text);
  }

  saveDescription() {
    this.selectedTask.text = this.description.value!;

    // Save changed description on server
    if (this.currentBoard.isPublic) {
      this.boardFirebaseService.updatePublicBoard(this.currentBoard.boardId!, {
        columns: this.currentBoard.columns,
      });
    } else {
      this.boardFirebaseService.updatePrivateBoard(
        this.uid,
        this.currentBoard.boardId!,
        { columns: this.currentBoard.columns }
      );
    }

    this.openCloseDescriptionForm();
  }

  addComment() {
    this.selectedTask.comments?.unshift({
      ownerName: this.username,
      ownerId: this.uid,
      text: this.commentForm.value!,
      creationDate: Date.now(),
    });

    this.boardFirebaseService.updatePublicBoard(this.currentBoard.boardId!, {
      columns: this.currentBoard.columns,
    });

    this.commentForm.reset();
  }
  openCloseForm() {
    this.isAssignFormOpen = !this.isAssignFormOpen;
    this.assigningTaskForm.reset();
  }

  assignTask() {
    this.isAssignFormOpen = !this.isAssignFormOpen;
    this.selectedTask.assignedUsers?.push(this.assigningTaskForm.value!);

    this.boardFirebaseService.updatePublicBoard(this.currentBoard.boardId!, {
      columns: this.currentBoard.columns,
    });
  }

  deleteAssignedUser(index: number) {
    this.selectedTask.assignedUsers?.splice(index, 1);
    this.boardFirebaseService.updatePublicBoard(this.currentBoard.boardId!, {
      columns: this.currentBoard.columns,
    });
  }
}
