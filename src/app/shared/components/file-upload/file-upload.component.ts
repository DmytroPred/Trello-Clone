import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/User';
import { UserFirebaseService } from 'src/app/core/services/firebase-entities/user-firebase.service';
import { SnackBarService } from '../snack-bar/snack-bar.service';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, OnDestroy {
  file!: File;
  isLoading: boolean = false;
  uploadProgress!: number;
  selectedFileName!: string;

  @Input() user!: IUser;
  
  constructor(
    private userFirebaseSrvice: UserFirebaseService, 
    private snackBarService: SnackBarService,
    public fileUploadService: FileUploadService
    ) { }

  onChange(event: any) {
    this.file = event.target?.files[0];
    this.selectedFileName = this.file.name;
    if(this.file.size > 512000) {
      this.snackBarService.openSnackBar('Image too large, please use images less than 512KB', 'OK', 5000);
      this.fileUploadService.isFileSelected$.next(false);
    } else {
      this.fileUploadService.isFileSelected$.next(true);
    }
  }

  ngOnInit(): void {}

  onUpload() {
      this.isLoading = true;
      
      this.fileUploadService.upload(this.file).then(() => {
        this.user.profileImageName = this.selectedFileName;
        this.userFirebaseSrvice.updateUserById(this.user.uid, this.user).then(() => this.isLoading = false);
      });
  }

  ngOnDestroy() {
    this.fileUploadService.isFileSelected$.next(false);
  }
}
