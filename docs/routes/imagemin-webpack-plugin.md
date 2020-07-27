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












