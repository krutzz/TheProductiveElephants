import * as firebase from 'firebase/app';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostNewAdService {
  user: Observable<firebase.User>;
  ads: FirebaseListObservable<any[]>;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = this.afAuth.authState;

    this.ads = af.list('/ads');
  }

  postNewAd(category: string,
            title: string,
            description: string,
            price: number,
            province: string
          ) {
    this.ads.push({
      category,
      title,
      description,
      price,
      province
    });
}
}
