import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { first, switchMap, tap } from 'rxjs/operators';
import { IColumn } from 'src/app/core/models/Column';
import { CurrentColumnService } from 'src/app/core/services/current-column/current-column.service';
import { ITask } from 'src/app/core/models/Task';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { IBoard } from 'src/app/core/models/Board';
import { IUser } from 'src/app/core/models/User';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss'],
})
export class TaskModalComponent implements OnInit {
  openDescriptionFormToggle: boolean = false;
  currentBoard!: IBoard;
  selectedColumn!: IColumn;
  selectedTask!: ITask;

  uid!: string;
  description = new FormControl('');
  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private currentColumnService: CurrentColumnService
  ) {}

  ngOnInit(): void {
    this.afAuth.user.pipe(first()).subscribe((res) => {
      if(res) {
        this.uid = res!.uid;
      }
    });

    this.currentColumnService._currentBoard
      .pipe(first())
      .subscribe((result) => {
        (this.currentBoard = result), console.log(this.currentBoard);
      });

    this.currentColumnService._currentColumn
      .pipe(first())
      .subscribe((result) => {
        this.selectedColumn = result;
      });

    this.currentColumnService._currentTask.pipe(first()).subscribe((result) => {
      (this.selectedTask = result),
        this.description.setValue(result.text!);
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
      this.afStore
        .doc(`boards/board${this.currentBoard.boardId}`)
        .update({ columns: this.currentBoard.columns });
    } else {
      this.afStore
        .doc(`user/${this.uid}/boards/board${this.currentBoard.boardId}`)
        .update({ columns: this.currentBoard.columns });
    }

    this.openCloseDescriptionForm();
  }

  // async assignTask() {
  // // console.log(this.selectedTask);
  // const findUser$ = this.afStore
  //   .collection<IUser>('user', (ref) =>
  //     ref.where('email', '==', '1234q@gmail.com')
  //   )
  //   .valueChanges()
  //   .pipe(
  //     // tap(asgnUser => [assignedUser] = asgnUser),
  //     first())
  // const [assignedUser]: IUser[] = await lastValueFrom(findUser$);
  // // console.log(assignedUser);
  // assignedUser!.assignedTasks.push(this.selectedTask);
  // // console.log(assignedUser);
  // this.afStore.collection('user').doc(assignedUser!.uid).update(assignedUser!)
  // // .valueChanges().pipe(first()).subscribe(console.log);
  // // console.log(this.afStore.collection('user').get())
  // }
}
