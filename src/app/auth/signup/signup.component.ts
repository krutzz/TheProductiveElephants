import * as firebase from 'firebase/app';

import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private AngularFA: AngularFireAuth) { }

    ngOnInit() {
    }

    onSignUp(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      this.AngularFA.auth.createUserWithEmailAndPassword(email, password);
    }

}
