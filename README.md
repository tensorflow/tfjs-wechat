# TensorFlow.js 微信小程序插件
[TensorFlow.js](https://github.com/tensorflow/tfjs)是谷歌开发的机器学习开源项目，致力于为javascript提供具有硬件加速的机器学习模型训练和部署。
TensorFlow.js 微信小程序插件封装了TensorFlow.js库，用于提供给第三方小程序调用。
例子可以看TFJS Mobilenet [物体识别小程序](https://github.com/tensorflow/tfjs-wechat/tree/master/demo/mobilenet)
## 添加插件
在使用插件前，首先要在小程序管理后台的“设置-第三方服务-插件管理”中添加插件。开发者可登录小程序管理后台，通过 appid [wx6afed118d9e81df9] 查找插件并添加。本插件无需申请，添加后可直接使用。

### 引入插件代码包
使用插件前，使用者要在 app.json 中声明需要使用的插件，例如：

代码示例：
```
{
  ...
  "plugins": {
    "tfjsPlugin": {
      "version": "0.0.5",
      "provider": "wx6afed118d9e81df9"
    }
  }
  ...
}
```
### 引入TensorFlow.js npm
TensorFlow.js 最新版本是以npm包的形式发布，小程序需要使用npm或者yarn来载入TensorFlow.js npm包。也可以手动修改 package.json 文件来加入。


TensorFlow.js有一个联合包 - @tensorflow/tfjs，包含了四个分npm包：
- tfjs-core: 基础包
- tfjs-converter: GraphModel 导入和执行包
- tfjs-layers: LayersModel 创建，导入和执行包
- tfjs-data：数据流工具包

对于小程序而言，由于有2M的app大小限制，不建议直接使用联合包，而是按照需求加载分包。
- 如果小程序只需要导入和运行GraphModel模型的的话，建议只加入tfjs-core和tfjs-converter包。这样可以尽量减少导入包的大小。
- 如果需要创建,导入或训练LayersModel模型，需要再加入 tfjs-layers包。

下面的例子是只用到tfjs-core和tfjs-converter包。代码示例：
```
{
  "name": "yourProject",
  "version": "0.0.1",
  "main": "dist/index.js",
  "license": "Apache-2.0",
  "dependencies": {
    "@tensorflow/tfjs-core": "1.2.6"，
    "@tensorflow/tfjs-converter": "1.2.5"
  }
}
```

参考小程序npm工具[文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)如何编译npm包到小程序中。

__注意__
请从微信小程序[开发版Nightly Build更新日志](https://developers.weixin.qq.com/miniprogram/dev/devtools/nightly.html)下载最新的微信开发者工具，保证版本号>=v1.02.1907022.

### Polyfill fetch 函数
如果需要使用tf.loadGraphModel或tf.loadLayersModel API来载入模型，小程序需要按以下流程填充fetch函数：

1. 如果你使用npm, 你可以载入fetch-wechat npm 包

```
{
  "name": "yourProject",
  "version": "0.0.1",
  "main": "dist/index.js",
  "license": "Apache-2.0",
  "dependencies": {
    "@tensorflow/tfjs-core": "1.2.6"，
    "@tensorflow/tfjs-converter": "1.2.5"，
    "fetch-wechat": "0.0.3"
  }
}
```

也可以直接拷贝以下文件到你的javascript源目录：
https://cdn.jsdelivr.net/npm/fetch-wechat@0.0.3/dist/fetch_wechat.min.js

2. 在app.js的onLaunch里调用插件configPlugin函数

```
var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core');
var plugin = requirePlugin('tfjsPlugin');
//app.js
App({
  onLaunch: function () {
    plugin.configPlugin({
      // polyfill fetch function
      fetchFunc: fetchWechat.fetchFunc(),
      // inject tfjs runtime
      tf,
      // provide webgl canvas
      canvas: wx.createOffscreenCanvas()
    });
  }
});
```

组件设置完毕就可以开始使用 TensorFlow.js库的[API](https://js.tensorflow.org/api/latest/)了。

### 使用 [tfjs-models](https://github.com/tensorflow/tfjs-models) 模型库注意事项
模型库提供了一系列训练好的模型，方便大家快速的给小程序注入ML功能。模型分类包括
- 图像识别
- 语音识别
- 人体姿态识别
- 物体识别
- 文字分类

由于这些API默认模型文件都存储在谷歌云上，直接使用会导致中国用户无法直接读取。在小程序内使用模型API时要提供 modelUrl 的参数，可以指向我们在谷歌中国的影像服务器。
谷歌云的base url是 https://storage.googleapis.com， 中国镜像的base url是https://www.gstaticcnapps.cn
模型的url path是一致的，比如
- posenet模型的谷歌云地址是：
https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/float/050/model-stride16.json
- 中国镜像的地址为 https://www.gstaticcnapps.cn/tfjs-models/savedmodel/posenet/mobilenet/float/050/model-stride16.json

下面时加载posenet模型的例子：

```
import * as posenet from '@tensorflow-models/posenet';

const POSENET_URL =
    'https://www.gstaticcnapps.cn/tfjs-models/savedmodel/posenet/mobilenet/float/050/model-stride16.json';

const model = await posenet.load({
  architecture: 'MobileNetV1',
  outputStride: 16,
  inputResolution: 193,
  multiplier: 0.5,
  modelUrl: POSENET_URL
});
```

## [tfjs-examples](https://github.com/tensorflow/tfjs-examples) tfjs例子库
tfjs API 使用实例。

## 版本需求
- 微信基础库版本 >= 2.7.3
- 微信开发者工具 >= v1.02.1907022
- tfjs-core >= 1.2.6

## 更新说明
- 0.0.2 plugin不再映射TensorFlow.js API库，由小程序端提供。
- 0.0.3 使用offscreen canvas，小程序无需加入plugin component。
- 0.0.5 修改例子程序使用tfjs分包来降低小程序大小。
