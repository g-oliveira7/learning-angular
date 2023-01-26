import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): string {
    const values = value.split(' ')
    let result = ''

    for (let i = 0; i < values.length; i++) {
      result += this.capitalize(values[i]) + ' '
    }
    return result.trim();
  }

  capitalize(value: string): string {
    return value.substring(0, 1).toUpperCase() + value.substring(1).toLocaleLowerCase()
  }
}
