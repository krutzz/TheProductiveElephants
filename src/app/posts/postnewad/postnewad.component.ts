import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostsService } from '../providers/posts-service/Posts.service';

@Component({
  selector: 'app-postnewad',
  templateUrl: './postnewad.component.html',
  styleUrls: ['./postnewad.component.css']
})
export class PostnewadComponent {

  constructor(private PostsService: PostsService) { }
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

  onSubmitAd(form: NgForm) {
    const category = form.value.category;
    const title = form.value.title;
    const description = form.value.description;
    const price = form.value.price;
    const province = form.value.province;
    const images = form.value.images;

    this.PostsService.postNewAd(category,
      title,
      description,
      price,
      province);
  }
}
