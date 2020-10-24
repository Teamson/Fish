
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/ExportUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '708bb1sAQlLaqQxhqcGJbwg', 'ExportUtils');
// ExportLibs/ExportUtils.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExportHttpUtils_1 = require("./ExportHttpUtils");
var ExportCrl_1 = require("./ExportCrl");
var WxApi_1 = require("../Scripts/Libs/WxApi");
var ExportDir;
(function (ExportDir) {
    ExportDir["VIEW_FRIENDGAME"] = "FriendGameUI";
    ExportDir["VIEW_SCROLLUI"] = "ScrollUI";
    ExportDir["VIEW_RECOMMENDUI"] = "RecommendUI";
    ExportDir["VIEW_FULLGAMEUI"] = "FullGameUI";
    ExportDir["VIEW_FINISHGAMEUI"] = "FinishGameUI";
    ExportDir["VIEW_DRAWUI"] = "DrawUI";
    ExportDir["VIEW_PROGRAMUI"] = "ProgramUI";
    ExportDir["VIEW_WECHATUI"] = "WeChatUI";
})(ExportDir = exports.ExportDir || (exports.ExportDir = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JJMgr = /** @class */ (function () {
    function JJMgr() {
        this.exportCfg = null;
        this.navigateAppArr = [];
        this.url = 'https://jiujiu.99huyu.cn/m/xinyifu/config.json?version=';
        this.isFinished = false;
    }
    JJMgr_1 = JJMgr;
    Object.defineProperty(JJMgr, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new JJMgr_1();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    JJMgr.prototype.initJJ = function (version, completeCB) {
        var _this = this;
        if (version === void 0) { version = '1.0.0'; }
        ExportHttpUtils_1.default.instance.httpGet(this.url + version, function (res) {
            console.log('JJ config.json:', res);
            _this.exportCfg = res.data.config;
            _this.navigateAppArr = res.data.mores.remen_game;
            _this.isFinished = true;
            completeCB && completeCB();
        });
    };
    //显示UI
    JJMgr.prototype.showExportUI = function (dir, param, callback) {
        if (!this.exportCfg.front_all_export_switch && callback) {
            callback();
            return;
        }
        else if (!this.exportCfg.front_all_export_switch) {
            return;
        }
        cc.find('ExportNode').getComponent(ExportCrl_1.default).showJJUI(dir, param, callback);
    };
    //关闭UI
    JJMgr.prototype.closeExportUI = function (dir) {
        cc.find('ExportNode').getComponent(ExportCrl_1.default).closeJJUI(dir);
    };
    JJMgr.prototype.closeAllExportUI = function () {
        cc.find('ExportNode').getComponent(ExportCrl_1.default).closeAllJJUI();
    };
    //跳转
    JJMgr.prototype.NavigateApp = function (index, cancelCB, successCB) {
        var _this = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            WxApi_1.default.aldEvent('导出-总点击数');
            window['wx'].navigateToMiniProgram({
                appId: this.navigateAppArr[index].appid,
                path: this.navigateAppArr[index].path,
                success: function (res) {
                    // 打开成功
                    successCB && successCB();
                    WxApi_1.default.aldEvent('导出成功-总用户数');
                    WxApi_1.default.aldEvent('导出成功-' + _this.navigateAppArr[index].title);
                },
                fail: function (res) {
                    // 打开失败
                    cancelCB && cancelCB();
                }
            });
        }
    };
    JJMgr.prototype.getSubtitle = function (index) {
        if (this.navigateAppArr[index].subtitle && this.navigateAppArr[index].subtitle != '') {
            return this.navigateAppArr[index].subtitle;
        }
        else {
            return this.navigateAppArr[index].title;
        }
    };
    //加载网络图片
    JJMgr.prototype.loadImgByUrl = function (sprite, remoteUrl, imageType, cb) {
        if (imageType === void 0) { imageType = 'png'; }
        cc.loader.load({
            url: remoteUrl,
            type: imageType
        }, function (err, texture) {
            if (err || !sprite || !texture || !sprite.spriteFrame) {
                return;
            }
            sprite.spriteFrame = new cc.SpriteFrame(texture);
            cb && cb();
        });
    };
    JJMgr.prototype.loadSpriteFrame = function (spName, sprite, cb) {
        cc.loader.loadRes(spName, cc.SpriteFrame, function (err, spriteFrame) {
            sprite.spriteFrame = spriteFrame;
            cb && cb();
        });
    };
    //打乱数组
    JJMgr.prototype.shuffleArr = function (arr) {
        var _a;
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    };
    var JJMgr_1;
    JJMgr = JJMgr_1 = __decorate([
        ccclass
    ], JJMgr);
    return JJMgr;
}());
exports.default = JJMgr;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcRXhwb3J0VXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUM7QUFDdkMseUNBQW9DO0FBQ3BDLCtDQUEwQztBQUUxQyxJQUFZLFNBU1g7QUFURCxXQUFZLFNBQVM7SUFDakIsNkNBQWdDLENBQUE7SUFDaEMsdUNBQTBCLENBQUE7SUFDMUIsNkNBQWdDLENBQUE7SUFDaEMsMkNBQThCLENBQUE7SUFDOUIsK0NBQWtDLENBQUE7SUFDbEMsbUNBQXNCLENBQUE7SUFDdEIseUNBQTRCLENBQUE7SUFDNUIsdUNBQTBCLENBQUE7QUFDOUIsQ0FBQyxFQVRXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBU3BCO0FBRUssSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQURBO1FBV0ksY0FBUyxHQUFRLElBQUksQ0FBQTtRQUNyQixtQkFBYyxHQUFVLEVBQUUsQ0FBQTtRQUUxQixRQUFHLEdBQVcseURBQXlELENBQUE7UUFFdkUsZUFBVSxHQUFZLEtBQUssQ0FBQTtJQTJGL0IsQ0FBQztjQTFHb0IsS0FBSztJQUd0QixzQkFBa0IsaUJBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFBO2FBQy9CO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBU0Qsc0JBQU0sR0FBTixVQUFPLE9BQXlCLEVBQUUsVUFBcUI7UUFBdkQsaUJBUUM7UUFSTSx3QkFBQSxFQUFBLGlCQUF5QjtRQUM1Qix5QkFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsVUFBQyxHQUFHO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlC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YSxLQUFLLENBMEd6QjtJQUFELFlBQUM7Q0ExR0QsQUEwR0MsSUFBQTtrQkExR29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpIdHRwIGZyb20gXCIuL0V4cG9ydEh0dHBVdGlsc1wiO1xyXG5pbXBvcnQgRXhwb3J0Q3JsIGZyb20gXCIuL0V4cG9ydENybFwiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uL1NjcmlwdHMvTGlicy9XeEFwaVwiO1xyXG5cclxuZXhwb3J0IGVudW0gRXhwb3J0RGlyIHtcclxuICAgIFZJRVdfRlJJRU5ER0FNRSA9ICdGcmllbmRHYW1lVUknLCAgIC8v5aW95Y+L6YO95Zyo546p55qE54iG5qy+5ri45oiP5by556qXXHJcbiAgICBWSUVXX1NDUk9MTFVJID0gJ1Njcm9sbFVJJywgICAgICAgICAvL+a4uOaIj+WGhea7muWKqOWvvOWHuuagj1xyXG4gICAgVklFV19SRUNPTU1FTkRVSSA9ICdSZWNvbW1lbmRVSScsICAgLy/ng63pl6jmjqjojZDlhajlsY/luZXlr7zlh7rpobVcclxuICAgIFZJRVdfRlVMTEdBTUVVSSA9ICdGdWxsR2FtZVVJJywgICAgIC8v5YWo5bGP5bmV5a+85Ye66aG1XHJcbiAgICBWSUVXX0ZJTklTSEdBTUVVSSA9ICdGaW5pc2hHYW1lVUknLCAvL+e7k+eul+mhtSA2IOS4qiBpY29uXHJcbiAgICBWSUVXX0RSQVdVSSA9ICdEcmF3VUknLCAgICAgICAgICAgICAvL+aKveWxiVxyXG4gICAgVklFV19QUk9HUkFNVUkgPSAnUHJvZ3JhbVVJJywgICAgICAgLy/muLjmiI/liJfooahcclxuICAgIFZJRVdfV0VDSEFUVUkgPSAnV2VDaGF0VUknXHJcbn1cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKSk1nciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBKSk1nclxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSkpNZ3Ige1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgSkpNZ3IoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnRDZmc6IGFueSA9IG51bGxcclxuICAgIG5hdmlnYXRlQXBwQXJyOiBhbnlbXSA9IFtdXHJcblxyXG4gICAgdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9qaXVqaXUuOTlodXl1LmNuL20veGlueWlmdS9jb25maWcuanNvbj92ZXJzaW9uPSdcclxuXHJcbiAgICBpc0ZpbmlzaGVkOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBpbml0SkoodmVyc2lvbjogc3RyaW5nID0gJzEuMC4wJywgY29tcGxldGVDQj86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgSkpIdHRwLmluc3RhbmNlLmh0dHBHZXQodGhpcy51cmwgKyB2ZXJzaW9uLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdKSiBjb25maWcuanNvbjonLCByZXMpXHJcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0Q2ZnID0gcmVzLmRhdGEuY29uZmlnXHJcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVBcHBBcnIgPSByZXMuZGF0YS5tb3Jlcy5yZW1lbl9nYW1lXHJcbiAgICAgICAgICAgIHRoaXMuaXNGaW5pc2hlZCA9IHRydWVcclxuICAgICAgICAgICAgY29tcGxldGVDQiAmJiBjb21wbGV0ZUNCKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v5pi+56S6VUlcclxuICAgIHNob3dFeHBvcnRVSShkaXI6IEV4cG9ydERpciwgcGFyYW0/OiBhbnksIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXhwb3J0Q2ZnLmZyb250X2FsbF9leHBvcnRfc3dpdGNoICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5leHBvcnRDZmcuZnJvbnRfYWxsX2V4cG9ydF9zd2l0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmZpbmQoJ0V4cG9ydE5vZGUnKS5nZXRDb21wb25lbnQoRXhwb3J0Q3JsKS5zaG93SkpVSShkaXIsIHBhcmFtLCBjYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICAvL+WFs+mXrVVJXHJcbiAgICBjbG9zZUV4cG9ydFVJKGRpcjogRXhwb3J0RGlyKSB7XHJcbiAgICAgICAgY2MuZmluZCgnRXhwb3J0Tm9kZScpLmdldENvbXBvbmVudChFeHBvcnRDcmwpLmNsb3NlSkpVSShkaXIpXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VBbGxFeHBvcnRVSSgpIHtcclxuICAgICAgICBjYy5maW5kKCdFeHBvcnROb2RlJykuZ2V0Q29tcG9uZW50KEV4cG9ydENybCkuY2xvc2VBbGxKSlVJKClcclxuICAgIH1cclxuXHJcbiAgICAvL+i3s+i9rFxyXG4gICAgTmF2aWdhdGVBcHAoaW5kZXg6IG51bWJlciwgY2FuY2VsQ0I/OiBGdW5jdGlvbiwgc3VjY2Vzc0NCPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WvvOWHui3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgICAgICB3aW5kb3dbJ3d4J10ubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICAgICAgICAgIGFwcElkOiB0aGlzLm5hdmlnYXRlQXBwQXJyW2luZGV4XS5hcHBpZCxcclxuICAgICAgICAgICAgICAgIHBhdGg6IHRoaXMubmF2aWdhdGVBcHBBcnJbaW5kZXhdLnBhdGgsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5omT5byA5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NCICYmIHN1Y2Nlc3NDQigpXHJcbiAgICAgICAgICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WvvOWHuuaIkOWKny3mgLvnlKjmiLfmlbAnKVxyXG4gICAgICAgICAgICAgICAgICAgIFd4QXBpLmFsZEV2ZW50KCflr7zlh7rmiJDlip8tJyArIHRoaXMubmF2aWdhdGVBcHBBcnJbaW5kZXhdLnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmiZPlvIDlpLHotKVcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDQiAmJiBjYW5jZWxDQigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YnRpdGxlKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5uYXZpZ2F0ZUFwcEFycltpbmRleF0uc3VidGl0bGUgJiYgdGhpcy5uYXZpZ2F0ZUFwcEFycltpbmRleF0uc3VidGl0bGUgIT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGVBcHBBcnJbaW5kZXhdLnN1YnRpdGxlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGVBcHBBcnJbaW5kZXhdLnRpdGxlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L29572R57uc5Zu+54mHXHJcbiAgICBwdWJsaWMgbG9hZEltZ0J5VXJsKHNwcml0ZSwgcmVtb3RlVXJsLCBpbWFnZVR5cGU6IHN0cmluZyA9ICdwbmcnLCBjYj86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoe1xyXG4gICAgICAgICAgICB1cmw6IHJlbW90ZVVybCxcclxuICAgICAgICAgICAgdHlwZTogaW1hZ2VUeXBlXHJcbiAgICAgICAgfSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyIHx8ICFzcHJpdGUgfHwgIXRleHR1cmUgfHwgIXNwcml0ZS5zcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKVxyXG4gICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRTcHJpdGVGcmFtZShzcE5hbWU6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUsIGNiPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhzcE5hbWUsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZVxyXG4gICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+S5seaVsOe7hFxyXG4gICAgcHVibGljIHNodWZmbGVBcnIoYXJyOiBhbnlbXSkge1xyXG4gICAgICAgIGxldCBpID0gYXJyLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoaSkge1xyXG4gICAgICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGktLSk7XHJcbiAgICAgICAgICAgIFthcnJbal0sIGFycltpXV0gPSBbYXJyW2ldLCBhcnJbal1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==