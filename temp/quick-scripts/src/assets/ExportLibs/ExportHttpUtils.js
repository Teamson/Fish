"use strict";
cc._RF.push(module, '46bc0f0+qFCSpzEJp3chavH', 'ExportHttpUtils');
// ExportLibs/ExportHttpUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JJHttp = /** @class */ (function () {
    function JJHttp() {
    }
    Object.defineProperty(JJHttp, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new JJHttp();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    JJHttp.prototype.httpGet = function (url, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var respone = JSON.parse(xhr.responseText);
                callback(respone);
            }
        };
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.timeout = 5000; // 5 seconds for timeout
        xhr.send();
    };
    JJHttp.prototype.httpPost = function (url, params, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            //cc.log('xhr.readyState=' + xhr.readyState + '  xhr.status=' + xhr.status);
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var respone = JSON.parse(xhr.responseText);
                callback(respone);
            }
        };
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.timeout = 5000; // 5 seconds for timeout
        xhr.send(params);
    };
    return JJHttp;
}());
exports.default = JJHttp;

cc._RF.pop();