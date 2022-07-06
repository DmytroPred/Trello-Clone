import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './pages/boards/boards.component';
import { AddBoardModalComponent } from './pages/add-board-modal/add-board-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    BoardsComponent,
    AddBoardModalComponent
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class BoardsModule { }
