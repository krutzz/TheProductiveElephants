import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from './../../../shared/models/post';

@Injectable()
export class PostsService {

    constructor(private af: AngularFireDatabase) { }

    getPosts(): Observable<Post[]> {
        return this.af.list('/posts', {
            query: {
                orderByKey: true,
                limitToFirst: 5
            }
        });
    }
}
