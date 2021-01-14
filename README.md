# jrfe-utils

> 悦跑h5小分队工具

## 特性

- 可生成umd/esm等js文件
- 自动部署到npm
- 自动化生成文档
- 自动化部署文档到vercel
- 规范化git commit

## PR

- fork
- contribute
- npm run deploy
- git push
- merge

**加功能时**
- 开新分支 -> feature/A同学/V版本-B功能
- 修改版本号 -> v0.1.0 -> v0.1.1

**commit**
- A: "添加一个新的功能模块"
- M: "更新一个功能模块"
- B: "构建静态资源"
- F: "修复 X 页面的问题"

## 使用

```bash
npm i @jomsou/utils -S
or
yarn add @jomsou/utils -S
```

- 在原生js中使用

```html
<script src="xx/dist/index.aio.js"></script>
<script>
    const { 
      xxx,
      ...
    } = window['jrfe-utils'];
<script>
```

- 在框架中使用

```js
import JrfeUtils from '@jomsou/utils';
const { xxx, ... } = JrfeUtils
or 
import { xxx } from '@jomsou/utils';
```

## 更新日志
[CHANGELOG.md](./CHANGELOG.md)