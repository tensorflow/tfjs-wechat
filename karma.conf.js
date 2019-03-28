/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'node_modules/miniprogram-simulate/build.js',
      'dist/plugin/test/*_test.js',
      'dist/plugin/utils/**/*.js',
      'dist/plugin/components/**/*',
    ],
    exclude: ["dist/plugin/**/*.d.ts"],
    preprocessors: {
      'dist/plugin/components/tfjs-wechat/*': ['filemap'], // 组件文件使用 filemap 将各个文件内容注入到浏览器
      'dist/plugin/test/*_test.js': ['webpack', 'dirname'],
      'dist/plugin/miniprogram_npm/@tensorflow/tfjs/index.js': ['webpack', 'dirname']
    },
    webpack: {
      mode: 'development',
      optimization: {
          minimize: false, // 不做压缩，方便调试
      },
      node: {
          __dirname: false, // 不注入 __dirname，由 preprocessor 来处理
      },
    },
    reporters: ['progress'],
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    browserStack: {
      username: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_KEY
    },
    reportSlowerThan: 500,
    browserNoActivityTimeout: 30000,
    customLaunchers: {
      bs_chrome_mac: {
        base: 'BrowserStack',
        browser: 'chrome',
        browser_version: 'latest',
        os: 'OS X',
        os_version: 'Sierra'
      },
      bs_firefox_mac: {
        base: 'BrowserStack',
        browser: 'firefox',
        browser_version: 'latest',
        os: 'OS X',
        os_version: 'Sierra'
      }
    },
    client: {
      args: ['--grep', config.grep || '']
    }
  });
};
