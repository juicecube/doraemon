// eslint-disable-next-line import/order
import superDate from './index';
// import superPerformance from '../src/performance';

test('superDate', () => {
  expect(superDate.format(1563256029342)).toEqual('2019-07-16 13:47:09');
  expect(superDate.format(1563256029342, 'yyyy年mm月dd日 HH:MM:ss')).toEqual(
    '2019年07月16日 13:47:09',
  );
  expect(
    superDate.format(1563256029342, 'yyyy年mm月dd日 HH:MM:ss ddd'),
  ).toEqual('2019年07月16日 13:47:09 周二');
  expect(
    superDate.format(1563256029342, 'yyyy年mm月dd日 HH:MM:ss dddd'),
  ).toEqual('2019年07月16日 13:47:09 星期二');
});
