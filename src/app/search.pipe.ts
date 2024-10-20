import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    let keyword=args[0];
    return value.filter(a => a.title.toLowerCase().includes(keyword.toLowerCase()) || a.description.toLowerCase().includes(keyword.toLowerCase()))
  }

}
