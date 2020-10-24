"use strict";
cc._RF.push(module, '6b4c7AXPuFDnarPbQkFRvnP', 'ShareMgr');
// Scripts/Mod/ShareMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WxApi_1 = require("../Libs/WxApi");
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var ShareMgr = /** @class */ (function () {
    function ShareMgr() {
        this.path = '';
        this.picCount = 3;
        this.preT = 0;
        this.shareTips = [
            '请分享到活跃的群！',
            '请分享到不同群！',
            '请分享给好友！',
            '请分享给20人以上的群！'
        ];
    }
    Object.defineProperty(ShareMgr, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new ShareMgr();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    //初始化分享  
    ShareMgr.prototype.initShare = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //开启右上角的分享
            window["wx"].showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            var dir_1 = ExportUtils_1.default.instance.exportCfg.front_share_config.image;
            var content_1 = ExportUtils_1.default.instance.exportCfg.front_share_config.title;
            window["wx"].onShareAppMessage(function (res) {
                return {
                    title: content_1,
                    imageUrl: dir_1,
                };
            });
            // cc.loader.loadRes(dir, function (err, data) {
            //     window["wx"].onShareAppMessage(function (res) {
            //         return {
            //             title: content,
            //             imageUrl: data.url,
            //         }
            //     })
            // });
            window["wx"].onShow(function (para) {
                if (WxApi_1.default.shareCallback) {
                    var t = new Date().getTime();
                    var diff = t - WxApi_1.default.shareTime;
                    if (diff / 1000 >= 3 && !WxApi_1.default.firstShare) {
                        WxApi_1.default.shareCallback();
                        WxApi_1.default.front_share_number--;
                        window["wx"].showToast({
                            title: '分享成功',
                            icon: 'none',
                            duration: 2000
                        });
                        WxApi_1.default.shareCallback = null;
                    }
                    else {
                        WxApi_1.default.firstShare = false;
                        window["wx"].showModal({
                            title: '提示',
                            content: _this.shareTips[Math.floor(Math.random() * _this.shareTips.length)],
                            confirmText: '重新分享',
                            success: function (res) {
                                if (res.confirm) {
                                    console.log('用户点击确定');
                                    ShareMgr.instance.shareGame(WxApi_1.default.shareCallback);
                                }
                                else if (res.cancel) {
                                    console.log('用户点击取消');
                                }
                            }
                        });
                    }
                }
            });
        }
    };
    ShareMgr.prototype.shareGame = function (cb) {
        // if (WxApi.front_share_number <= 0) {
        //     AdMgr.instance.showVideo(cb)
        //     return
        // }
        WxApi_1.default.shareCallback = cb;
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
            cb();
            return;
        }
        WxApi_1.default.shareTime = new Date().getTime();
        var dir = ExportUtils_1.default.instance.exportCfg.front_share_config.image;
        var content = ExportUtils_1.default.instance.exportCfg.front_share_config.title;
        window["wx"].shareAppMessage({
            title: content,
            imageUrl: dir
        });
        // cc.loader.loadRes(dir, (err, data) => {
        //     window["wx"].shareAppMessage({
        //         title: content,
        //         imageUrl: data.url
        //     })
        // });
    };
    return ShareMgr;
}());
exports.default = ShareMgr;

cc._RF.pop();