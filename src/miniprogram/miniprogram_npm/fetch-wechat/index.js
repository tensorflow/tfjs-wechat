module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1557782889910, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TEXT_FILE_EXTS = /\.(txt|json|html|txt|csv)/;
function parseResponse(url, res) {
    var header = res.header || {};
    header = Object.keys(header).reduce(function (map, key) {
        map[key.toLowerCase()] = header[key];
        return map;
    }, {});
    return {
        ok: ((res.statusCode / 200) | 0) === 1,
        status: res.statusCode,
        statusText: res.statusCode,
        url: url,
        clone: function () { return parseResponse(url, res); },
        text: function () {
            return Promise.resolve(typeof res.data === 'string' ? res.data : JSON.stringify(res.data));
        },
        json: function () {
            if (typeof res.data === 'object')
                return Promise.resolve(res.data);
            var json = {};
            try {
                json = JSON.parse(res.data);
            }
            catch (err) {
                console.error(err);
            }
            return Promise.resolve(json);
        },
        arrayBuffer: function () {
            return Promise.resolve(res.data);
        },
        headers: {
            keys: function () { return Object.keys(header); },
            entries: function () {
                var all = [];
                for (var key in header) {
                    if (header.hasOwnProperty(key)) {
                        all.push([key, header[key]]);
                    }
                }
                return all;
            },
            get: function (n) { return header[n.toLowerCase()]; },
            has: function (n) { return n.toLowerCase() in header; }
        }
    };
}
exports.parseResponse = parseResponse;
function fetchFunc() {
    // tslint:disable-next-line:no-any
    return function (url, options) {
        options = options || {};
        var dataType = url.match(exports.TEXT_FILE_EXTS) ? 'text' : 'arraybuffer';
        return new Promise(function (resolve, reject) {
            wx.request({
                url: url,
                method: options.method || 'GET',
                data: options.body,
                header: options.headers,
                dataType: dataType,
                responseType: dataType,
                success: function (resp) { return resolve(parseResponse(url, resp)); },
                fail: function (err) { return reject(err); }
            });
        });
    };
}
exports.fetchFunc = fetchFunc;
function setWechatFetch(debug) {
    if (debug === void 0) { debug = false; }
    // tslint:disable-next-line:no-any
    var typedGlobal = global;
    if (typeof typedGlobal.fetch !== 'function') {
        if (debug) {
            console.log('setup global fetch...');
        }
        typedGlobal.fetch = fetchFunc();
    }
}
exports.setWechatFetch = setWechatFetch;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1557782889910);
})()
//# sourceMappingURL=index.js.map