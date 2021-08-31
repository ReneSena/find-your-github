import { removeSpaceOfString } from './removeSpace';

describe('removeSpaceOfString()', () => {
	test('should to remove all spaces', () => {
		const name = removeSpaceOfString('Jhon Snow');

		expect(name).toEqual('JhonSnow');
	});
})