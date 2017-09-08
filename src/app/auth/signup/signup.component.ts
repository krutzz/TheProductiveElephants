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
      this.AuthService.createUserWithEmailAndPassword(this.email, password)
      .then(user => {
        this.Router.navigate(['/']);
      })
      .catch((error: any) => {
          this.alert.danger(error.message);
      });

    }
    public closeAlert(alert: Alert) {
      this.alert.close();
    }
}
