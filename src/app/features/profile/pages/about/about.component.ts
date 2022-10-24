import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/User';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  user!: Observable<IUser>;
  constructor(public currentUserService: CurrentUserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.currentUserService.currentUser$;
  }

  toEdit() {
    this.router.navigateByUrl('profile/edit');
  }

}
