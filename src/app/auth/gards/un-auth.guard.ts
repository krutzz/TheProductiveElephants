import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UnAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.currentUserObservable
      .take(1)
      .map(user => !user)
      .do(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/']);
        }
      });
  }
}
