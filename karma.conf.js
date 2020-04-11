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

const karmaTypescriptConfig = {
  tsconfig: 'tsconfig.json',
  // Disable coverage reports and instrumentation by default for tests
  coverageOptions: {instrumentation: false},
  reports: {},
  bundlerOptions: {sourceMap: true}
};
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'node_modules/miniprogram-simulate/build.js',
      'src/plugin/utils/**/*.ts',
      'src/plugin/test/**/*.ts',
    ],
    preprocessors: {
      'src/plugin/**/*.ts': 'karma-typescript'
    },
    karmaTypescriptConfig,
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
      }
    },
    client: {
      args: ['--grep', config.grep || '']
    }
  });
};
