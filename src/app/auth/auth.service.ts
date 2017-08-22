import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private AngularFA: AngularFireAuth) { }

  createUserWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
    return this.AngularFA.auth.createUserWithEmailAndPassword(email, password);
  }

  signInWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
    return this.AngularFA.auth.signInWithEmailAndPassword(email, password);
  }

}
