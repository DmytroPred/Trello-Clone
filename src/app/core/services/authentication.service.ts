import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/models/User';
import { UserFirebaseService } from './firebase-entities/user-firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
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
      this.router.navigateByUrl('');
    } catch (error) {
      return console.error(error);
    }
  }

  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigateByUrl('');
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
}
