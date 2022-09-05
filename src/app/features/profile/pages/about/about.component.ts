import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/User';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  user!: IUser;
  constructor(private currentUserService: CurrentUserService, private router: Router) { }

  ngOnInit(): void {
    this.currentUserService.currentUser$.pipe(first()).subscribe(user => this.user = user);
  }

  toEdit() {
    this.router.navigateByUrl('profile/edit');
  }

}
