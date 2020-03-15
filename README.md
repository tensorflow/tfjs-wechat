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
      "version": "0.0.6",
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
    "@tensorflow/tfjs-core": "1.2.7"，
    "@tensorflow/tfjs-converter": "1.2.7"
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
    "@tensorflow/tfjs-core": "1.2.7"，
    "@tensorflow/tfjs-converter": "1.2.7"，
    "fetch-wechat": "0.0.3"
  }
}
```

2. 也可以直接拷贝以下文件到你的javascript源目录：
https://cdn.jsdelivr.net/npm/fetch-wechat@0.0.3/dist/fetch_wechat.min.js


### 在app.js的onLaunch里调用插件configPlugin函数

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

### 支持模型localStorage缓存
采用localStorage缓存可以减少模型下载耗费带宽和时间。由于微信小程序对于localStorage有10MB的限制，这个方法适用于小于10MB的模型。
步骤如下：
1. 在app.js中提供localStorageHandler函数.

```
var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core');
var plugin = requirePlugin('tfjsPlugin');
//app.js
App({
  // expose localStorage handler
  globalData: {localStorageIO: plugin.localStorageIO},
  ...
});
```

2. 在模型加载时加入localStorageHandler逻辑。

```
const LOCAL_STORAGE_KEY = 'mobilenet_model';
export class MobileNet {
  private model: tfc.GraphModel;
  constructor() { }

  async load() {

    const localStorageHandler = getApp().globalData.localStorageIO(LOCAL_STORAGE_KEY);
    try {
      this.model = await tfc.loadGraphModel(localStorageHandler);
    } catch (e) {
      this.model =
        await tfc.loadGraphModel(MODEL_URL);
      this.model.save(localStorageHandler);
    }
  }

```

### 支持模型保存为用户文件
微信也支持保存模型为文件。同localStorage, 微信小程序对于本地文件也有10MB的限制，这个方法适用于小于10MB的模型。由于最终模型是按 binary 保存，较 localstorage 保存为 base64 string 更为节省空间。

步骤如下：
1. 在app.js中提供 fileStorageHandler 函数.

```js
var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core');
var plugin = requirePlugin('tfjsPlugin');
//app.js
App({
  // expose fileStorage handler
  globalData: {fileStorageIO: plugin.fileStorageIO},
  ...
});
```

2. 在模型加载时加入 fileStorageHandler 逻辑。

```js
const FILE_STORAGE_PATH = 'mobilenet_model';
export class MobileNet {
  private model: tfc.GraphModel;
  constructor() { }

  async load() {

    const fileStorageHandler = getApp().globalData.fileStorageIO(
        FILE_STORAGE_PATH, wx.getFileSystemManager());
    try {
      this.model = await tfc.loadGraphModel(fileStorageHandler);
    } catch (e) {
      this.model =
        await tfc.loadGraphModel(MODEL_URL);
      this.model.save(fileStorageHandler);
    }
  }
}
```

__注意__
由于最新版本的WeChat的OffscreenCanvas会随页面跳转而失效，在app.js的 onLaunch 函数中设置 tfjs 会导致小程序退出或页面跳转之后操作出错。建议在使用tfjs的page的onLoad中调用 configPlugin 函数。
WeChat的12月版本会修复这个问题。

```
var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core');
var plugin = requirePlugin('tfjsPlugin');
//index.js
Page({
  onLoad: function () {
    plugin.configPlugin({
      // polyfill fetch function
      fetchFunc: fetchWechat.fetchFunc(),
      // inject tfjs runtime
      tf,
      // provide webgl canvas
      canvas: wx.createOffscreenCanvas(),
      backendName: 'wechat-webgl-' + Date.now()
    });
    ...
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

由于这些API默认模型文件都存储在谷歌云上，直接使用会导致中国用户无法直接读取。在小程序内使用模型API时要提供 modelUrl 的参数，可以指向我们在谷歌中国的镜像服务器。
谷歌云的base url是 https://storage.googleapis.com， 中国镜像的base url是https://www.gstaticcnapps.cn
模型的url path是一致的，比如
- posenet模型的谷歌云地址是：
https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/float/050/model-stride16.json
- 中国镜像的地址为 https://www.gstaticcnapps.cn/tfjs-models/savedmodel/posenet/mobilenet/float/050/model-stride16.json

他们的 URL Path 都是 /tfjs-models/savedmodel/posenet/mobilenet/float/050/model-stride16.json

下面是加载posenet模型的例子：

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
- tfjs-core >= 1.5.2
- tfjs-converter >= 1.5.2 如果使用localStorage模型缓存

__注意__
在微信开发者工具 v1.02.19070300 中，你需要在通用设置中打开硬件加速，从而在TensorFlow.js中启用WebGL加速。
![setting](https://raw.githubusercontent.com/tensorflow/tfjs-wechat/master/doc/setting.png)
## 更新说明
- 0.0.2 plugin不再映射TensorFlow.js API库，由小程序端提供。
- 0.0.3 使用offscreen canvas，小程序无需加入plugin component。
- 0.0.5 修改例子程序使用tfjs分包来降低小程序大小。
- 0.0.6 支持 tfjs-core版本1.2.7。
- 0.0.7 允许用户设置webgl backend name, 这可以解决小程序offscreen canvas会失效的问题。
- 0.0.8 加入localStorage支持，允许小于10M模型在localStorage内缓存。
