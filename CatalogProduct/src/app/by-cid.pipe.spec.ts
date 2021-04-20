import { ByCidPipe } from './by-cid.pipe';

describe('ByCidPipe', () => {
  it('create an instance', () => {
    const pipe = new ByCidPipe();
    expect(pipe).toBeTruthy();
  });
});
