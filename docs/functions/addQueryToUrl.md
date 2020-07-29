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

const url = 'https://doraemon.urnotzane.tech';
const query = {
  name: 'doraemon',
  time: 2020,
};
addQueryToUrl(query, url); // https://doraemon.urnotzane.tech?name=doraemon&time=2020
```

## url已经有参数
```typescript
import { addQueryToUrl } from '@mlz/doraemon';

const url = 'https://doraemon.urnotzane.tech?author=urnotzane';
const query = {
  name: 'doraemon',
  time: 2020,
};
addQueryToUrl(query, url); // https://doraemon.urnotzane.tech?author=urnotzane&name=doraemon&time=2020
```

## 缺斤少两用
```typescript
import { addQueryToUrl } from '@mlz/doraemon';

const url = 'https://doraemon.urnotzane.tech';
const query = {
  name: 'doraemon',
  time: 2020,
};
addQueryToUrl(query); // ?name=doraemon&time=2020
addQueryToUrl(query, ''); // ?name=doraemon&time=2020
```