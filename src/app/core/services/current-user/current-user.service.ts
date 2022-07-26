import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  public isUserLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.isUserLoggedIn.next(true);
      } else console.log(user);
    });
  }
}
