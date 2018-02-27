import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'llaves',
  pure : false
})
export class LlavesPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];
    for (let key in value){
    keys.push(key);
    }
    return keys;
  }

}
