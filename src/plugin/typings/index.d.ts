/*! *****************************************************************************
Copyright (c) 2018 Tencent, Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***************************************************************************** */

/// <reference path="./lib.wa.es6.d.ts" />
/// <reference path="./wx/index.d.ts" />
/// <reference path="./tfjs/index.d.ts" />

// Component is not defined in wx.
declare interface ComponentInstance
    <D extends IAnyObject = any,
     T extends IAnyObject = any> extends Page.PageInstance<D, T>  {
  attached?: () => void;
  dettached?: () => void;
}

declare interface ComponentConstructor {
    <D extends IAnyObject, T extends IAnyObject & ComponentInstance>(
      options: ComponentInstance<D, T> & T
    ): void
}

declare const Component: ComponentConstructor
declare interface requirePluginFunc {
  (pluginName: string): any;
}
declare const requirePlugin: requirePluginFunc;
declare interface ImageData {
  data: Uint8ClampedArray;
  height: number;
  width: number;
}

declare const simulate: any;
