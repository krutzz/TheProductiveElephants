import { Component, OnInit } from '@angular/core';

import { Alert } from './../../shared/models/alert';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  alert: Alert;
  email: string;
  constructor(private AuthService: AuthService) { }
    ngOnInit() {
      this.alert = new Alert();
    }

    onSignIn(form: NgForm) {
      this.email = form.value.email;
      const password = form.value.password;
      this.AuthService.signInWithEmailAndPassword(this.email, password).then(userInfo => {
        console.log(userInfo);
      }).catch((error: any) => {
        // Handle Errors here.
        if (error) {
          this.alert.danger(error.message);
          console.log(error);
        }
        console.log(error);
      });
    }
    public closeAlert(alert: Alert) {
      this.alert.close();
    }
}
