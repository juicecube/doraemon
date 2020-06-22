// 字符串模块测试用例
import superString from './index';

test('superString', () => {
  expect(
    superString.escape('dsf&dsfa<dfaf>dfsaf"fdsa©dfsdaf®sfdfsda×dsfsf÷fwefwe'),
  ).toEqual(
    'dsf&amp;dsfa&lt;dfaf&gt;dfsaf&quot;fdsa&copy;dfsdaf&reg;sfdfsda&times;dsfsf&divide;fwefwe',
  );
});
