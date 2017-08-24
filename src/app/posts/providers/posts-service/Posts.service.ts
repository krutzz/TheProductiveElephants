import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from './../../../shared/models/post';
import { Router } from '@angular/router';

@Injectable()
export class PostsService {

  posts: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase, private Router: Router) { }

  getPosts(): Observable<Post[]> {
    return this.af.list('/posts', {
      query: {
        orderByKey: true,
        limitToFirst: 5
      }
    });
  }

  postNewAd(category: string,
    title: string,
    description: string,
    price: number,
    province: string,
  ) {
    this.posts = this.af.list('/posts');
    this.posts.push({
      category,
      title,
      description,
      price,
      province,
      user
    });
    this.Router.navigate(['/']);
  }

  getPostById(postId): Observable<Post> {
    return this.af.object('/posts/' + postId);
  }
}
