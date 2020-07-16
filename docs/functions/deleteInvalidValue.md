---
title: deleteInvalidValue
toc: menu
---

# deleteInvalidValue
删除目标对象的无效值如`null`|`undefined`。
```typescript
import { deleteInvalidValue } from '@mlz/doraemon';

deleteFieldsFromObj({}); // {}
deleteFieldsFromObj([]); // []
deleteFieldsFromObj(['a']); // ['a']
deleteFieldsFromObj({ a: NaN, b: 2, c: null, d: undefined }); // { b: 2 }
```
