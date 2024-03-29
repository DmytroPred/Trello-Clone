import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddBoardModalComponent } from './components/add-board-modal/add-board-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { TaskModalComponent } from './components/task-modal/task-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { RbLetterAvatarModule } from 'rb-letter-avatar';
import { TimeagoModule} from 'ngx-timeago';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { NgxEditorModule } from 'ngx-editor';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoadSpinnerComponent,
    AddBoardModalComponent,
    TaskModalComponent,
    ConfirmationDialogComponent,
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    RbLetterAvatarModule,
    TimeagoModule,
    NgxEditorModule,
    EmojiModule,
    PickerModule,
    MatTooltipModule,
    NgxPaginationModule
  ],
  exports: [LoadSpinnerComponent, FileUploadComponent]
})
export class SharedModule {}
