/** 获取url参数 */
export const getUrlQuery = (url?: string) => {
  const result = {} as any;
  // 不是string
  if (typeof url !== 'string') {
    return result;
  }
  const start = url.indexOf('?');
  // 没有参数
  if (start === -1) {
    return result;
  }
  // 有?号没参数
  if (start === url.length - 1) {
    return result;
  }
  const queryStr = url.substring(start + 1);
  queryStr.split('&').forEach(item => {
    const equalIndex = item.indexOf('=');
    if (equalIndex > -1) {
      result[item.substring(0, equalIndex)] = item.substring(equalIndex + 1);
    }
  });
  return result;
};
