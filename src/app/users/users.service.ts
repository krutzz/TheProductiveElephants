import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Injectable } from '@angular/core';
import { User } from './../shared/models/user';

@Injectable()
export class UsersService {
  users: FirebaseListObservable<any>;
  constructor(public af: AngularFireDatabase) {
    this.users = af.list('users', { preserveSnapshot: true });
  }

  addUser(user: User) {
    this.users.push(user);
  }

  getUserbyEmail(email: string) {
    return this.users;
  }

}
