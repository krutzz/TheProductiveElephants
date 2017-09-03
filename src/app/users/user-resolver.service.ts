import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserResolverService implements Resolve<any> {

  constructor(private userAuth: AuthService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot): any {
     return this.userAuth.currentUser();
    }
  }
