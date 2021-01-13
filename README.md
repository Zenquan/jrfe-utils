# jrfe-utils

> 悦跑h5小分队工具

## 编辑文档
使用`npm run docs:build`到FIXDOC.md里，再编辑一下合并到readme里。

- 优点：
1. 强迫写详细的注释
2. 形成文档更加自动化

## 安装

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
