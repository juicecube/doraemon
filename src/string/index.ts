/**
 * 字符 & 字符串
 *
 */

class SuperString {
  /**
   * 字符串的转义
   * @param  {string} str 需转义的字符串
   * @return {string} 转义后的字符串
   *
   * 将`&`, `<`, `>`, `"`, `'`, `©`, `®`, `×`, `÷`转义
   *
   * 使用方法：
   * ```
   * superString.escape('<hello>');  => '&lt;hello&gt;'
   * ```
   */
  escape = (str: string) => {
    if (!str || typeof str !== 'string') {
      throw new SyntaxError('invalid param');
    }
    const symbolMap: CObject = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '©': '&copy;',
      '®': '&reg;',
      '×': '&times;',
      '÷': '&divide;',
    };
    const escapeExpr = /(\&|\<|\>|\"|\'|\©|\®|\×|\÷)/g;
    return `${str}`.replace(escapeExpr, function(match) {
      return symbolMap[match];
    });
  };

  /**
   * 获取url参数
   *
   * @param  {string} url (可选)
   * @return {object} (参数对象)
   *
   * 使用方法：
   * ```
   * superString.parseUrl('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1');  => {ie: "utf-8", f: "8", rsv_bp: "1", rsv_idx: "1"}
   * ```
   */
  parseUrl = (url?: string) => {
    if (typeof url !== 'string') {
      throw new SyntaxError('invalid url');
    }
    const params: CObject = {};
    url = url || window.location.search;
    const paramArr = url.split('?')[1].split('&');
    paramArr.forEach(item => {
      const index = item.indexOf('=');
      const name = item.substr(0, index);
      const value = item.substr(index + 1);
      params[name] = value;
    });
    return params;
  };
}

const string = new SuperString();

export default string;
