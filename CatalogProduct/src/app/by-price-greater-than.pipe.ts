import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from './product/IProduct';

@Pipe({
  name: 'byPriceGreaterThan'
})
export class ByPriceGreaterThanPipe implements PipeTransform {

  transform(value: Iproduct[], args: number): Iproduct[] {
    if(!args)
    {
    return value;
    }
    return value.filter(
      item=>item.SellingPrice>args
    );
  }
}
