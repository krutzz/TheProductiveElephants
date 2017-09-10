import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Post } from '../../shared/models/post';
import { PostsService } from '../providers/posts-service/Posts.service';

@Component({
  selector: 'app-mostpoluar',
  templateUrl: './mostpoluar.component.html',
  styleUrls: ['./mostpoluar.component.css']
})
export class MostpoluarComponent implements OnInit {

  loadingSpiner;

  posts: Post[];

  constructor(private postsService: PostsService) {
    // tslint:disable-next-line:max-line-length
    this.loadingSpiner = 'https://firebasestorage.googleapis.com/v0/b/nglx-98be4.appspot.com/o/loading.gif?alt=media&token=8a2ffb61-6356-4fbb-89c0-7045f3009832';
  }

  ngOnInit() {
    this.postsService.getPostsByQuery({
      orderByChild: 'views',
      limitToLast: 5,
    }).subscribe((snapshot) => {
      this.posts = snapshot.reverse();
    });
  }
}
