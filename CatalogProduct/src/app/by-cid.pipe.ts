import { Pipe, PipeTransform } from '@angular/core';
import { Icategory } from './category/Icategory';

@Pipe({
  name: 'byCid'
})
export class ByCidPipe implements PipeTransform {

  transform(value: Icategory[], args: number): Icategory[]{
    if(!args)
    {
      return value;
    }
    return value.filter(
      item=>item.CId===args
    );
  }
}
