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

| 名称 | 类型 | 默认 | 描述 |
|:---:|:---:|:---:|:---|
| [from](./copy-webpack-plugin.html#from) | String | undefined | 通配符或我们拷贝文件的路径 |
| [to](./copy-webpack-plugin.html#to) | String | compiler.options.output | 输出路径 |
| [context](./copy-webpack-plugin.html#context) | String | options.context 或 compiler.options.context | 这一项决定了如何解释上面`from`路径|
| [globOptions](./copy-webpack-plugin.html#globOptions) | Object | undefined |通配符模式的配置项，可设置 `ignore`  |
| [toType](./copy-webpack-plugin.html#toType) | String | undefined | 这一项定义了上面`to`的配置项 - 目录、文件或模板 |
| [force](./copy-webpack-plugin.html#force) | Boolean | false | 覆盖已经存在于`compilation.assets`中的文件。(通常由其他插件和加载器添加) |
| [flattern](./copy-webpack-plugin.html#flattern) | Boolean | false | 移除所有的目录引用，仅复制文件名。 |
| [transform](./copy-webpack-plugin.html#transform) | Function | undefined | 允许修改文件内容。|
| [cacheTransform](./copy-webpack-plugin.html#cacheTransform) | Boolean/String/Object | false | 启用`transfrom`缓存。您可以使用`{ cache: { key: 'my-cache-key' } }`来使缓存无效。|
| [transformPath](./copy-webpack-plugin.html#transfromPath) | Function | undefined | 允许修改写入路径 |
| [noErrorOnMissing](./copy-webpack-plugin.html#noErrorOnMissing) | Boolean | false | 丢失文件时不产生错误 |

### from

- 类型：`String`
- 默认：`Undefined`

通配符或我们拷贝文件的路径。通配符支持[快速通配模式语法](https://github.com/mrmlnc/fast-glob#pattern-syntax)，只能为字符串。

> 如果是通配符的话（如 `path\to\file.ext`），不要在 `from` 配置项中直接使用 `\\`。因为在 UNIX 中，反斜杠是路径组件的有效字符，而不是分隔符。在 Windows 中，正斜杠和反斜杠都是分隔符。请用 `/` 代替。

**webpack.config.js**

```js
module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        'relative/path/to/file.ext',
        'relative/path/to/dir',
        path.resolve(__dirname, 'src', 'file.ext'),
        path.resolve(__dirname, 'src', 'dir'),
        '**/*',
        {
          from: '**/*',
        },
        // 如果绝对路径是“通配符”，我们将反斜杠替换为正斜杠，因为在“通配符”中只能使用正斜杠。
        path.posix.join(
          path.resolve(__dirname, 'src').replace(/\\/g, '/'),
          '*.txt'
        ),
      ],
    }),
  ],
};
```

**对于 windows 系统**

如果在 Windows 中将 from 定义为绝对文件路径或绝对文件夹路径，则可以使用 Windows 路径段`\\`。

```js
module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'file.txt'),
        },
      ],
    }),
  ],
};
```

但是您应该始终在通配符表达式中使用正斜杠，请参阅[快速通配符手册](https://github.com/mrmlnc/fast-glob#how-to-write-patterns-on-windows)。

```js
module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          // 如果绝对路径是“通配符”，我们将反斜杠替换为正斜杠，因为在“通配符”中只能使用正斜杠。
          from: path.posix.join(
            path.resolve(__dirname, 'fixtures').replace(/\\/g, '/'),
            '*.txt'
          ),
        },
      ],
    }),
  ],
};
```

`context`根据`from`的类型(通配符、文件或目录)采取不同行为。更多[示例](./copy-webpack-plugin.html#examples)

### to

类型：`String`
默认：`compiler.options.output`

输出的路径。

> 如果是通配符的话（如 `path\to\dest`），不要在 `to` 配置项中直接使用 `\\`。因为在 UNIX 中，反斜杠是路径组件的有效字符，而不是分隔符。在 Windows 中，正斜杠和反斜杠都是分隔符。请用 `/`或`path`方法代替。

**webpack.config.js**

```js
module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '**/*',
          to: 'relative/path/to/dest/',
        },
        {
          from: '**/*',
          to: '/absolute/path/to/dest/',
        },
        {
          from: '**/*',
          to: '[path][name].[contenthash].[ext]',
        },
      ],
    }),
  ],
};
```

### context

类型：`String`
默认：`options.context|compiler.options.context`

这一项决定了如何解释上面`from`路径

> 如果是通配符的话（如 `path\to\context`），不要在 `context` 配置项中直接使用 `\\`。因为在 UNIX 中，反斜杠是路径组件的有效字符，而不是分隔符。在 Windows 中，正斜杠和反斜杠都是分隔符。请用 `/`或`path`方法代替。

**webpack.config.js**

```js
module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/*.txt',
          to: 'dest/',
          context: 'app/',
        },
      ],
    }),
  ],
};
```

`context`配置项可以传入绝对或相对路径。如果`context`是相对路径，那么就会被转换为基于`compiler.options.context`的绝对路径。

此外，`context`表示如何解释搜索结果。进一步讲，它就是干这个的。

若要确定从哪里的资源架构拷贝到目标文件夹，请使用`context`配置项。

如果`from`配置为一个文件，那么`context`就是该文件所在的目录。因此，结果只会是文件名。

如果`from`配置为一个目录，那么`context`和`from`相同也是这个目录。在这种情况下，结果则是相对于指定目录找到的文件夹和文件的层次结构。

如果`from`配置为通配符，那么就会无视`context`配置项，结果也将是`from`中指定的结构。

更多[示例](./copy-webpack-plugin.html#examples)

### globOptions

类型：`对象`
默认：`undefined`

允许配置插件使用的通配模式匹配库。请参阅[所支持配置项项的列表](https://github.com/sindresorhus/globby#options)以从选择中排除文件，您应该使用[globOptions.ignore配置项](https://github.com/mrmlnc/fast-glob#ignore)。

**webpack.config.js**

```js
module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                from: 'public/**/*',
                globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: ['**/file.*', '**/ignored-directory/**'],
                    },
                },
            ],
        }),
    ],
};
```

### toType

类型：`String`
默认：`undefined`

决定`to`配置项是什么 —— 目录、文件或模板。有些时候很难说什么是`to`，举个例子：`path/to/dir-with.ext`。如果你想复制目录中的文件，您需要使用`dir`。我们尝试着自动识别`type`，所以您可能不需要它。

| 名称 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|:---|
| `'dir'` | `{String}` | `undefined` | 如果`to`没有扩展名或是以`/`结尾 |
| `'file'` | `{String}` | `undefined` | 如果`to`既不是目录也不是模板 |
| `'template'` | `{String}` | `undefined` | 如果`to`包含了[模板模式](https://github.com/webpack-contrib/file-loader#placeholders) |

#### `'dir'`

**webpack.config.js**

```js
module.exports = {
    plugins: [
        new CopyPlugin({
        patterns: [
                {
                    from: 'path/to/file.txt',
                    to: 'directory/with/extension.ext',
                    toType: 'dir',
                },
            ],
        }),
    ],
};
```

#### `'file'`

**webpack.config.js**

```js
module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'path/to/file.txt',
                    to: 'file/without/extension',
                    toType: 'file',
                },
            ],
        }),
    ],
};
```

#### `'template'`

**webpack.config.js**

```js
module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                from: 'src/',
                to: 'dest/[name].[hash].[ext]',
                toType: 'template',
                },
            ],
        }),
    ],
};
```

### force

类型：`Boolean`
默认：`false`

覆盖已经存在于`compilation.assets`中的文件。(通常由其他插件和加载器添加)。

**webpack.config.js**

```js
module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/**/*',
                    to: 'dest/',
                    force: true,
                },
            ],
        }),
    ],
};
```

### `flattern`

类型：`Boolean`
默认：`false`

移除所有的目录引用，仅复制文件名。

:::warning
⚠️如果拥有相同名字的文件，那么结果是不确定的。
:::

**webpack.config.js**

```js
module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/**/*',
                    to: 'dest/',
                    flatten: true,
                },
            ],
        }),
    ],
};
```

### transform

类型：`Function`
默认：`undefined`

允许修改文件内容。

**webpack.config.js**

```js
module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    // The `content` argument is a [`Buffer`](https://nodejs.org/api/buffer.html) object, it could be converted to a `String` to be processed using `content.toString()`
                    // The `absoluteFrom` argument is a `String`, it is absolute path from where the file is being copied
                    transform(content, absoluteFrom) {
                        return optimize(content);
                    },
                },
            ],
        }),
    ],
};
```

**webpack.config.js**

```js
module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.png',
                    to: 'dest/',
                    transform(content, path) {
                        return Promise.resolve(optimize(content));
                    },
                },
            ],
        }),
    ],
};
```

### cacheTransform


