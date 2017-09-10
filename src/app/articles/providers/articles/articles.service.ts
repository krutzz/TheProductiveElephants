import { AngularFireDatabase } from 'angularfire2/database';
import { Article } from '../../../shared/models/article';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticlesService {

  constructor(private af: AngularFireDatabase) { }

  getArticles(): Observable<Article[]> {
    return this.af.list('/articles', {
      query: {
        orderByKey: true
      }
    });
  }
}
