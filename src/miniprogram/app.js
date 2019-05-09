var fetchWechat = require('fetch-wechat');
import * as tf from '@tensorflow/tfjs';

var plugin = requirePlugin('tfjsPlugin');
//app.js
App({
  onLaunch: function () {
    plugin.configPlugin({fetchFunc: fetchWechat.fetchFunc(), tf});
  }
})
