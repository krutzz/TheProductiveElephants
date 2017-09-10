import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

  getUserDetailsByEmail(email: string): FirebaseListObservable<any> {
    return this.af.list('/users', {
      query: {
        orderByChild: 'email',
        equalTo: email,
      }
    });
  }

  updateUserDetails(key: string, updatedUser: User): void {
    this.af.object(`users/${key}`).update(updatedUser);
  }
}
