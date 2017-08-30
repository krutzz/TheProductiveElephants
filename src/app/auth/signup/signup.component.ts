import { Component, OnInit } from '@angular/core';

import { Alert } from './../../shared/models/alert';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  alert: Alert;
  email: string;
  constructor(private AuthService: AuthService, private Router: Router) { }
    ngOnInit() {
      this.alert = new Alert();
    }

    onSignUp(form: NgForm) {
      this.email = form.value.email;
      const password = form.value.password;
      this.AuthService.createUserWithEmailAndPassword(this.email, password).catch((error: any) => {
        // Handle Errors here.
        if (error) {
          this.alert.newAlert = true;
          this.alert.message = error.message;
          this.alert.type = 'danger';
          console.log(error);
        } else {
          this.Router.navigate(['/']);
        }
      });

    }
    public closeAlert(alert: Alert) {
      this.alert.Close();
    }
}
