import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CurrentUserService } from '../../services/current-user/current-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public currentUserService: CurrentUserService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  signOut() {
    this.authenticationService.signOut();
  }
}
