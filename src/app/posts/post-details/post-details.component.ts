import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../shared/models/post';
import { PostsService } from '../providers/posts-service/Posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  id;
  post: Observable<any>;
  currentUser;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private Router: Router,
  private AuthService: AuthService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.post = this.postsService.getPostById(this.id);
    this.postsService.updateViews(this.id);
    this.currentUser = this.AuthService.currentUser();
  }

  edit() {
    this.Router.navigate([`posts/edit/${this.id}`]);
  }
}
