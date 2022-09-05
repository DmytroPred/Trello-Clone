import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCanActivateGuard implements CanActivate {
  constructor(private router: Router, private currentUserService: CurrentUserService) {}

  canActivate(): Observable<boolean> {
    return this.currentUserService.isUserLoggedIn$.pipe(
      map(isLoggedIn => {
        if(!isLoggedIn) {
          this.router.navigateByUrl('');
        }
        return isLoggedIn;
      })
    );
  }
}
