import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IUser } from '../models/User';
import {
    getAuth,
    updatePassword,
    updateEmail,
    updateProfile,
    EmailAuthProvider,
    reauthenticateWithCredential,
} from '@angular/fire/auth';
import { UserFirebaseService } from './firebase-entities/user-firebase.service';

@Injectable({
    providedIn: 'root',
})
export class ChangeProfileService {
    constructor(private userFirebaseService: UserFirebaseService) {}

    async changeProfile(profileForm: FormGroup, currentUserData: IUser) {
      const resultUserData: IUser = currentUserData;
      const auth = getAuth().currentUser;

      const credential = EmailAuthProvider.credential(auth?.email!, currentUserData.password);
        try {
            await reauthenticateWithCredential(auth!, credential);

            if (currentUserData.username !== profileForm.get('username')?.value) {
                await updateProfile(auth!, {
                    displayName: profileForm.get('username')?.value,
                    photoURL: '',
                }).then(() => {
                    resultUserData.username = profileForm.get('username')?.value;
                });
            }

            if (currentUserData.email !== profileForm.get('email')?.value) {
                await updateEmail(auth!, profileForm.get('email')?.value)
                    .then(() => {
                        resultUserData.email = profileForm.get('email')?.value;
                    })
                    .catch((error) => {
                        // An error occurred
                        // ...
                    });
            }

            if (currentUserData.password !== profileForm.get('password')?.value) {
                await updatePassword(auth!, profileForm.get('password')?.value)
                    .then(() => {
                        resultUserData.password = profileForm.get('password')?.value;
                    })
                    .catch((error) => {
                        // An error ocurred
                        // ...
                    });
            }

            this.userFirebaseService.updateUserById(currentUserData.uid, resultUserData);
        } catch (err) {
            alert(err);
        }
    }
}
