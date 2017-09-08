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
  category: string;
  title: string;
  description: string;
  price: number;
  province: string;
  provinces: string[];
  constructor(private route: ActivatedRoute, private postsService: PostsService, private AuthService: AuthService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.post = this.postsService.getPostById(this.id);
    this.urls = [];
    this.provinces = [
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
    this.category = form.value.category;
    this.title = form.value.title;
    this.description = form.value.description;
    this.price = form.value.price;
    this.province = form.value.province;
    const currentuser = this.AuthService.currentUser().providerData;
    const date = new Date().toString();
    this.postsService.postEdit(
      this.category,
      this.title,
      this.description,
      this.price,
      this.province,
      currentuser,
      date,
      this.files,
      this.id);
  }
}
