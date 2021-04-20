import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from './product/IProduct';

@Pipe({
  name: 'byId'
})
export class ByIdPipe implements PipeTransform {

  transform(value: Iproduct[], args: number): Iproduct[] {
    if(!args)
    {
    return value;
    }
    return value.filter(
      item=>item.Id===args
    );
  }


}
