import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/models/User';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { UserFirebaseService } from './firebase-entities/user-firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private currentUserService: CurrentUserService,
    private userFirebaseService: UserFirebaseService,
    private auth: Auth,
    private router: Router
  ) {}

  async signUp(signedUpUser: IUser) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        signedUpUser.email,
        signedUpUser.password
      );
      const { user } = userCredential;
      await updateProfile(user, {
        displayName: signedUpUser.username,
      });

      await this.userFirebaseService.addUserWithCustomId(
        user.uid,
        signedUpUser
      );
      this.currentUserService.isUserLoggedIn.next(true);
      this.router.navigateByUrl('public-boards');
    } catch (error) {
      return console.error(error);
    }
  }

  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);

      this.currentUserService.isUserLoggedIn.next(true);
      this.router.navigateByUrl('public-boards');
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);

      this.currentUserService.isUserLoggedIn.next(false);
      this.router.navigateByUrl('public-boards');
    } catch (error) {
      alert(error);
    }
  }
}
