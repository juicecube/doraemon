---
title: typeChecker
toc: menu
---

# typeChecker
检查数据类型。

## 描述
原理是`Object.prototype.toString.call(data)`。

包含以下几个方法：
- isNumber
- isString
- isNull
- isUndefined
- isBoolean
- isArray
- isObject
- isFunction
- isDate
- isRegExp

## 用法
***
```typescript
import { isObject, isArray, isRegExp } from '@mlz/doraemon';

isObject([1]); // false
isArray([1]); // true
isRegExp(/a/g); // true
```