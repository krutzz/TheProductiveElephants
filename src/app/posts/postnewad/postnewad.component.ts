import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { PostsService } from '../providers/posts-service/Posts.service';

@Component({
  selector: 'app-postnewad',
  templateUrl: './postnewad.component.html',
  styleUrls: ['./postnewad.component.css']
})
export class PostnewadComponent implements OnInit {

  files: File[];
  url: string[];
  category: string;
  title: string;
  description: string;
  price: number;
  province: string;
  provinces: string[];
  constructor(private PostsService: PostsService, private AuthService: AuthService) { }

  ngOnInit(): void {
    this.url = [];
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

    if (event.target.files) {
      const tFiles = event.target.files;
      const length = tFiles.length;
      for (let i = 0; i < length; i++) {
        if (tFiles[i]) {
          let reader: any;
          reader = new FileReader();
          reader.onload = (ev) => {
            this.url.push(ev.target.result);
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
    const views = 1;
    this.PostsService.postNewAd(
      this.category,
      this.title,
      this.description,
      this.price,
      this.province,
      currentuser,
      date,
      this.files,
      views);
  }
}
