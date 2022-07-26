import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBoard } from 'src/app/core/models/Board';
import { AddBoardModalComponent } from '../../../../shared/components/add-board-modal/add-board-modal.component';

import { first, timeout, delay, switchMap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-public-boards',
  templateUrl: './public-boards.component.html',
  styleUrls: ['./public-boards.component.scss'],
})
export class PublicBoardsComponent implements OnInit {
  boards!: IBoard[];

  uid!: string;

  constructor(
    private afAuth: AngularFireAuth,
    public currentUserService: CurrentUserService,
    public dialog: MatDialog,
    private afStore: AngularFirestore
  ) {}

  ngOnInit(): void {
    // need to unsubscribe
    this.afAuth.user
      .pipe(
        switchMap((res) => {
          if (res) {
            this.uid = res!.uid;
          }
          return (
            this.afStore
              .collection('boards', (ref) => ref.orderBy('boardId'))
              .valueChanges()
          );
        })
      )
      .subscribe((boards) => {
        this.boards = boards as IBoard[];
      });
  }

  openBoardModal() {
    const dialogRef = this.dialog.open(AddBoardModalComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((boardName) => {
      if (boardName) {
        boardName = {
          boardId:
            this.boards.length > 0
              ? `${+this.boards[this.boards.length - 1].boardId! + 1}`
              : `1`,
          isPublic: true,
          ownerId: this.uid,
          name: boardName,
          columns: [],
        };
        this.addBoard(boardName);
      }
    });
  }

  addBoard(createdBoard: IBoard) {
    this.afStore
      .collection('boards')
      .doc(
        `board${
          this.boards.length > 0
            ? +this.boards[this.boards.length - 1].boardId! + 1
            : 1
        }`
      )
      .set(createdBoard);
  }

  deleteBoard(index: number) {
    this.afStore
      .collection('boards')
      .doc(`board${this.boards[index].boardId}`)
      .delete();
  }
}
