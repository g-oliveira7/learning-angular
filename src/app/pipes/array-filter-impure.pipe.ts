import { ArrayFilterPipe } from './array-filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilterImpure',
  pure: false
})
export class ArrayFilterImpurePipe extends ArrayFilterPipe {

}
