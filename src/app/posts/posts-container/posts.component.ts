import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Post } from '../../shared/models/post';
import { PostsService } from '../providers/posts-service/Posts.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'
  ]
})

export class PostsComponent implements OnInit, OnDestroy {
  offset = 0;
  limit = 5;
  count = 0;
  loadingSpiner: string;
  posts: Post[];
  sub: Subscription;

  postsObservable: Observable<Post[]>;
  constructor(private postsService: PostsService) {
    // tslint:disable-next-line:max-line-length
    this.loadingSpiner = 'https://firebasestorage.googleapis.com/v0/b/nglx-98be4.appspot.com/o/loading.gif?alt=media&token=8a2ffb61-6356-4fbb-89c0-7045f3009832';
  }

  ngOnInit() {
    this.postsObservable = this.postsService.getPosts();
    this.getAll(this.offset, this.limit);
  }

  ngOnDestroy() {
    if (!!this.sub) {
      this.sub.unsubscribe();
    }
  }

  onPageChange(offset: number) {
    this.offset = offset;
    this.getAll(this.offset, this.limit);
  }

  getAll(offset: number, limit: number) {
    this.posts = [];
    if (!!this.sub) {
      this.sub.unsubscribe();
    }

    this.sub = this.postsObservable.subscribe(snapshot => {
      this.count = snapshot.length;
      this.posts = snapshot.slice(offset, offset + limit)
                    .map(v => new Post(v));
    });

  }
}
