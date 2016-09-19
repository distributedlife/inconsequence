import { expect } from 'chai';
import fibonacci from './fibonacci';

describe('a new fibonacci sequence', () => {
  it('should start the fibonacci sequence with 1', () => {
    expect(fibonacci('key')).to.equal(1);
  });
});

describe('an existing fibonacci sequence', () => {
  it('should increment the fibonacci sequence', () => {
    expect(fibonacci('key')).to.equal(1);
    expect(fibonacci('key')).to.equal(2);
    expect(fibonacci('key')).to.equal(3);
    expect(fibonacci('key')).to.equal(5);
    expect(fibonacci('key')).to.equal(8);
    expect(fibonacci('key')).to.equal(13);
  });

  it('should not clash with other keys', () => {
    expect(fibonacci('derp')).to.equal(1);
  });
});