import { Pipe, PipeTransform } from '@angular/core';

import { Post } from '../../../shared/models/post';

@Pipe({
  name: 'newPost'
})
export class NewPostPipe implements PipeTransform {

  transform(value: any, args?: any): Post {
    if (!value) {
      return value;
    }
    return new Post(value);
  }

}
