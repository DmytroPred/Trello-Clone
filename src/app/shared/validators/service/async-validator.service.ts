import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  first,
  map,
  switchMap,
  BehaviorSubject,
} from 'rxjs';
import { UserFirebaseService } from 'src/app/core/services/firebase-entities/user-firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AsyncValidatorService {
  public _isCheckDataBase: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(private userFirebaseService: UserFirebaseService) {}

  usernameExistValidator(formControl: string): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      this._isCheckDataBase.next(true);
      return control.valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        first(),
        switchMap((username) => {
          return this.userFirebaseService
            .getUserWhere('username', '==', username)
            .pipe(
              first(),
              map((res) => {
                this._isCheckDataBase.next(false);
                if (formControl === 'signup') {
                  return res.length ? { usernameExist: true } : null;
                } else if (formControl === 'invite') {
                  return res.length ? null : { userDoNotExist: true };
                } else return null;
              })
            );
        })
      );
    };
  }

  emailExistValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      this._isCheckDataBase.next(true);
      return control.valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        first(),
        switchMap((controlValue) => {
          return this.userFirebaseService
            .getUserWhere('email', '==', controlValue)
            .pipe(
              first(),
              map((res) => {
                this._isCheckDataBase.next(false);
                return res.length ? { emailExist: true } : null;
              })
            );
        })
      );
    };
  }
}
