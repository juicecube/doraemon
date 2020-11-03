---
title: excelExport
toc: menu
---

# excelExport
通过后端返回的blob数据导出为excel，只支持xlsx
```typescript
import { excelExport } from '@mlz/doraemon';
const debug = {hello: "world"};
const blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
excelExport(blob, '导出数据'); // 导出数据.xlsx
```
