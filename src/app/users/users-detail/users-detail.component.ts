import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Alert } from './../../shared/models/alert';
import { AuthService } from './../../auth/auth.service';
import { Post } from './../../shared/models/post';
import { PostsService } from './../../posts/providers/posts-service/Posts.service';
import { User } from '../../shared/models/user';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  userForm: FormGroup;
  currentUserKey: string;
  alert: Alert;
  posts: Post[] = [];
  loadingSpiner;

  constructor(private route: ActivatedRoute, private usersService: UsersService, private postsService: PostsService) {
    // tslint:disable-next-line:max-line-length
    this.loadingSpiner = 'https://firebasestorage.googleapis.com/v0/b/nglx-98be4.appspot.com/o/loading.gif?alt=media&token=8a2ffb61-6356-4fbb-89c0-7045f3009832';
  }

  private _user: User;
  ngOnInit() {
    this.route.data
      .subscribe((data) => {
        const user = data.user[0];
        this._user = new User(user.email, user.firstName, user.lastName, '');
        this.currentUserKey = data.user[0].$key;
        this.postsService.getPostsByQuery({
          orderByChild: 'user/0/email',
          equalTo: this._user.email
        }).subscribe((snapshot) => {
          this.posts = snapshot;
        });
      });

    this.alert = new Alert();

    this.userForm = new FormGroup({
      email: new FormControl({ value: this._user.email, disabled: true }),
      firstName: new FormControl({ value: this._user.firstName, disabled: false }),
      lastName: new FormControl({ value: this._user.lastName, disabled: false }),
      province: new FormControl({ value: this._user.province, disabled: false }),
    });
  }

  public closeAlert(alert: Alert) {
    this.alert.close();
  }

  onSubmit() {
    const updatedFirstName = this.userForm.controls['firstName'].value;
    const updatedLastName = this.userForm.controls['lastName'].value;
    const updatedProvince = this.userForm.controls['province'].value;

    const updatedUser = new User(this._user.email, updatedFirstName, updatedLastName, updatedProvince);
    this.usersService.updateUserDetails(this.currentUserKey, updatedUser)
      .then(() => {
        this.alert.success('Your profile was updated!');
      }).catch((error) => {
        this.alert.danger(error.message);
      });
  }
}
