import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  email: string;
  userForm: FormGroup;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
    .subscribe((data) => {
      this.email = data.user.email;
    });
    this.userForm = new FormGroup({
      email: new FormControl({ value: this.email, disabled: true })
    });
  }

  onSubmit() {
    console.log(this.email);
  }

}
