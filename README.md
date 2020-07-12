# doraemon

常用工具函数集合，释放你的 Ctrl C、Ctrl V。

[![](https://img.shields.io/github/workflow/status/juicecube/doraemon/npm-publish?style=flat-square&logo=github)](https://travis-ci.org/juicecube/doraemon)
[![](https://img.shields.io/codecov/c/gh/juicecube/doraemon/master?style=flat-square&logo=codecov)](https://codecov.io/gh/juicecube/doraemon/branch/master)
[![](https://img.shields.io/bundlephobia/min/@mlz/doraemon?style=flat-square&logo=npm)](https://www.npmjs.com/package/@mlz/doraemon)
[![](https://img.shields.io/github/license/juicecube/doraemon?style=flat-square&logo=github)](https://github.com/juicecube/doraemon/blob/feat-badge/LICENSE)
[![](https://img.shields.io/badge/website-Doraemon-brightgreen?style=flat-square&logo=github)](https://doraemon.urnotzane.tech)

## 使用

### 安装
```bash
npm i @cmao/doraemon
```

### 按需引入

1. 安装babel-plugin-import
  ```bash
  npm i -D babel-plugin-import
  ```

2. .babelrc
  ```json
  {
    "plugins": [
      ["import", {
        "libraryName": "@cmao/doraemon",
        "camel2DashComponentName": false
      }]
    ]
  }
  ```
3. 引入（省略前两步时就不是按需引入了）
  ```typescript
  import { getUrlQuery } from '@cmao/doraemon';

  getUrlQuery('https://doraemon.urnotzane.tech?name=doraemon');
  ```
4. 若不想安装babel-plugin-import，又想按需引入：
  ```typescript
  import getUrlQuery from '@cmao/doraemon/lib/getUrlQuery';

  getUrlQuery('https://doraemon.urnotzane.tech?name=doraemon');
  ```

更多使用文档详看[Doraemon](https://doraemon.urnotzane.tech)。

## TODO
[TODO](https://github.com/juicecube/doraemon/issues/7);

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
git checkout master
npm run release
```

## 贡献

1. 新增方法在src内新增ts文件，在test新增test.ts文件，并写入单测，争取百分百通过率🤪。
2. 从master切换分支开发后推送至远程仓库并提交pull request，需得项目成员评论后即可merge至master。
3. 若是新增了一些utils方法，记得更新docs里的文档，review时记得检查。
4. 每一个方法都要`export default`。

## 须知

- docs文档撰写参照[dumi](https://github.com/umijs/dumi)。
- 如有问题或提需求请提[issue](https://github.com/juicecube/doraemon/issues)。
