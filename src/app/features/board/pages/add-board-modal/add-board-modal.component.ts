import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-board-modal',
  templateUrl: './add-board-modal.component.html',
  styleUrls: ['./add-board-modal.component.scss']
})
export class AddBoardModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddBoardModalComponent>) { }
 
  boardName = new FormControl('', [Validators.required]);
  
  ngOnInit(): void { }

  addNewBoard() {
    this.dialogRef.close(this.boardName.value);
  }

}
