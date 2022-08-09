import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-board-modal',
  templateUrl: './add-board-modal.component.html',
  styleUrls: ['./add-board-modal.component.scss'],
})
export class AddBoardModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddBoardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public boards: any[]
    ) {}

  existBoardsNames!: string[];
  boardName = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.existBoardsNames = this.boards.map(el => el.name);
    }

  addNewBoard() {
    this.dialogRef.close(this.boardName.value);
  }
}
