---
title: webpack-require-from
---

# webpack-require-from <Badge text='v 1.8.1' />

允许为获取动态导入配置路径或 URL 的 webpack 插件。

在运行时控制动态导入的路径/URL

- 支持 webpack 5，4，3，2
- 支持 [web-worker 加载](https://github.com/webpack-contrib/worker-loader)
- 生产环境OK。
- 无依赖。
- 轻量。
- 测试完备。

## 为什么要在运行时更改动态道路的路径？

[require.ensure]:https://webpack.js.org/api/module-methods/#require-ensure
[dynamic import]:https://webpack.js.org/guides/code-splitting/#dynamic-imports

Webpack 允许使用`[require.ensure][require.ensure]`或[dynamic import][dynamic import]`import()`来自动分割和加载代码。当你的主包在浏览器中运行时，模块以“按需”方式获取。

Webpack 根据配置中的`config.output.publicPath`从静态 URL 加载模块(包块)。

有些时候您需要在运行时控制模块(包块)的加载，举个例子：

- 包块(chunks)托管在 CDN 上。
- 不同的环境使用的 URL 来加载静态资源(生产环境，测试环境等)。
- 您的`index`文件来自不同的域名/端口。
- 您需要从不同的域名动态加载预编译文件。
- 您需要从 CDN 加载第三方的 web worker。

## 如何使用？

```js
// webpack.config.js
const WebpackRequireFrom = require("webpack-require-from");
const webpackRequireFromConfig = (module.exports = {
  output: {
    publicPath: "/webpack/"
  },
  plugins: [
    new WebpackRequireFrom({
      // 参见下方配置
    })
  ]
});
```

## 配置

如果没有传入任何配置项，那么该插件将默认使用`[config.output.publicPath](https://webpack.js.org/guides/public-path/#on-the-fly)`。

### `path`

为动态加载模块设置路径。您传入的值将在动态导入代码块时替换`config.output.publicPath`。

举个例子，如果默认的 URL 是`https://localhost`，包名是`0.js`同时配置对象为`{path: "customPath/" }`，那么代码块将从`https://localhost/customPath/0.js`获取。

> **注意：** `path` / `methodName` / `variableName`这三个配置项是互斥的，不可同时使用。

### `variableName`

`variableName`是全局定义的变量，它会在运行时进行计算，`variableName`是变量的名称，带有字符串的值表示路径/URL，它们用于动态导入代码块。

举个例子，如果默认的 URL 是`https://localhost`，包名是`0.js`同时配置对象为`{variableName: "chunkURL" }`，同时`window.chunkURL`将定义为：

```js
window.chunkURL = "https://app.cdn.com/buildXXX/"
```

代码块将从`https://app.cdn.com/buildXXX/0.js`获取。


### `methodName`
























