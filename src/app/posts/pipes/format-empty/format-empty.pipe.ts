import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatEmpty'
})
export class FormatEmptyPipe implements PipeTransform {

  transform(value: string, defaultValue: any): any {

    if (!value || value.length === 0) {
      return defaultValue ? defaultValue : 0;
    }
    return value;
  }

}
