import { doraemaon } from '../src/index';

test('Doraemon index', () => {
  expect(doraemaon).toEqual({
    getUrlQuery: expect.any(Function),
    sum: expect.any(Function),
  });
});
