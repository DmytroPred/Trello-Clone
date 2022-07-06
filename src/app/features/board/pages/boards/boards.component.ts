import { Component, OnInit } from '@angular/core';
import { BoardsMock } from '../../mocks/boards.mocks';
import { IBoard } from 'src/app/core/models/Board';
import { MatDialog } from '@angular/material/dialog';
import { AddBoardModalComponent } from '../add-board-modal/add-board-modal.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  boards: IBoard[] = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.boards = BoardsMock;
    console.log(this.boards[0].id)
  }

  openBoardModal() {
    const dialogRef = this.dialog.open(AddBoardModalComponent, {
      width: '400px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addBoard(result);
      }
    })
    console.log('Modal open');
  }

  addBoard(board: IBoard) {
    this.boards.push(board);
  }
}
