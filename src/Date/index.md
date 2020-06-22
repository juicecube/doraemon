## superDate

### superDate.format(date:number， rule?:string， options?:Object)

@param {Date} date 待格式化的时间

@param {string} rule 格式化规则

@param {Object} options 高级选项，可以指定 locale，utc

@return {string} 格式化后的字符串

- rule 支持的格式化选项包括:
- 年：yy(97), yyyy(1997)
- 月：m(1), mm(01), mmm(1 月), mmmm(一月)
- 日：d(5), dd(05),
- 小时：h(2), hh(02), H(14), HH(14)，小写是 12 小时制，大写是 24 小时制
- 分：M(3), MM(03),
- 秒：s(8), ss(08)
- 毫秒：l(056), L(56), l 三位，L 两位
- 星期：ddd(周五)，dddd(星期五)
- 时区：Z 或 z (UTC, CST 等)
- 时区 offset：O 或 o (+0800 等)
- options 高级选项:
  {
- utc:boolean (是否取 utc 时间，默认 false)
- locale:'zh'|'en' (用于显示中文还是英文, 默认为 false)
- }

使用方法：

```
superDate.format(timestemp, 'yyyy年mm月dd日 HH:MM:ss')   // 2019年07月16日 15:22:06
superDate.format(timestemp, 'yyyy-mm-dd HH:MM:ss')   // 2019-07-16 15:22:06
superDate.format(timestemp, 'yyyy-mm-dd HH:MM:ss ddd')   // 2019-07-16 15:22:06 周二
superDate.format(1563256029342, 'yyyy-mm-dd HH:MM:ss TT dddd', { locale: 'en' })   // 2019-07-16 13:47:09 PM Tuesday
```
