import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../auth/auth.service';
import { Category } from '../../shared/models/category.enum';
import { NgForm } from '@angular/forms';
import { PostNew } from '../../shared/models/post-new';
import { PostsService } from '../providers/posts-service/Posts.service';
import { Province } from '../../shared/models/province.enum';

@Component({
  selector: 'app-postnewad',
  templateUrl: './postnewad.component.html',
  styleUrls: ['./postnewad.component.css']
})
export class PostnewadComponent implements OnInit {
  post: PostNew;
  files: File[];
  urls: string[];
  provinces;
  provincesObj;
  category;
  categoryObj;

  constructor(private PostsService: PostsService, private AuthService: AuthService) { }

  ngOnInit(): void {
    console.log(Province);
    this.provincesObj = Object.keys(Province).map(k => Province[k]);
    this.provinces = this.provincesObj.filter(v => typeof v === 'string') as string[];
    this.categoryObj = Object.keys(Category).map(k => Category[k]);
    this.category = this.categoryObj.filter(v => typeof v === 'string') as string[];
    this.urls = [];
    this.post = new PostNew();
  }

  getValues<T extends number>(e: any) {
    return this.getObjValues(e).filter(v => typeof v === 'number') as T[];
}

   private getObjValues(e: any): (number | string)[] {
    return Object.keys(e).map(k => e[k]);
  }
  onChange(event) {
    this.files = event.srcElement.files;
    this.urls = [];
    if (event.target.files) {
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
    const currentuser = this.AuthService.currentUser().providerData;
    const date = new Date().toString();
    const views = 1;
    this.PostsService.postNewAd(
      this.post.category,
      this.post.title,
      this.post.description,
      this.post.price,
      this.post.province,
      currentuser,
      date,
      this.files,
      views);
  }
}
