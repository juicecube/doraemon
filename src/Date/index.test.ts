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
// test('Unit test', function(){
//   // date模块测试用例
//   describe('#date.ts', function(){
//     describe('@format()', function(){
//       it('superDate.format(1563256029342) should return 2019-07-16 13:47:09', function(){
//         expect(superDate.format(1563256029342)).to.be.equal('2019-07-16 13:47:09');
//       });
//       it('superDate.format(1563256029342, "yyyy年mm月dd日 HH:MM:ss") should return 2019年07月16日 13:47:09', function(){
//         expect(superDate.format(1563256029342, 'yyyy年mm月dd日 HH:MM:ss')).to.be.equal('2019年07月16日 13:47:09');
//       });
//       it('superDate.format(1563256029342, "yyyy-mm-dd HH:MM:ss ddd") should return 2019年07月16日 13:47:09 周二', function(){
//         expect(superDate.format(1563256029342, 'yyyy年mm月dd日 HH:MM:ss ddd')).to.be.equal('2019年07月16日 13:47:09 周二');
//       });
//       it('superDate.format(1563256029342, "yyyy-mm-dd HH:MM:ss dddd") should return 2019年07月16日 13:47:09 星期二', function(){
//         expect(superDate.format(1563256029342, 'yyyy年mm月dd日 HH:MM:ss dddd')).to.be.equal('2019年07月16日 13:47:09 星期二');
//       });
//       it('superDate.format(1563256029342, "yyyy-mm-dd HH:MM:ss TT dddd", { locale: "en" }) should return 2019-07-16 13:47:09 PM Tuesday', function(){
//         expect(superDate.format(1563256029342, 'yyyy-mm-dd HH:MM:ss TT dddd', { locale: 'en' })).to.be.equal('2019-07-16 13:47:09 PM Tuesday');
//       });
//     });
//   });

// 功能函数模块测试用例
// describe('#performance.ts', function(){
//   function trigger_function(type) {
//     const round = 0;
//     return function(){
//       const num = 0;
//       let timer = null;
//       timer = setInterval(function(){
//         num >= 7 && clearInterval(timer);

//         num += 1;
//       }, 200);
//     }
//   };
//   describe('@debounce()', function(){
//     it('superPerformance.debounce()');
//   });
//   describe('@throttle()', function(){

//   });
// });
