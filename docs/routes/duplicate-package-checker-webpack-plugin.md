---
title: duplicate-package-checker-webpack-plugin
---

# duplicate-package-checker-webpack-plugin <Badge text='v 3.0.0' />

当你的打包文件中含有多个版本的同一个依赖包时发出警告。

<img style='verticalAlign: middle; display:block; margin: 0 auto;' src='/webpack-plugins-docs-cn/images/duplicate-checker-pic.png' />

## 为什么要用它？

由于一个依赖包的多个版本可能会被 webpack 多次打包。这种情况发生的时候可能没有任何警告，从而导致您的包体积增加，并可能导致一些难以发现的错误。

该插件会自动提醒你这些情况，从而尽可能减少包的体积，避免因意外的重复打包而造成的错误。

## 安装

Webpack 3.X

```shell
npm install duplicate-package-checker-webpack-plugin@^2.1.0 --save-dev
```

Webpack 4.x

```shell
npm install duplicate-package-checker-webpack-plugin --save-dev
```

## 配置

向 webpack 配置中添加插件：

```js
var DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

module.exports = {
  plugins: [new DuplicatePackageCheckerPlugin()]
};
```

您还可以传入一个对象：

```js
new DuplicatePackageCheckerPlugin({
  // 显示需要重复依赖包的模块（默认值：false）
  verbose: true,
  // 发出错误而不是警告(默认值：false)
  emitError: true,
  // 如果发现重复的依赖包则展示帮助信息(默认值：true)
  showHelp: false,
  // 如果主要版本不同，也会发出警告 (默认值：true)
  strict: false,
  /**
   * 从结果中排除依赖包的实例。
   * 如果一个包的所有实例都被排除，或者除了一个实例之外的所有实例都被排除，那么这个包就不再被认为是重复的，并且不会发出警告/错误。
   * @param {Object} instance
   * @param {string} instance.name 依赖包名称
   * @param {string} instance.version 依赖包版本
   * @param {string} instance.path 依赖包的绝对路径
   * @param {?string} instance.issuer 请求依赖包的模块的绝对路径
   * @returns {boolean} true 表示排除该实例，否则为false
   */
  exclude(instance) {
    return instance.name === "fbjs";
  }
});
```

## 严格模式

当 bundle 中存在多个主版本(如v1.0.0 vs v2.0.0)的包时，在严格模式下会发出警告。

## 解析包中的重复依赖



