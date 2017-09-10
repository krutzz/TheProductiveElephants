import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from './../../../shared/models/post';
import { Router } from '@angular/router';

@Injectable()
export class PostServiceMockService {
  user;

  post;

  posts: Post[] = [
    {
      $key: '-KsXmtFl4altqKAOtexA',
      'category': 'Cars',
      'date': 'Sun Aug 27 2017 11:25:17 GMT+0300 (FLE Daylight Time)',
      'description': 'No description',
      // tslint:disable-next-line:max-line-length
      'images': ['https://firebasestorage.googleapis.com/v0/b/nglx-98be4.appspot.com/o/posts%2FSun%20Aug%2027%202017%2011%3A25%3A17%20GMT%2B0300%20(FLE%20Daylight%20Time)_lambo1.jpg?alt=media&token=11f3fc4c-7a48-4e56-a016-7b511b2eb646'],
      'price': '100000',
      'province': 'Sofia',
      'title': 'Lamborghini',
      'user': [{
        'email': 'krutz@gmail.com',
        'providerId': 'password',
        'uid': 'krutz@gmail.com'
      }],
      'views': 5
    } as Post
  ];

  constructor() { }

  getPosts(): Observable<Post[]> {
      return Observable.of(this.posts);
  }

  getPostsByQuery(query): Observable<Post[]> {
    return Observable.of(this.posts);
  }

  postNewAd() {
    // this.Router.navigate(['/']);
  }

  postEdit() {
    // this.Router.navigate(['/']);
  }

  uploadImage(data) {
    return [];
  }

  getPostById(postId): Observable<Post> {
    return this.post;
  }

  updateViews(postId) {

  }

}
