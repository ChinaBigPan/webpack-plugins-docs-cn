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
  // Also show module that is requiring each duplicate package (default: false)
  verbose: true,
  // Emit errors instead of warnings (default: false)
  emitError: true,
  // Show help message if duplicate packages are found (default: true)
  showHelp: false,
  // Warn also if major versions differ (default: true)
  strict: false,
  /**
   * Exclude instances of packages from the results.
   * If all instances of a package are excluded, or all instances except one,
   * then the package is no longer considered duplicated and won't be emitted as a warning/error.
   * @param {Object} instance
   * @param {string} instance.name The name of the package
   * @param {string} instance.version The version of the package
   * @param {string} instance.path Absolute path to the package
   * @param {?string} instance.issuer Absolute path to the module that requested the package
   * @returns {boolean} true to exclude the instance, false otherwise
   */
  exclude(instance) {
    return instance.name === "fbjs";
  }
});
```

## 严格模式

## 解析包中的重复依赖



