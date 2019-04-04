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
 path = require('path');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'node_modules/miniprogram-simulate/build.js',
      'dist/plugin/utils/**/*.js',
      'dist/plugin/test/**/*.js',
      'dist/plugin/components/**/*.js',
      'dist/plugin/components/tfjs-wechat/*'
    ],
    exclude: ['dist/plugin/**/*.d.ts', 'dist/plugin/**/*.js.map'],
    preprocessors: {
      'dist/plugin/components/tfjs-wechat/*.js': ['webpack','filemap'],
      'dist/plugin/components/tfjs-wechat/*.wxml': ['filemap'], // 组件文件使用 filemap 将各个文件内容注入到浏览器
      'dist/plugin/components/tfjs-wechat/*.json': ['filemap'], // 组件文件使用 filemap 将各个文件内容注入到浏览器
      'dist/plugin/components/tfjs-wechat/*.wxss': ['filemap'], // 组件文件使用 filemap 将各个文件内容注入到浏览器
      'dist/plugin/utils/*.js': ['webpack'],
      'dist/plugin/api/*.js': ['webpack'],
      'dist/plugin/test/*.js': ['webpack', 'dirname'],
    },
    reporters: ['progress'],
    autoWatch: true,
    browsers: ['Chrome'],
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
    },
    webpack: {
      mode: 'development',
      optimization: {
          minimize: false,
      },
      node: {
          __dirname: false,
      },
      resolve: {
        modules: [path.resolve(__dirname, 'src/plugin/node_modules'), 'node_modules']
      }
    },
  });
};
