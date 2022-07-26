import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IUser } from '../../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserFirebaseService {
  constructor(private angularFirestore: AngularFirestore) {}

  getUserDoc(id: string) {
    return this.angularFirestore.collection('user').doc(id).valueChanges();
  }

  addUserWithCustomId(id: string, user: IUser): Promise<void> {
    return this.angularFirestore.collection('user').doc(`${id}`).set({
      uid: id,
      email: user.email,
      password: user.password,
      username: user.username,
      assignedTasks: []
    });
  }
}
