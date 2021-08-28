import { formatDate } from './formatDate';

describe('formatDate()', () => {
	test('should render a format date', () => {
		const date = "Fri Aug 27 2021 21:20:26 GMT-0300 (Brasilia Standard Time)"

		expect(formatDate(date)).toBe('27/08/21');
	})
});