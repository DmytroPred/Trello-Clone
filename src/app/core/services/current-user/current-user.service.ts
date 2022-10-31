import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, switchMap, shareReplay, map, BehaviorSubject } from 'rxjs';
import { IUser } from '../../models/User';
import { UserFirebaseService } from '../firebase-entities/user-firebase.service';
@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  public loginWith$: BehaviorSubject<string> = new BehaviorSubject('');
  public currentUser$: Observable<IUser>;
  public isUserLoggedIn$: Observable<boolean>;
  
  constructor(
    private afAuth: AngularFireAuth,
    private userFirebaseService: UserFirebaseService
  ) {
    this.currentUser$ = this.afAuth.user.pipe(
      switchMap((user) => {
        this.loginWith$.next(user?.providerData[0]?.providerId!);
        return this.userFirebaseService.getUserDocById(user?.uid!)
      }),
      shareReplay(1)
    );

    this.isUserLoggedIn$ = this.afAuth.authState.pipe(
      map(user => user !== null)
    );
  }
}
