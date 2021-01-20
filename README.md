# jrfe-utils

> 悦跑h5小分队工具库

## 背景
虽然团队开发过程中，有了dubo-cli脚手架，已经有了一些内置的常用函数，但是在业务开发中，还是会遇到缺少经常使用的函数这种问题，所以为了代码复用，提高团队开发效率，避免重复写函数，就有了开发公共工具库库的想法。

好处：

- 有利于代码复用，提高团队开发效率
- 有利于提高团队规范化
- 有利于团队沉淀
## 特性

- 自动部署到npm
- 自动化生成文档
- 自动化部署文档到vercel
- 规范化git commit
- 规范化注释
- 可生成umd/esm等js文件
- 详细的使用案例
- 详细的测试代码

## PR

- fork
- contribute
- npm run deploy
- git push
- merge

**加功能时**
- 开新分支 -> V版本-B功能 or feature/A同学/V版本-B功能
- 修改版本号 -> v0.1.0 -> v0.1.1

**commit**
- A: "添加一个新的功能模块"
- M: "更新一个功能模块"
- B: "构建静态资源"
- F: "修复 X 页面的问题"

**script**
```json
{
  // 由代码中注释生成markdown文档
  "docs:jsdoc2md": "rimraf docs/pages/folder1/api.md && npx jsdoc2md src/* >> docs/pages/folder1/api.md", 
  // 由代码中注释生成markdown文档，并且生成vuepress静态资源文件
  "docs:build": "npm run docs:jsdoc2md && npx vuepress build docs",
  // 由代码中注释生成markdown文档, 并在本地运行vuepress 
  "docs:dev": "npm run docs:jsdoc2md && npx vuepress dev docs", 
  // 打包生成代码和文档
  "deploy": "npm run build && npm run docs:build", 
}
```

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
[CHANGELOG.md](./docs/pages/folder1/CHANGELOG.md)