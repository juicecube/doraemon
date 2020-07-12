export const isNumber = (data:any) => Object.prototype.toString.call(data) === '[object Number]';

export const isString = (data:any) => Object.prototype.toString.call(data) === '[object String]';

export const isNull = (data:any) => Object.prototype.toString.call(data) === '[object Null]';

export const isUndefined = (data:any) => Object.prototype.toString.call(data) === '[object Undefined]';

export const isObject = (data:any) => Object.prototype.toString.call(data) === '[object Object]';

export const isBoolean = (data:any) => Object.prototype.toString.call(data) === '[object Boolean]';

export const isArray = (data:any) => Object.prototype.toString.call(data) === '[object Array]';

export const isFunction = (data:any) => Object.prototype.toString.call(data) === '[object Function]';

export const isDate = (data:any) => Object.prototype.toString.call(data) === '[object Date]';

export const isRegExp = (data:any) => Object.prototype.toString.call(data) === '[object RegExp]';
