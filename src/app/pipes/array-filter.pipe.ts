import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: string[], filter: string): string[] {
    if (value.length === 0 || filter === undefined) {
      return value;
    }

    filter = filter.toLocaleLowerCase()
    return value.filter(v => v.toLocaleLowerCase().indexOf(filter) != -1)
  }
}
