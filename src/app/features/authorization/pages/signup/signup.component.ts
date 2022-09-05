import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
    public asyncValidatorService: AsyncValidatorService,
  ) {}

  ngOnInit(): void { }

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
}
