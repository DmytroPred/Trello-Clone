import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  // AbstractControl,
  // AsyncValidatorFn,
  FormControl,
  FormGroup,
  // ValidationErrors,
  Validators,
} from '@angular/forms';
// import {
//   Observable,
//   first,
//   map,
//   debounceTime,
//   switchMap,
//   distinctUntilChanged,
// } from 'rxjs';
// import { UserFirebaseService } from 'src/app/core/services/firebase-entities/user-firebase.service';
import { CustomMatchValidator } from 'src/app/shared/validators/custom-match-validator';
import { passwordValidator } from 'src/app/shared/validators/password-validator';
import { AsyncValidatorService } from 'src/app/shared/validators/service/async-validator.service';
import { AuthenticationService } from '../../../../core/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // disableSubmitButton: boolean = false;
  isLoading: boolean = false;
  signupForm: FormGroup = new FormGroup(
    {
      username: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
        ],
        [this.asyncValidatorService.usernameExistValidator('signup')]
        // [this.usernameExistValidator()]
      ),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        [this.asyncValidatorService.emailExistValidator()]
      ),
      password: new FormControl(null, [
        Validators.required,
        passwordValidator,
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        passwordValidator,
      ]),
    },
    [CustomMatchValidator.MatchValidator('password', 'confirmPassword')]
  );

  get passwordMatchError() {
    return (
      this.signupForm.getError('mismatch') &&
      this.signupForm.get('confirmPassword')?.touched
    );
  }
  constructor(
    private authenticationService: AuthenticationService,
    // private userFirebaseService: UserFirebaseService,
    public asyncValidatorService: AsyncValidatorService,
    // private afStore: AngularFirestore
  ) {}

  ngOnInit(): void {
    // this.asyncValidatorService._isCheckDataBase.subscribe()
  }

  getNameErrorMessage(inputField: string) {
    if (this.signupForm.hasError('required', inputField)) {
      return 'Required field';
    } else if (this.signupForm.hasError('email', inputField)) {
      return 'Not a valid email';
    } else if (this.signupForm.hasError('minlength', inputField)) {
      return 'Minimul length is 3 characters';
    } else if (this.signupForm.hasError('maxlength', inputField)) {
      return 'Maximum length is 12 characters';
    } else if (this.signupForm.hasError('pattern', inputField)) {
      return 'The password must contain minimum 6 character, max 12 character, at least on letter and one number';
    }
    return '';
  }

  signupSubmit() {
    this.isLoading = true;
    this.authenticationService
      .signUp(this.signupForm.value)
      .finally(() => (this.isLoading = false));
  }

  // Replace functionality to the service
  // emailExistValidator(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     // this.disableSubmitButton = true;
  //     return control.valueChanges.pipe(
  //       debounceTime(1000),
  //       distinctUntilChanged(),
  //       first(),
  //       switchMap((controlValue) => {
  //         return this.userFirebaseService.getUserWhere('email', '==', controlValue)
  //         // return this.afStore
  //         //   .collection('user', (ref) => ref.where('email', '==', controlValue))
  //         //   .valueChanges()
  //           .pipe(
  //             first(),
  //             map((res) => {
  //               // this.disableSubmitButton = false;
  //               return res.length ? { emailExist: true } : null;
  //             })
  //           );
  //       })
  //     );
  //   };
  // }

  // usernameExistValidator(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     this.disableSubmitButton = true;
  //     return control.valueChanges.pipe(
  //       debounceTime(1000),
  //       distinctUntilChanged(),
  //       first(),
  //       switchMap((controlValue) => {
  //         return this.afStore
  //           .collection('user', (ref) =>
  //             ref.where('username', '==', controlValue)
  //           )
  //           .valueChanges()
  //           .pipe(
  //             first(),
  //             map((res) => {
  //               this.disableSubmitButton = false;
  //               return res.length ? { usernameExist: true } : null})
  //           );
  //       })
  //     );
  //   };
  // }
}
