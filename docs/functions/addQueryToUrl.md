---
title: addQueryToUrl
toc: menu
---

# addQueryToUrl
向url添加参数。
***

## 常用
```typescript
import { addQueryToUrl } from '@mlz/doraemon';

const url = 'https://da.ithen.cn';
const query = {
  name: 'doraemon',
  time: 2020,
};
addQueryToUrl(query, url); // https://da.ithen.cn?name=doraemon&time=2020
```

## url已经有参数
```typescript
import { addQueryToUrl } from '@mlz/doraemon';

const url = 'https://da.ithen.cn?author=urnotzane';
const query = {
  name: 'doraemon',
  time: 2020,
};
addQueryToUrl(query, url); // https://da.ithen.cn?author=urnotzane&name=doraemon&time=2020
```

## 缺斤少两用
```typescript
import { addQueryToUrl } from '@mlz/doraemon';

const url = 'https://da.ithen.cn';
const query = {
  name: 'doraemon',
  time: 2020,
};
addQueryToUrl(query); // ?name=doraemon&time=2020
addQueryToUrl(query, ''); // ?name=doraemon&time=2020
```

## 如果参数是个url
那么需要将参数值转义后再加到url上，因为url上有参数的话，我们无法区分这个参数的结束位置是哪里。
```typescript
import { addQueryToUrl } from '@mlz/doraemon';

const url = 'https://da.ithen.cn';
const query = {
  name: 'doraemon',
  time: 2020,
  url: encodeURIComponent('https://da.ithen.cn?name=哆啦A梦'),
};
addQueryToUrl(query); // ?name=doraemon&time=2020&https%3A%2F%2Fda.ithen.cn%3Fname%3D%E5%93%86%E5%95%A6A%E6%A2%A6
addQueryToUrl(query, ''); // ?name=doraemon&time=2020&https%3A%2F%2Fda.ithen.cn%3Fname%3D%E5%93%86%E5%95%A6A%E6%A2%A6
```