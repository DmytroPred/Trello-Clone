import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { WhereFilterOp } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { IUser } from '../../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserFirebaseService {
  constructor(private angularFirestore: AngularFirestore) {}

  getUserDocById(userId: string): Observable<IUser> {
    return this.angularFirestore
      .doc(`user/${userId}`)
      .valueChanges() as Observable<IUser>;
  }

  getUserWhere(
    fieldName: string,
    operatorStr: WhereFilterOp,
    value: string
  ): Observable<IUser[]> {
    return this.angularFirestore
      .collection('user', (ref) => ref.where(fieldName, operatorStr, value))
      .valueChanges() as Observable<IUser[]>;
  }

  addUserWithCustomId(id: string, user: IUser): Promise<void> {
    return this.angularFirestore.collection('user').doc(`${id}`).set({
      uid: id,
      email: user.email,
      password: user.password,
      username: user.username,
      assignedTasks: [],
    });
  }
}
