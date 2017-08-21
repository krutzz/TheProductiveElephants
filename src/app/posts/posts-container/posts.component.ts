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
  posts: Observable<Post[]>;
  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

}
