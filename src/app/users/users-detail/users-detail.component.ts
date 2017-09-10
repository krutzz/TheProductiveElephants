import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
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

  posts: Post[];

  constructor(private route: ActivatedRoute, private usersService: UsersService, private postsService: PostsService) { }

  private _user: User;
  ngOnInit() {
    this.route.data
    .subscribe((data) => {
      console.log(data.user[0]);
      const user = data.user[0];

      this._user = new User(user.email, user.firstName, user.lastName, '');
      this.currentUserKey = data.user[0].$key;
      this.postsService.getPostsByQuery({
          orderByChild: 'user/0/email',
          equalTo: 'test5@test.com'
    }).subscribe((snapshot) => {
      console.log(snapshot);
      this.posts = snapshot;
    });
    });
    this.userForm = new FormGroup({
      email: new FormControl({ value: this._user.email, disabled: true }),
      firstName: new FormControl({ value: this._user.firstName, disabled: false}),
      lastName: new FormControl({ value: this._user.lastName, disabled: false}),
      province: new FormControl({ value: this._user.province, disabled: false}),
    });
  }

  onSubmit() {
    console.log(this.currentUserKey);
    const updatedFirstName = this.userForm.controls['firstName'].value;
    const updatedLastName = this.userForm.controls['lastName'].value;
    const updatedProvince = this.userForm.controls['province'].value;

    const updatedUser = new User(this._user.email, updatedFirstName, updatedLastName, updatedProvince);
    this.usersService.updateUserDetails(this.currentUserKey, updatedUser);
  }

}
