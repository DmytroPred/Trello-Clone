import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardsMock } from '../../mocks/boards.mocks';
import { IBoard } from 'src/app/core/models/Board';
import { AddBoardModalComponent } from '../boards/add-board-modal/add-board-modal.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent implements OnInit {
  boards!: IBoard[];

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.boards = BoardsMock;
  }

  openBoardModal() {
    const dialogRef = this.dialog.open(AddBoardModalComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((boardName) => {
      if (boardName) {
        boardName = {id:`${this.boards.length}`, name: boardName, columns: []};
        this.addBoard(boardName);
      }
    });
  }

  addBoard(createdBoard: IBoard) {
    // push data to data base(Mocked data yet)
    BoardsMock.push(createdBoard);
  }
}
