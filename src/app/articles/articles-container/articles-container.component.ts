import { Component, OnInit } from '@angular/core';

import { Article } from './../../shared/models/article';
import { ArticlesService } from '../providers/articles/articles.service';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.css']
})
export class ArticlesContainerComponent implements OnInit {

  count = 0;

  articles: Article[] = [];

  slideArticles: Article[] = [];

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe((snapshot) => {
      this.count = snapshot.length;
      this.articles = snapshot;
      this.initSlides();
    });
  }

  initSlides() {
    for (let i = 0; i < 3; i++) {
      const rnd = Math.floor(Math.random() * this.count);
      this.slideArticles.push(this.articles[rnd]);
    }
  }

  onSlideChange(event) {
    const prev = +event.prev.substring(10);
    const rnd = Math.floor(Math.random() * this.count);

    this.slideArticles[prev] = this.articles[rnd];
  }

}
