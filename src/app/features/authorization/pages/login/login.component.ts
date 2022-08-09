import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/shared/validators/password-validator';
import { AuthenticationService } from '../../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      passwordValidator,
      Validators.maxLength(25),
    ]),
  });

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  getNameErrorMessage(inputField: string) {
    if (this.loginForm.hasError('required', inputField)) {
      return 'Required field';
    } else if (this.loginForm.hasError('email', inputField)) {
      return 'Not a valid email';
    } else if (this.loginForm.hasError('maxlength', inputField)) {
      return 'Maximum length is 25 characters';
    } else if (this.loginForm.hasError('pattern', inputField)) {
      return 'The password must contain minimum six character, at least on letter and one number';
    }
    return '';
  }

  loginSubmit() {
    this.isLoading = true;

    this.authenticationService
      .login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      )
      .finally(() => (this.isLoading = false));
  }
}
