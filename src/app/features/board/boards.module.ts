import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './pages/boards/boards.component';
import { AddBoardModalComponent } from './pages/boards/add-board-modal/add-board-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BoardComponent } from './pages/board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskModalComponent } from '../task-modal/task-modal.component';

@NgModule({
  declarations: [
    BoardsComponent,
    AddBoardModalComponent,
    BoardComponent,
    TaskModalComponent,
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
  ],
  providers: [],
})
export class BoardsModule {}
