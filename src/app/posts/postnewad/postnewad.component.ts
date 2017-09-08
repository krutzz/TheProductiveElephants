import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { Post } from '../../shared/models/post';
import { PostsService } from '../providers/posts-service/Posts.service';

@Component({
  selector: 'app-postnewad',
  templateUrl: './postnewad.component.html',
  styleUrls: ['./postnewad.component.css']
})
export class PostnewadComponent implements OnInit {
  post: Post;
  files: File[];
  urls: string[];
  provinces: string[];
  constructor(private PostsService: PostsService, private AuthService: AuthService) { }

  ngOnInit(): void {
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
