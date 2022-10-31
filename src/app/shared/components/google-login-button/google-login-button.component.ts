import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-google-login-button',
  templateUrl: './google-login-button.component.html',
  styleUrls: ['./google-login-button.component.scss']
})
export class GoogleLoginButtonComponent {

  constructor(private authenticationService: AuthenticationService) { }

  signupWithGoogle() {
    this.authenticationService.loginWithGoogle();
  }
}
