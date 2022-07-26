import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBoard } from 'src/app/core/models/Board';
import { AddBoardModalComponent } from '../../../../shared/components/add-board-modal/add-board-modal.component';

import { first, timeout, delay, switchMap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent implements OnInit {
  boards!: IBoard[];

  uid!: string;

  constructor(
    private afAuth: AngularFireAuth,
    private currentUserService: CurrentUserService,
    public dialog: MatDialog,
    private afStore: AngularFirestore
  ) { }

  ngOnInit(): void {

    /** 
     * Get user auth id, after get all documents(board) in collection(boards) 
     * from current user by auth uid, and contain it in boards array
     */ 
     this.afAuth.user
     .pipe(
       switchMap((fbUser) => {
        if(fbUser) {
          this.uid = fbUser!.uid;
        }
         return this.afStore
           .collection('user')
           .doc(`${this.uid}`)
           .collection('boards', ref => ref.orderBy('boardId'))
           .valueChanges()
       })
     )
     .subscribe((res) => {
       (this.boards = res as IBoard[]);
     });
  }

  openBoardModal() {
    const dialogRef = this.dialog.open(AddBoardModalComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((boardName) => {
      if (boardName) {
        boardName = {
          boardId: this.boards.length > 0 ? `${+this.boards[this.boards.length - 1].boardId! + 1}` : '1',
          isPublic: false,
          name: boardName,
          columns: []
        };
        this.addBoard(boardName);
      }
    });
  }

  addBoard(createdBoard: IBoard) {
    this.afStore
    .collection('user')
    .doc(this.uid)
    .collection('boards')
    .doc(`board${this.boards.length > 0 ? +this.boards[this.boards.length - 1].boardId! + 1 : 1}`)
    .set(createdBoard);
  }

  deleteBoard(index: number) {
    this.afStore
    .collection('user')
    .doc(this.uid)
    .collection('boards')
    .doc(`board${this.boards[index].boardId}`)
    .delete()
  }
}
