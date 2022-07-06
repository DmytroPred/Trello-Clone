import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-board-modal',
  templateUrl: './add-board-modal.component.html',
  styleUrls: ['./add-board-modal.component.scss']
})
export class AddBoardModalComponent implements OnInit {
  addBoardForm: any;
  constructor(public dialogRef: MatDialogRef<AddBoardModalComponent>) { }

  ngOnInit(): void {
    this.addBoardForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  addNewBoard() {
    this.dialogRef.close(this.addBoardForm.value);
  }

}
