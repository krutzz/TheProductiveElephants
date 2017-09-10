import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Category } from '../../shared/models/category.enum';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../shared/models/post';
import { PostsService } from '../providers/posts-service/Posts.service';
import { Province } from '../../shared/models/province.enum';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  files: File[];
  urls: string[] = [];
  id;
  post: any;
  provinces: string[];
  provincesObj;

  category;
  categoryObj;
  constructor(private route: ActivatedRoute, private postsService:
     PostsService, private AuthService: AuthService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.post = this.postsService.getPostById(this.id);
    this.urls = [];
    this.provincesObj = Object.keys(Province).map(k => Province[k]);
    this.provinces = this.provincesObj.filter(v => typeof v === 'string') as string[];
    this.categoryObj = Object.keys(Category).map(k => Category[k]);
    this.category = this.categoryObj.filter(v => typeof v === 'string') as string[];
  }
  onChange(event) {
    this.files = event.srcElement.files;
    this.post.images = [];
    if (event.target.files) {
      this.urls = [];
      const tFiles = event.target.files;
      const length = tFiles.length;
      for (let i = 0; i < length; i++) {
        if (tFiles[i]) {
          let reader: any;
          reader = new FileReader();
          reader.onload = (ev) => {
            this.urls.push(ev.target.result);
          };
          reader.readAsDataURL(tFiles[i]);
        }
      }
    }
  }

  onSubmitAd(form: NgForm) {
    this.post.category = form.value.category;
    this.post.title = form.value.title;
    this.post.description = form.value.description;
    this.post.price = form.value.price;
    this.post.province = form.value.province;
    const currentuser = this.AuthService.currentUser().providerData;
    const date = new Date().toString();
    this.postsService.postEdit(
      this.post.category,
      this.post.title,
      this.post.description,
      this.post.price,
      this.post.province,
      currentuser,
      date,
      this.files,
      this.id);
  }
}
