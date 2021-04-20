import { ByPriceEqualToPipe } from './by-price-equal-to.pipe';

describe('ByPriceEqualToPipe', () => {
  it('create an instance', () => {
    const pipe = new ByPriceEqualToPipe();
    expect(pipe).toBeTruthy();
  });
});
