# TensorFlow.js 微信小程序插件
[TensorFlow.js](https://github.com/tensorflow/tfjs)是谷歌开发的机器学习开源项目，致力于为javascript提供具有硬件加速的机器学习模型训练和部署。
TensorFlow.js 微信小程序插件封装了TensorFlow.js库，用于提供给第三方小程序调用。
例子可以看TFJS Mobilenet [物体识别小程序](https://github.com/tensorflow/tfjs-wechat/src/miniprogram)
## 添加插件
在使用插件前，首先要在小程序管理后台的“设置-第三方服务-插件管理”中添加插件。开发者可登录小程序管理后台，通过 appid 查找插件并添加。本插件无需申请，添加后可直接使用。

### 引入插件代码包
使用插件前，使用者要在 app.json 中声明需要使用的插件，例如：

代码示例：
```
{
  "plugins": {
    "tfjsPlugin": {
      "version": "0.0.1",
      "provider": "wx6afed118d9e81df9"
    }
  }
}
```

### Polyfill fetch 函数
如果需要载入模型，小程序需要按以下流程填充fetch函数： 

1. 如果你使用npm, 你可以载入wechat-fetch npm 包

```
{
  "name": "tfjs-wechat",
  "version": "0.0.1",
  "main": "dist/index.js",
  "license": "Apache-2.0",
  "dependencies": {
    "fetch-wechat": "0.0.3"
  }
}
```

否则可以直接拷贝以下文件到你的javascript源目录：
https://cdn.jsdelivr.net/npm/fetch-wechat@0.0.3/dist/fetch_wechat.min.js

2. 在app.js的onLaunch里调用插件configPlugin函数

```
var fetchWechat = require('fetch-wechat');
var tf = requirePlugin('tfjsPlugin');
//app.js
App({
  onLaunch: function () {
    tf.configPlugin({fetchFunc: fetchWechat.fetchFunc()})
  }
})
```

### 在主page模版wxml中加入tfjs-wechat组件

index.js

```
{
  "usingComponents": {
    "tfjs-wechat": "plugin://tfjsPlugin/tfjs-wechat"
  }
}
```

index.wxml

```
...
<tfjs-wechat />
...
```

组件设置完毕就可以开始使用 TensorFlow.js库的API了。

## 版本需求
基础库版本 >= 1.9.94

## 更新说明


