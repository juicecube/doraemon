---
title: sum
nav:
  order: 2
  title: 方法
toc: menu
---

# sum
返回两数相加之和。
***
```typescript
import React from 'react';
import { sum } from '@mlz/doraemon';

export default (props) => {
  return (
    <h1>1 + 2 = {sum(1, 2)}</h1>
  );
};
```