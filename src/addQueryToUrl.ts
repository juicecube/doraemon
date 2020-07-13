import { IObject } from './global';
import _ from 'lodash';

/** 向url字符串追加参数 */
export function addQueryToUrl(query:IObject, url?:string):string {
  if (url) {
    if (!_.isString(url)) {
      console.warn('url is not a string');
      return '';
    }
  } else {
    url = '';
  }
  if (!query || !_.isPlainObject(query)) {
    console.warn('`query` is not an object!');
    return url;
  }
  const startIndex = url.indexOf('?');
  const lastIndex = url.length - 1;
  /**
   * - 如果没有？号
   * - 如果有？号且不是最后一个字符串
   */
  if (startIndex === -1) {
    url += '?';
  } else if (startIndex !== lastIndex && url.lastIndexOf('&') !== lastIndex) {
    url += '&';
  }
  for (const key in query) {
    const value = query[key];
    if (!_.isUndefined(value) && !_.isNull(value)) {
      url += `${key}=${query[key]}&`;
    }
  }
  // 去掉最后一个&
  url = url.substring(0, url.length - 1);
  return url;
}

export default addQueryToUrl;
