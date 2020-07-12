export const isNumber = (num:any) => Object.prototype.toString.call(num) === '[object Number]';

export const isString = (num:any) => Object.prototype.toString.call(num) === '[object String]';

export const isNull = (num:any) => Object.prototype.toString.call(num) === '[object Null]';

export const isUndefined = (num:any) => Object.prototype.toString.call(num) === '[object Undefined]';

export const isObject = (num:any) => Object.prototype.toString.call(num) === '[object Object]';

export const isBoolean = (num:any) => Object.prototype.toString.call(num) === '[object Boolean]';

export const isArray = (num:any) => Object.prototype.toString.call(num) === '[object Array]';

export const isFunction = (num:any) => Object.prototype.toString.call(num) === '[object Function]';

export const isDate = (num:any) => Object.prototype.toString.call(num) === '[object Date]';

export const isRegExp = (num:any) => Object.prototype.toString.call(num) === '[object RegExp]';
