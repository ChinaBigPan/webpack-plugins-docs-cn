---
title: offline-plugin
---

# offline-plugin

[插件的GitHub](https://github.com/NekR/offline-plugin)

<img width="150" style='verticalAlign: middle; display:block; margin: 0 auto;' src='/webpack-plugins-docs-cn/images/offline_plugin_logo.png' />

本插件旨在为`webpack`项目提供离线体验。它利用了`ServiceWorker`和`AppCache`作为后台备份。只需要在您的`webpack.config.js`中引入这个插件，并在客户端脚本中包含相应的`runtime(运行时)`。通过缓存所有(或部分) `webpack`输出的静态资源，您的项目就可以离线了。

## 安装

```bash
npm install offline-plugin [--save-dev]
```

## 设置

首先，在您的`webpack.config.js`中实例化插件。

```js
var OfflinePlugin = require('offline-plugin');

module.exports = {
  // ...

  plugins: [
    // ... 其他插件
    // OfflinePlugin 是最后一个添加的比较好
    new OfflinePlugin()
  ]
  // ...
}
```

然后，将`运行时(runtime)`添加到入口文件(通常是主入口)：

```js
require('offline-plugin/runtime').install();
```

ES6/Babel/TypeScript

```ts
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();
```

下面示例展示如何设置配置项(TypeScript)：

```ts
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install({
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => location.reload(),
});
```

如果你需要手动解决`TypeScript`定义文件，那么你可以添加这一行到你的`ts`文件:

```ts
/// <reference path="node_modules/offline-plugin/runtime.d.ts" />
```

## 文档

### 配置项(options)

这些配置项都是可选的，[这里是默认设置](https://github.com/NekR/offline-plugin/blob/master/src/default-options.js)

