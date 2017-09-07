import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../shared/models/post';
import { PostsService } from '../providers/posts-service/Posts.service';

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
  constructor(private route: ActivatedRoute, private postsService: PostsService, private AuthService: AuthService) { }
  provinces: string[] = [
    'Blagoevgrad',
    'Burgas',
    'Varna',
    'Veliko Tarnovo',
    'Vidin',
    'Vratsa',
    'Gabrovo',
    'Dobrich',
    'Kardzhali',
    'Kyustendil',
    'Lovech',
    'Montana',
    'Pazardzhik',
    'Pernik',
    'Pleven',
    'Plovdiv',
    'Pazgrad',
    'Ruse',
    'Silistra',
    'Sliven',
    'Smolyan',
    'Sofia',
    'Stara Zagora',
    'Targovishte',
    'Haskovo',
    'Shumen',
    'Yambol'
  ];
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.post = this.postsService.getPostById(this.id);
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
    const category = form.value.category;
    const title = form.value.title;
    const description = form.value.description;
    const price = form.value.price;
    const province = form.value.province;
    const currentuser = this.AuthService.currentUser().providerData;
    const date = new Date().toString();
    const seen = 1;
    this.postsService.postEdit(
      category,
      title,
      description,
      price,
      province,
      currentuser,
      date,
      this.files,
      seen,
      this.id);
  }
}
