import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CurrentUserService } from '../../services/current-user/current-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public currentUserService: CurrentUserService,
  ) {}

  ngOnInit(): void { }

  signOut() {
    this.afAuth.signOut();
    this.router.navigateByUrl('');
  }
}
