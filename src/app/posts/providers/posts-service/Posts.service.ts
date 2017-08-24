import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from './../../../shared/models/post';
import { Router } from '@angular/router';

@Injectable()
export class PostsService {

  posts: FirebaseListObservable<any[]>;
  user;
  constructor(private afAuth: AngularFireAuth, private af: AngularFireDatabase, private Router: Router) {
    this.user = this.afAuth.authState;
    this.posts = af.list('posts', { preserveSnapshot: true });
  }

  getPosts(): Observable<Post[]> {
    return this.af.list('/posts', {
      query: {
        orderByKey: true
      }
    });
  }

  postNewAd(category: string,
    title: string,
    description: string,
    price: number,
    province: string,
    user,
    date
  ) {
    this.posts.push({
      category,
      title,
      description,
      price,
      province,
      user,
      date
    });
    this.Router.navigate(['/']);
  }

  getPostById(postId): Observable<Post> {
    return this.af.object('/posts/' + postId);
  }
}
