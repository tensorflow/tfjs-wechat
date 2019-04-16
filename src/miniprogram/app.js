var fetchWechat = require('fetch-wechat');
var tf = requirePlugin('tfjsPlugin');
//app.js
App({
  onLaunch: function () {
    tf.configPlugin({fetchFunc: fetchWechat.fetchFunc()})
  }
})