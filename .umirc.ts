import { defineConfig } from 'dumi';

const logo = 'https://raw.githubusercontent.com/juicecube/doraemon/master/logo.svg';
export default defineConfig({
  title: 'doraemon',
  description: '项目常用工具函数集合，释放你的 Ctrl C、Ctrl V',
  favicon: logo,
  logo: logo,
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
});
