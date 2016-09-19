import { expect } from 'chai';
import linear, {exists} from './linear';

describe('a new linear sequence', () => {
	it('should start the linear sequence with 1', () => {
		expect(linear('key')).to.equal(1);
	});
});

describe('an existing linear sequence', () => {
	it('should increment the linear sequence', () => {
		expect(linear('key')).to.equal(2);
	});

	it('should not clash with other keys', () => {
		expect(linear('derp')).to.equal(1);
	});
});

describe('checking if a key exists', () => {
	it('should return true if a key exists', () => {
		expect(exists('key')).to.equal(true);
	});

	it('should return false if the key does not exist', () => {
		expect(exists('saturday')).to.equal(false);
	});
});