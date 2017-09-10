import { Component, OnInit } from '@angular/core';

import { Alert } from './../../shared/models/alert';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  alert: Alert;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  province: string;

  constructor(private AuthService: AuthService, private Router: Router) { }
  ngOnInit() {
    this.alert = new Alert();
  }

  onSignUp(form: NgForm) {

    const user = new User(this.email, this.firstName, this.lastName, 'kaspichan');
    this.AuthService.createUser(user, this.password)
      .then(newUser => {
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
