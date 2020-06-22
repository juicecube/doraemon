// 字符串模块测试用例
import superString from './index';

test('superString', () => {
  expect(
    superString.escape('dsf&dsfa<dfaf>dfsaf"fdsa©dfsdaf®sfdfsda×dsfsf÷fwefwe'),
  ).toEqual(
    'dsf&amp;dsfa&lt;dfaf&gt;dfsaf&quot;fdsa&copy;dfsdaf&reg;sfdfsda&times;dsfsf&divide;fwefwe',
  );
});
// describe('#string', function(){
//   // 字符串的转义方法test
//   describe('@escape()', function(){
//     it('superString.escape(dsf&dsfa<dfaf>dfsaf"fdsa©dfsdaf®sfdfsda×dsfsf÷fwefwe) should return dsf&amp;dsfa&lt;dfaf&gt;dfsaf&quot;fdsa&copy;dfsdaf&reg;sfdfsda&times;dsfsf&divide;fwefwe', function(){
//       expect(superString.escape('dsf&dsfa<dfaf>dfsaf"fdsa©dfsdaf®sfdfsda×dsfsf÷fwefwe')).to.be.equal('dsf&amp;dsfa&lt;dfaf&gt;dfsaf&quot;fdsa&copy;dfsdaf&reg;sfdfsda&times;dsfsf&divide;fwefwe');
//     });
//   });

//   // 获取url参数方法test
//   describe('@parseUrl()', function(){
//     const rightReturnValue = {
//       ie: 'utf-8',
//       f: '8',
//       // eslint-disable-next-line @typescript-eslint/camelcase
//       rsv_bp: '1',
//       // eslint-disable-next-line @typescript-eslint/camelcase
//       rsv_idx: '1',
//     };
//     it('superString.parseUrl(https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1) should return {...}', function(){
//       expect(superString.parseUrl('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1')).to.be.an('object');
//       expect(JSON.stringify(superString.parseUrl('https://ww.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1'))).to.be.equal(JSON.stringify(rightReturnValue));
//     });
