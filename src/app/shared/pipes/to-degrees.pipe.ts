import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDegrees'
})
export class ToDegreesPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    const valueAux = Math.round(value).toString() + '°';
    return valueAux;
  }

}
