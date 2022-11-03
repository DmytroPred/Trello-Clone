import { Injectable } from '@angular/core';
import { FirebaseStorage, getStorage, ref, StorageReference, uploadBytes } from 'firebase/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  storage!: FirebaseStorage;
  storageRef!: StorageReference;
  isFileSelected$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  upload(file: File): Promise<Object> {
    this.storage = getStorage();
    this.storageRef = ref(this.storage, `images/${file.name}`);
    return uploadBytes(this.storageRef, file);
  }
}
