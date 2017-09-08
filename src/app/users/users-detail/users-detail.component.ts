import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  email: string;
  userForm: FormGroup;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  private _user: User;
  ngOnInit() {
    this.route.data
    .subscribe((data) => {
      this._user = new User(data.user.email, 'Pesho', 'Goshov', '');
    });
    this.userForm = new FormGroup({
      email: new FormControl({ value: this._user.email, disabled: true }),
      firstName: new FormControl({ value: this._user.firstName, disabled: true }),
      lastName: new FormControl({ value: this._user.lastName, disabled: true })
    });
  }

  onSubmit() {
    console.log(this.email);
  }

}
