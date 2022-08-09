import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicBoardsRoutingModule } from './public-boards-routing.module';
import { PublicBoardsComponent } from './pages/public-boards/public-boards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PubBoardComponent } from './pages/board/board.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    PublicBoardsComponent,
    PubBoardComponent
  ],
  imports: [
    CommonModule,
    PublicBoardsRoutingModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    DragDropModule,
  ]
})
export class PublicBoardsModule { }
