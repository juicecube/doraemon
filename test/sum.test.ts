import { sum } from '../src/sum';

it('1 + 2', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(NaN, NaN)).toBe(0);
  expect(sum()).toBe(0);
});
