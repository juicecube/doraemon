# doraemon

常用工具函数集合，释放你的 Ctrl C、Ctrl V。

## 使用

### 安装
```bash
npm i @cmao/doraemon
```

### 使用
```typescript
import { getUrlQuery } from '@cmao/doraemon';

getUrlQuery('https://doraemon.urnotzane.tech?name=doraemon');
```
更多使用文档详看[Doraemon](https://doraemon.urnotzane.tech)。

## 开发

安装依赖

```bash
npm i
```

文档预览

```bash
npm start
```

构建项目

```bash
npm run build
```

项目发布

```bash
npm run publish
```

## 贡献

1. 从master切换分支开发后推送至远程仓库并提交pull request，需得项目成员评论后即可merge至master。
2. 若是新增了一些utils方法，记得更新docs里的文档，review时记得检查。

## 须知

- docs文档撰写参照[dumi](https://github.com/umijs/dumi)。
- 如有问题或提需求请提[issue](https://github.com/juicecube/doraemon/issues)。
