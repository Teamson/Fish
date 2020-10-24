"use strict";
cc._RF.push(module, 'effbdHfqBlJkYv2xufFb3CW', 'AdMgr');
// Scripts/Mod/AdMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WxApi_1 = require("../Libs/WxApi");
var ShareMgr_1 = require("./ShareMgr");
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var AdMgr = /** @class */ (function () {
    function AdMgr() {
        this.bannerUnitId = ['adunit-8ceebcafa271d4d2', 'adunit-28f839dc57be0edd'];
        this.videoUnitId = 'adunit-43095a0d9b35d115';
        this.bannerAd = null;
        this.videoAd = null;
        this.videoCallback = null;
        this.videoCloseCallback = null;
        this.curBannerId = 0;
        this.showBannerCount = 0;
        this.videoIsError = true;
        this.videoLoaded = false;
        this.isBannerError = true;
    }
    Object.defineProperty(AdMgr, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new AdMgr();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    AdMgr.prototype.initAd = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            this.initBanner();
            this.initVideo();
        }
    };
    //初始化banner
    AdMgr.prototype.initBanner = function () {
        var _this = this;
        this.isBannerError = false;
        //适配iphoneX
        var isIphonex = false;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].getSystemInfo({
                success: function (res) {
                    var modelmes = res.model;
                    if (modelmes.search('iPhone X') != -1) {
                        isIphonex = true;
                    }
                }
            });
        }
        var winSize = window["wx"].getSystemInfoSync();
        //初始化banner
        this.bannerAd = window["wx"].createBannerAd({
            adUnitId: this.bannerUnitId[this.curBannerId],
            style: {
                left: 0,
                top: 0,
                width: 0,
                height: 300
            }
        });
        //监听banner尺寸修正
        this.bannerAd.onResize(function (res) {
            if (isIphonex) {
                _this.bannerAd.style.top = winSize.windowHeight - _this.bannerAd.style.realHeight - 10;
            }
            else {
                _this.bannerAd.style.top = winSize.windowHeight - _this.bannerAd.style.realHeight;
            }
            _this.bannerAd.style.left = winSize.windowWidth / 2 - _this.bannerAd.style.realWidth / 2;
        });
        this.bannerAd.onError(function (res) {
            // 错误事件
            console.log('banner error:', JSON.stringify(res));
            _this.isBannerError = true;
        });
    };
    //隐藏banner
    AdMgr.prototype.hideBanner = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && this.bannerAd) {
            if (this.isBannerError) {
                ExportUtils_1.default.instance.closeExportUI(ExportUtils_1.ExportDir.VIEW_SCROLLUI);
            }
            else {
                this.bannerAd.hide();
                if (ExportUtils_1.default.instance.exportCfg != null && this.showBannerCount >= parseInt(ExportUtils_1.default.instance.exportCfg.front_banner_number)) {
                    this.showBannerCount = 0;
                    this.curBannerId++;
                    if (this.curBannerId >= this.bannerUnitId.length) {
                        this.curBannerId = 0;
                    }
                    console.log('destroy banner');
                    this.bannerAd.destroy();
                    this.bannerAd = null;
                    this.initBanner();
                }
            }
        }
        else {
            ExportUtils_1.default.instance.closeExportUI(ExportUtils_1.ExportDir.VIEW_SCROLLUI);
        }
    };
    // countBanner() {
    //     if (JJMgr.instance.dataConfig != null && this.showBannerCount > parseInt(JJMgr.instance.dataConfig.front_banner_number)) {
    //         this.bannerAd.hide()
    //         this.showBannerCount = 0
    //         this.curBannerId++
    //         if (this.curBannerId >= this.bannerUnitId.length) {
    //             this.curBannerId = 0
    //         }
    //         console.log('destroy banner')
    //         this.bannerAd.destroy()
    //         this.bannerAd = null
    //         this.initBanner()
    //         this.showBanner()
    //     }
    // }
    //显示banner
    AdMgr.prototype.showBanner = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && this.bannerAd) {
            this.showBannerCount++;
            if (this.isBannerError && !WxApi_1.default.isKillBossUI) {
                ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_SCROLLUI);
            }
            else {
                this.bannerAd.show();
            }
        }
        else {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_SCROLLUI);
        }
    };
    //销毁banner
    AdMgr.prototype.destroyBanner = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && this.bannerAd) {
            this.bannerAd.destroy();
            this.bannerAd = null;
        }
    };
    AdMgr.prototype.initVideo = function () {
        var _this = this;
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
            return;
        }
        //初始化视频
        if (!this.videoAd) {
            this.videoAd = window["wx"].createRewardedVideoAd({
                adUnitId: this.videoUnitId
            });
        }
        this.loadVideo();
        this.videoAd.onLoad(function () {
            console.log('激励视频加载成功');
            _this.videoLoaded = true;
        });
        //视频加载出错
        this.videoAd.onError(function (res) {
            console.log('video Error:', JSON.stringify(res));
            _this.videoIsError = true;
        });
    };
    AdMgr.prototype.loadVideo = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && this.videoAd != null) {
            this.videoIsError = false;
            this.videoAd.load();
        }
    };
    //初始化激励视频
    AdMgr.prototype.showVideo = function (cb) {
        var _this = this;
        this.videoCallback = cb;
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
            this.videoCallback();
            this.videoCloseCallback && this.videoCloseCallback();
            this.videoCloseCallback = null;
            return;
        }
        if (this.videoIsError) {
            ShareMgr_1.default.instance.shareGame(cb);
            this.loadVideo();
            return;
        }
        if (this.videoLoaded == false) {
            WxApi_1.default.OpenAlert('视频正在加载中！');
            return;
        }
        if (this.videoAd) {
            this.videoAd.offClose();
        }
        //关闭声音
        //监听关闭视频
        this.videoAd.onClose(function (res) {
            if (res && res.isEnded || res === undefined) {
                console.log('正常播放结束，可以下发游戏奖励');
                _this.videoCallback();
            }
            else {
                console.log('播放中途退出，不下发游戏奖励');
            }
            _this.videoCloseCallback && _this.videoCloseCallback();
            _this.videoCloseCallback = null;
            //恢复声音
            _this.videoLoaded = false;
            _this.loadVideo();
        });
        this.videoAd.show();
    };
    return AdMgr;
}());
exports.default = AdMgr;

cc._RF.pop();