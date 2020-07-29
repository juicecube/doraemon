---
group:
  title: 方法
  toc: menu
---

# getUrlQuery
返回url参数。
***

## 常用
比如从`location.href`获取参数。
```typescript
import React from 'react';
import { getUrlQuery } from '@mlz/doraemon';

export default (props) => {
  const query = getUrlQuery('https://juicecube.github.io/doraemon?name=doraemon');
  return (
    <h1>{query.name}</h1>
  );
};
```

## 任性用
比如从`location.search`获取参数。
```typescript
import React from 'react';
import { getUrlQuery } from '@mlz/doraemon';

export default (props) => {
  // 聪明的人看得出，区别在这儿
  const query = getUrlQuery('?name=doraemon');
  return (
    <h1>{query.name}</h1>
  );
};
```
