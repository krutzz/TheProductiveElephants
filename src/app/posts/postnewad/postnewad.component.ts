import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { PostsService } from '../providers/posts-service/Posts.service';

@Component({
  selector: 'app-postnewad',
  templateUrl: './postnewad.component.html',
  styleUrls: ['./postnewad.component.css']
})
export class PostnewadComponent {
  files: File[];
  url: string[] = [];
  constructor(private PostsService: PostsService, private AuthService: AuthService) { }
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
  onChange(event) {
    this.files = event.srcElement.files;

    if (event.target.files) {
      console.log(event.target.files);
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
    const category = form.value.category;
    const title = form.value.title;
    const description = form.value.description;
    const price = form.value.price;
    const province = form.value.province;
    const currentuser = this.AuthService.currentUser().providerData;
    const date = new Date().toString();
    const seen = 1;
    this.PostsService.postNewAd(
      category,
      title,
      description,
      price,
      province,
      currentuser,
      date,
      this.files,
      seen);
  }
}
