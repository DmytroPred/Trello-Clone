import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBoard } from 'src/app/core/models/Board';
import { AddBoardModalComponent } from '../../../../shared/components/add-board-modal/add-board-modal.component';

import { switchMap, Subscription, first } from 'rxjs';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { BoardFirebaseService } from 'src/app/core/services/firebase-entities/board-firebase.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent implements OnInit {
  subscription!: Subscription;
  boards!: IBoard[];

  itemsPerPage: number = 11;
  page: number = 1;
  uid!: string;

  constructor(
    private boardFirebaseService: BoardFirebaseService,
    private currentUserService: CurrentUserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscription = this.currentUserService.currentUser$
      .pipe(
        switchMap((currUser) => {
          if (currUser) {
            this.uid = currUser!.uid;
          }
          return this.boardFirebaseService.getSortedPrivateBoards(
            this.uid,
            'boardId'
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
      data: this.boards,
    });

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((boardName) => {
        if (boardName) {
          boardName = {
            boardId:
              this.boards.length > 0
                ? +this.boards[this.boards.length - 1].boardId! + 1
                : 1,
            ownerId: this.uid,
            isPublic: false,
            name: boardName,
            columns: [],
            invitedUsers: [],
          };
          this.addBoard(boardName);
        }
      });
  }

  addBoard(createdBoard: IBoard) {
    const createdBoardId =
      this.boards.length > 0
        ? +this.boards[this.boards.length - 1].boardId! + 1
        : 1;
    this.boardFirebaseService.setPrivateBoard(
      this.uid,
      createdBoardId,
      createdBoard
    );
  }

  deleteBoard(index: number) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          text: 'Are you sure you want to delete this board?',
          subtext: 'All columns and tasks inside will be deleted',
        },
      })
      .afterClosed()
      .pipe(first())
      .subscribe((res) => {
        if (res) {
          this.boardFirebaseService.deletePrivateBoard(
            this.uid,
            this.boards[index].boardId!
          );
        } else console.log('deleting cancelled');
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
