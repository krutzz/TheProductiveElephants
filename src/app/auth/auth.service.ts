import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private AngularFA: AngularFireAuth, private Router: Router) { }

  createUserWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
    return this.AngularFA.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      return user;
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
