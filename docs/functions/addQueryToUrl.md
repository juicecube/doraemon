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