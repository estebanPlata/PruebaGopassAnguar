import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, userAuthor: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (userAuthor && item.title.toString().toLowerCase().indexOf(userAuthor.toLowerCase()) === -1) {
          return false;
        }
        return true;
      });
    } else {
      return items;
    }
  }
}
/* userSearch.length */
