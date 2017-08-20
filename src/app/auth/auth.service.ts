import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  signUpUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function (error: any) {
        // Handle Errors here.
        const errorCode: string = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }
}
