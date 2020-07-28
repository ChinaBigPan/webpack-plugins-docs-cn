---
title: imagemin-webpack-plugin
---

# imagemin-webpack-plugin <Badge text='v 2.4.2' />

[imagemin]:https://github.com/imagemin/imagemin

使用[imagemin][imagemin]压缩项目中图片的插件。

## 安装

```shell
npm install imagemin-webpack-plugin
```

::: warning 注意
需要 node 版本 >= 4.0.0
:::

## 使用示例

```js
import ImageminPlugin from 'imagemin-webpack-plugin'

module.exports = {
  plugins: [
    // 确保该插件在任何添加图片的插件之后
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', // 开发模式禁用
      pngquant: {
        quality: '95-100'
      }
    })
  ]
}
```

[copy-webpack-plugin]:https://www.webpackjs.com/plugins/copy-webpack-plugin/

和[copy-webpack-plugin][copy-webpack-plugin]一起使用：

```js
module.exports = {
  plugins: [
    // 拷贝图片文件夹并优化所有图片
    new CopyWebpackPlugin([{
      from: 'images/'
    }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ]
}
```

## API

### new ImageminPlugin(options)

[通配符]:https://github.com/isaacs/minimatch

| options属性 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|----|
| disable | `Boolean` | `false` | 当设置为`true`时，它将完全禁用插件。这对于在开发过程中禁用插件，只有在生产过程中才启用它非常有用。|
| test | `RegExp | String | Array` | `/.*/` | 该插件将只运行在匹配的文件上运行。这一点和 webpack loader 的 test 配置项很相似(但实现方式并不相同，所以可能有很大的区别！) 这可以是一个RegExp对象，一个[通配符][通配符]，一个获取文件名并在文件应该被缩小时返回 `true` 的函数，或者它们中的任何一个的数组。<br /><br />它允许您只在特定文件上运行插件，甚至可以为不同的图像集多次应用插件，并对每个图像应用不同的`imagemin`设置。<br /><br />将覆盖所有内容，包括`externalImages`配置项！示例放在表格后。 |
| maxConcurrency | `Number` | 系统逻辑CPU的数量 | 设置一次可以运行的`Imagemin`实例的最大数量。设置为`Infinity`则同时对每个图片运行单独的进程。 |
|||||
|||||
|||||
|||||
|||||
|||||
|||||
|||||
|||||
|||||
|||||
|||||








