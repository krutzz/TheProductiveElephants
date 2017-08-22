import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Post } from '../../shared/models/post';
import { PostsService } from '../providers/posts-service/Posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'
  ]
})

export class PostsComponent implements OnInit {
  loadingSpiner: string;
  posts: Observable<Post[]>;
  constructor(private postsService: PostsService) {
    // tslint:disable-next-line:max-line-length
    this.loadingSpiner = 'https://firebasestorage.googleapis.com/v0/b/nglx-98be4.appspot.com/o/loading.gif?alt=media&token=8a2ffb61-6356-4fbb-89c0-7045f3009832';
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

}
