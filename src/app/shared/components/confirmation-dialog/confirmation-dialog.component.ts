import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})

export class ConfirmationDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: modalData ) { }

  ngOnInit(): void { }
}

export interface modalData {
  text: string
  subtext: string
}