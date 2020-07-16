---
title: deleteFieldsFromObj
toc: menu
---

# deleteFieldsFromObj
删除目标对象的目标字段。
```typescript
import { deleteFieldsFromObj } from '@mlz/doraemon';

deleteFieldsFromObj([1], [0]); // {}
deleteFieldsFromObj({}, ['a']); // {}
deleteFieldsFromObj({
    a: 1,
    b: '2',
    c: null,
    d: undefined,
  }, ['a', 'c']); // { b: '2', d: undefined }
```
