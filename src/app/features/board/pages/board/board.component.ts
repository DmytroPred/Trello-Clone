import { Component, OnInit } from '@angular/core';
import { BoardsMock } from '../../mocks/boards.mocks';
import { IBoard } from 'src/app/core/models/Board';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  currentBoard!: IBoard;
  addNewListToggle: boolean = false;
  
  columnName = new FormControl('', [Validators.required]);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentBoard = BoardsMock[+this.router.url.slice(-1) - 1];
  }


  openForm() {
    this.addNewListToggle = !this.addNewListToggle;
  }

  addNewColumn() {
    this.currentBoard.columns?.push({name: this.columnName.value});
    this.addNewListToggle = !this.addNewListToggle;
    this.columnName.reset();
  }

  cancelAddingColumn() {
    this.addNewListToggle = !this.addNewListToggle;
    this.columnName.reset();
  }
}
