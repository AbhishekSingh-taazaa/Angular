import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from './product/IProduct';

@Pipe({
  name: 'byName'
})
export class ByNamePipe implements PipeTransform {

  transform(value: Iproduct[], args: string): Iproduct[] {
    if(!args)
    {
    return value;
    }
    return value.filter(
      item=>item.Name === args
    );
  }
}
