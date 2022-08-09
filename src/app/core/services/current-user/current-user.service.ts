import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, first, switchMap, shareReplay } from 'rxjs';
import { IUser } from '../../models/User';
import { UserFirebaseService } from '../firebase-entities/user-firebase.service';
@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  public isUserLoggedIn = new BehaviorSubject<boolean>(false);
  // public currentUserId = new BehaviorSubject<string>('');
  public currentUser$!: Observable<IUser>;
  constructor(
    private auth: Auth,
    private afAuth: AngularFireAuth,
    private userFirebaseService: UserFirebaseService
  ) {
    this.currentUser$ = this.afAuth.user.pipe(
      switchMap((user) => {
        return this.userFirebaseService.getUserDocById(user?.uid!)
      }),
      shareReplay(1)
    );

    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.isUserLoggedIn.next(true);
      } else console.log(user);
    });
  }
}
