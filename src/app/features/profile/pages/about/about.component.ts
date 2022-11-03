import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/User';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  user!: Observable<IUser>;
  imageName: BehaviorSubject<string> = new BehaviorSubject('');
  imageUrl!: Observable<string> | null;
  subscription!: Subscription;
  constructor(
    public currentUserService: CurrentUserService,
    private angularFireStorage: AngularFireStorage,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.user = this.currentUserService.currentUser$;
    this.subscription = this.user.pipe(map(curUser => this.imageName.next(curUser.profileImageName!)))
      .subscribe(() => this.imageUrl = this.angularFireStorage
        .ref(`images/${this.imageName.getValue()}`)
        .getDownloadURL());
  }

  toEdit() {
    this.router.navigateByUrl('profile/edit');
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
