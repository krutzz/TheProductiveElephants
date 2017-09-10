import 'rxjs/add/operator/first';

import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './../shared/models/user';
import { UsersService } from './users.service';

@Injectable()
export class UserResolverService implements Resolve<any> {
  user: any;
  constructor(private userAuth: AuthService, private userService: UsersService) { }
  resolve(route: ActivatedRouteSnapshot): any {
    const email = this.userAuth.currentUser().email;
    return this.userService.getUserDetailsByEmail(email).map((user) => {
      return user;
    }).first();
  }
}
