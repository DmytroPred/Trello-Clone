import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBoard } from 'src/app/core/models/Board';
import { AddBoardModalComponent } from '../../../../shared/components/add-board-modal/add-board-modal.component';
import { switchMap, Subscription, first } from 'rxjs';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { IUser } from 'src/app/core/models/User';
import { BoardFirebaseService } from 'src/app/core/services/firebase-entities/board-firebase.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-public-boards',
  templateUrl: './public-boards.component.html',
  styleUrls: ['./public-boards.component.scss'],
})
export class PublicBoardsComponent implements OnInit, OnDestroy {
  currentUser!: IUser;
  subscription!: Subscription;
  boards!: IBoard[];

  uid!: string;
  searchValue!: string;
  page: number = 1;

  constructor(
    private boardFirebaseService: BoardFirebaseService,
    public currentUserService: CurrentUserService,
    public dialog: MatDialog
  ) {}

  onSearch() {
    this.subscription = this.boardFirebaseService.getSortedPublicBoards('boardId')
    .subscribe(boards => this.boards = boards
      .filter(board => board.name!
        .includes(this.searchValue)));
  }
  ngOnInit(): void {
    this.currentUserService.currentUser$
      .pipe(first())
      .subscribe((user) => (this.currentUser = user));

    this.subscription = this.currentUserService.currentUser$
      .pipe(
        switchMap((res) => {
          if (res) {
            this.uid = res.uid;
          }
          return this.boardFirebaseService.getSortedPublicBoards('boardId');
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
            isPublic: true,
            ownerId: this.uid,
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
    this.boardFirebaseService.setPublicBoard(createdBoardId, createdBoard);
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
        this.boardFirebaseService.deletePublicBoard(
          this.boards[index].boardId!
        );
      } else console.log('deleting cancelled');
    });
  }

  sortByCreationTime() {
    this.boards.sort((a, b) => (a.boardId! > b.boardId! ? 1 : -1));
  }

  sortByUserBoards() {
    const userBoards: IBoard[] = [];
    const restBoards: IBoard[] = [];
    this.boards.map((board) =>
      this.uid === board.ownerId
        ? userBoards.push(board)
        : restBoards.push(board)
    );

    this.boards = userBoards.concat(restBoards);
  }

  sortByBoardsInvitedTo() {
    const invitedToBoards: IBoard[] = [];
    const restBoards: IBoard[] = [];

    this.boards.map((board) =>
      board.invitedUsers?.includes(this.currentUser.uid)
        ? invitedToBoards.push(board)
        : restBoards.push(board)
    );
    this.boards = invitedToBoards.concat(restBoards);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
