import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UsersService } from './../users/users.service';

@Injectable()
export class AuthService {

  constructor(private AngularFA: AngularFireAuth, private Router: Router, public usersService: UsersService) { }

  createUser(user: User, password: string): firebase.Promise<any> {
    return this.AngularFA.auth.createUserWithEmailAndPassword(user.email, password).then((newUser) => {
      this.usersService.addUser(user);
      return newUser;
    });
  }

  signInWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
    return this.AngularFA.auth.signInWithEmailAndPassword(email, password).then((userInfo) => {
      this.Router.navigate(['/']);
      return userInfo;
    });
  }

  currentUser() {
    return this.AngularFA.auth.currentUser;
  }

  get currentUserObservable(): Observable<firebase.User> {
    return this.AngularFA.authState;
  }

  logOut(): void {
    this.AngularFA.auth.signOut();
    this.Router.navigate(['/']);
  }

}
