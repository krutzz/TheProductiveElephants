import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../providers/posts-service/Posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id;
  post;
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.post = this.postsService.getPostById(this.id);
  }

}
