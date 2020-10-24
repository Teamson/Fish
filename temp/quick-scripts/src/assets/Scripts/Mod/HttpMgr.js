"use strict";
cc._RF.push(module, '517d16YfqhMdL6fvXxxOsbl', 'HttpMgr');
// Scripts/Mod/HttpMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpMgr = /** @class */ (function () {
    function HttpMgr() {
    }
    Object.defineProperty(HttpMgr, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new HttpMgr();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    HttpMgr.prototype.httpGet = function (url, callback) {
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
    HttpMgr.prototype.httpPost = function (url, params, callback) {
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
    return HttpMgr;
}());
exports.default = HttpMgr;

cc._RF.pop();