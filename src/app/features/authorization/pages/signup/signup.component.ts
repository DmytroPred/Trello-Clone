import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { CustomMatchValidator } from 'src/app/shared/validators/custom-match-validator';
import { passwordValidator } from 'src/app/shared/validators/password-validator';
import { AuthenticationService } from '../../../../core/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isLoading: boolean = false;
  signupForm: FormGroup = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(25), passwordValidator]),
      confirmPassword: new FormControl('', [Validators.required, Validators.maxLength(25), passwordValidator]),
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
    private currentUserService: CurrentUserService
    ) {}

  ngOnInit(): void {}

  getNameErrorMessage(inputField: string) {
    if (this.signupForm.hasError('required', inputField)) {
      return 'Required field';
    } else if (this.signupForm.hasError('email', inputField)) {
      return 'Not a valid email';
    } else if (this.signupForm.hasError('minlength', inputField)) {
      return 'Minimul length is 3 characters';
    } else if (this.signupForm.hasError('maxlength', inputField)) {
      return 'Maximum length is 25 characters';
    } else if (this.signupForm.hasError('pattern', inputField)) {
      return 'The password must contain minimum six character, at least on letter and one number';
    } return '';
  }

  signupSubmit() {
    this.isLoading = true;
    // console.log(this.signupForm.value);
    this.authenticationService
    .signUp(this.signupForm.value).finally(() => this.isLoading = false);
    // .then(() => this.currentUserService.isUserLoggedIn$.next(true));
    // console.log(this.signupForm.get('email')?.value, this.signupForm.get('password')?.value)
    // this.authenticationService.signUp(this.signupForm.get('email')?.value, this.signupForm.get('password')?.value)
  }
}
