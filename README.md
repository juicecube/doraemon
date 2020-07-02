# doraemon

常用工具函数集合，释放你的 Ctrl C、Ctrl V。

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
        "camel2DashComponentName": false,
        "transformToDefaultImport": false
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

- [x] `getUrlQuery`: 获取url上的参数。
- [ ] `addQueryToUrl`: 向url后面添加参数。
- [ ] `deleteFieldsFromObj`: 从对象中删除元素。
- [ ] `checkPhoneNumber`: 检查手机号是否合法。
- [ ] `isMobile`: 是否是手机环境。
- [ ] `isIos`: 是否是ios。
- [ ] `isWechat`: 是否是微信环境。
- [ ] `numberToCoin`: 数字转换成带逗号的金额。

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

1. 新增方法在src内新增ts文件，在test新增test.ts文件，并写入单测，争取百分百通过率🤪。
2. 从master切换分支开发后推送至远程仓库并提交pull request，需得项目成员评论后即可merge至master。
3. 若是新增了一些utils方法，记得更新docs里的文档，review时记得检查。

## 须知

- docs文档撰写参照[dumi](https://github.com/umijs/dumi)。
- 如有问题或提需求请提[issue](https://github.com/juicecube/doraemon/issues)。
