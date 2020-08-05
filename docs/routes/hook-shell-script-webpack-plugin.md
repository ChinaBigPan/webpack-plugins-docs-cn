---
title: hook-shell-script-webpack-plugin
---

# hook-shell-script-webpack-plugin <Badge text="v 0.1.1" />

用于在 webpack 编译器钩子被触发时运行任意的 shell 脚本。

## 安装

```shell
npm install --save-dev hook-shell-script-webpack-plugin
# 或
yarn add --dev hook-shell-script-webpack-plugin
```

## 使用

```js
// webpack.config.js
const webpack = require('webpack');
const HookShellScriptPlugin = require('hook-shell-script-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HookShellScriptPlugin({
      afterEmit: ['npx tsc --emitDeclarationOnly']
      // ...
    })
  ]
};
```


























