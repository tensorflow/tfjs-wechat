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
const path = require('path');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'node_modules/miniprogram-simulate/build.js',
      'plugin/test/*_test.ts',
      'plugin/components/**/*.ts',
      'plugin/components/**/*.wxml',
      'plugin/components/**/*.json',
      'plugin/components/**/*.wxss',
      'plugin/components/**/*.js',
    ],
    exclude: ["plugin/**/*.d.ts", "plugin/node_modules/**/*.ts"],
    preprocessors: {
      'plugin/**/*.ts': ['karma-typescript'], // *.tsx for React Jsx
      'plugin/components/tfjs-wechat/*.wxml': ['filemap'], // 组件文件使用 filemap 将各个文件内容注入到浏览器
      'plugin/components/tfjs-wechat/*.wcss': ['filemap'], // 组件文件使用 filemap 将各个文件内容注入到浏览器
      'plugin/components/tfjs-wechat/*.json': ['filemap'], // 组件文件使用 filemap 将各个文件内容注入到浏览器
      'plugin/components/tfjs-wechat/tfjs-wechat.js': ['filemap'], // 组件文件使用 filemap 将各个文件内容注入到浏览器
      'plugin/test/*_test.js': ['webpack', 'dirname']
    },
    karmaTypescriptConfig: {
      tsconfig: 'tsconfig.json',
      compilerOptions: {
        allowJs: true,
        declaration: false,
        module: 'commonjs'
      },
      reports: {} // Do not produce coverage html.
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
    reporters: ['progress', 'karma-typescript'],
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
