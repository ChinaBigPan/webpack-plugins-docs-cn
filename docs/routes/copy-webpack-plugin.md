---
title: copy-webpack-plugin
---

# copy-webpack-plugin <Badge text='v 6.0.3' />

将已经存在的单个文件或整个目录复制到构建目录。

## 开始

先安装

```shell
npm install copy-webpack-plugin --save-dev
```

接下来将其加入您的 webpack 配置当中。举例：

**webpack.config.js**

```js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'source', to: 'dest' },
        { from: 'other', to: 'public' },
      ],
    }),
  ],
};
```

:::warning
`webpack-copy-plugin`并不是用来复制构建过程中所生成的文件的；相反，它是复制源码树中已经存在的文件，作为构建过程的一部分而存在。
:::

:::warning
如果你希望`webpack-dev-server`在开发过程中将文件写入输出目录，可以使用`writeToDisk`配置项或是[write-file-webpack-plugin](https://github.com/gajus/write-file-webpack-plugin)强制进行。
:::

## 配置项

**webpack.config.js**

```js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'source', to: 'dest' },
        { from: 'other', to: 'public' },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
};
```

### 模式

