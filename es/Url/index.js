'use strict';

exports.__esModule = true;
exports.getUrlQuery = void 0;
/** 获取url参数 */

exports.getUrlQuery = function(url) {
  var result = {}; // 不是string

  if (typeof url !== 'string') {
    return result;
  }

  var start = url.indexOf('?'); // 没有参数

  if (start === -1) {
    return result;
  } // 有?号没参数

  if (start === url.length - 1) {
    return result;
  }

  var queryStr = url.substring(start + 1);
  queryStr.split('&').forEach(function(item) {
    var equalIndex = item.indexOf('=');

    if (equalIndex > -1) {
      result[item.substring(0, equalIndex)] = item.substring(equalIndex + 1);
    }
  });
  return result;
};
