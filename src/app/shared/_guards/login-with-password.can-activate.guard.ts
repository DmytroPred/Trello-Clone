import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginWithPasswordCanActivateGuard implements CanActivate {

  constructor(private currentUserService: CurrentUserService, private router: Router) {}

  canActivate(): Promise<boolean> | boolean {
    return this.currentUserService.loginWith$.value === 'password' ? true : this.router.navigate(['']).then(() => false);
  }
  
}
