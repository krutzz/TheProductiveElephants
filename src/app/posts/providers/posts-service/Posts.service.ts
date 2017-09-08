import 'firebase/storage';

import * as firebase from 'firebase/app';

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
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private Router: Router) {
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

  getPostsByQuery(query): Observable<Post[]> {
    return this.af.list('/posts', {
      query: query
    });
  }

  postNewAd(
    category: string,
    title: string,
    description: string,
    price: number,
    province: string,
    user,
    date,
    files,
    views
  ) {
    const imageUrls = new Array();
    Promise.all(
      this.uploadImage(files)
    )
      .then((images) => {
        this.posts.push({
          images,
          category,
          title,
          description,
          price,
          province,
          user,
          date,
          views
        });
      });
    this.Router.navigate(['/']);
  }

  postEdit(
    category: string,
    title: string,
    description: string,
    price: number,
    province: string,
    user,
    date,
    files,
    id
  ) {
    const imageUrls = new Array();
    Promise.all(
      this.uploadImage(files)
    )
      .then((images) =>
        this.af.object(`posts/${id}`).update({
          images,
          category,
          title,
          description,
          price,
          province,
          user,
          date
        }));
    this.Router.navigate(['/']);
  }

  uploadImage(data) {
    if (!data) {
      return [];
    }
    const promises = new Array;
    for (const item of data) {
      const promise = new Promise((res, rej) => {
        const date = new Date();
        const fileName = `${date.toString()}_${item.name}`;
        const uploadTask = firebase.storage().ref(`/posts/${fileName}`).put(item);
        uploadTask.on('state_changed', function (snapshot) {
        }, function (error) {
          rej(error);
        }, function () {
          const downloadURL = uploadTask.snapshot.downloadURL;
          res(downloadURL);
        });
      });
      promises.push(promise);
    }
    return promises;
  }

  getPostById(postId): Observable<Post> {
    return this.af.object('/posts/' + postId);
  }

  updateViews(postId) {
    this.af.object(`posts/${postId}/views`).$ref
      .ref.transaction(views => {
        if (views === null) {
          return views = 1;
        } else {
          return views + 1;
        }
      });
  }
}
