"use strict";
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