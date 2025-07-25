import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lookup'
})
export class LookupPipe implements PipeTransform {
  
 transform<T>(value: any, list: T[], key: keyof T, display: keyof T): any {
    const found = list.find(item => item[key] === value);
    return found ? found[display] : value;
  }
}
