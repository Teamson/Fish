
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/AdMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxBZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVDQUFrQztBQUNsQyx1Q0FBa0M7QUFDbEMsNERBQWdFO0FBRWhFO0lBQUE7UUFTWSxpQkFBWSxHQUFhLENBQUMseUJBQXlCLEVBQUUseUJBQXlCLENBQUMsQ0FBQTtRQUMvRSxnQkFBVyxHQUFXLHlCQUF5QixDQUFBO1FBQy9DLGFBQVEsR0FBUSxJQUFJLENBQUE7UUFDcEIsWUFBTyxHQUFRLElBQUksQ0FBQTtRQUNwQixrQkFBYSxHQUFhLElBQUksQ0FBQTtRQUM5Qix1QkFBa0IsR0FBYSxJQUFJLENBQUE7UUFDbEMsZ0JBQVcsR0FBVyxDQUFDLENBQUE7UUFDeEIsb0JBQWUsR0FBVyxDQUFDLENBQUE7UUFFM0IsaUJBQVksR0FBWSxJQUFJLENBQUE7UUFDM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUE7UUFDN0Isa0JBQWEsR0FBWSxJQUFJLENBQUE7SUFpTXhDLENBQUM7SUFuTkcsc0JBQWtCLGlCQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQTthQUMvQjtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQWVELHNCQUFNLEdBQU47UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtZQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDbkI7SUFDTCxDQUFDO0lBRUQsV0FBVztJQUNYLDBCQUFVLEdBQVY7UUFBQSxpQkEwQ0M7UUF6Q0csSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUE7UUFDMUIsV0FBVztRQUNYLElBQUks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QkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO2dCQUM5QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7YUFDdkI7aUJBQ0k7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2FBQ2hDO1lBQ0QsS0FBSSxDQUFDLGtCQUFrQixJQUFJLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1lBQ3BELEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUE7WUFDOUIsTUFBTTtZQUVOLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFBO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQXJOQSxBQXFOQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vVXRpbGl0eVwiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uL0xpYnMvV3hBcGlcIjtcclxuaW1wb3J0IFNoYXJlTWdyIGZyb20gXCIuL1NoYXJlTWdyXCI7XHJcbmltcG9ydCBKSk1nciwgeyBFeHBvcnREaXIgfSBmcm9tIFwiLi4vLi4vRXhwb3J0TGlicy9FeHBvcnRVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRNZ3Ige1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBBZE1nclxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogQWRNZ3Ige1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQWRNZ3IoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJhbm5lclVuaXRJZDogc3RyaW5nW10gPSBbJ2FkdW5pdC04Y2VlYmNhZmEyNzFkNGQyJywgJ2FkdW5pdC0yOGY4MzlkYzU3YmUwZWRkJ11cclxuICAgIHByaXZhdGUgdmlkZW9Vbml0SWQ6IHN0cmluZyA9ICdhZHVuaXQtNDMwOTVhMGQ5YjM1ZDExNSdcclxuICAgIHByaXZhdGUgYmFubmVyQWQ6IGFueSA9IG51bGxcclxuICAgIHByaXZhdGUgdmlkZW9BZDogYW55ID0gbnVsbFxyXG4gICAgcHVibGljIHZpZGVvQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgcHVibGljIHZpZGVvQ2xvc2VDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsXHJcbiAgICBwcml2YXRlIGN1ckJhbm5lcklkOiBudW1iZXIgPSAwXHJcbiAgICBwdWJsaWMgc2hvd0Jhbm5lckNvdW50OiBudW1iZXIgPSAwXHJcblxyXG4gICAgcHVibGljIHZpZGVvSXNFcnJvcjogYm9vbGVhbiA9IHRydWVcclxuICAgIHByaXZhdGUgdmlkZW9Mb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgcHVibGljIGlzQmFubmVyRXJyb3I6IGJvb2xlYW4gPSB0cnVlXHJcblxyXG4gICAgaW5pdEFkKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRCYW5uZXIoKVxyXG4gICAgICAgICAgICB0aGlzLmluaXRWaWRlbygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWYmFubmVyXHJcbiAgICBpbml0QmFubmVyKCkge1xyXG4gICAgICAgIHRoaXMuaXNCYW5uZXJFcnJvciA9IGZhbHNlXHJcbiAgICAgICAgLy/pgILphY1pcGhvbmVYXHJcbiAgICAgICAgbGV0IGlzSXBob25leCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLmdldFN5c3RlbUluZm8oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kZWxtZXMgPSByZXMubW9kZWxcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxtZXMuc2VhcmNoKCdpUGhvbmUgWCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSXBob25leCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgd2luU2l6ZSA9IHdpbmRvd1tcInd4XCJdLmdldFN5c3RlbUluZm9TeW5jKClcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJZiYW5uZXJcclxuICAgICAgICB0aGlzLmJhbm5lckFkID0gd2luZG93W1wid3hcIl0uY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICBhZFVuaXRJZDogdGhpcy5iYW5uZXJVbml0SWRbdGhpcy5jdXJCYW5uZXJJZF0sXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL+ebkeWQrGJhbm5lcuWwuuWvuOS/ruato1xyXG4gICAgICAgIHRoaXMuYmFubmVyQWQub25SZXNpemUocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzSXBob25leCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5zdHlsZS50b3AgPSB3aW5TaXplLndpbmRvd0hlaWdodCAtIHRoaXMuYmFubmVyQWQuc3R5bGUucmVhbEhlaWdodCAtIDEwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lckFkLnN0eWxlLnRvcCA9IHdpblNpemUud2luZG93SGVpZ2h0IC0gdGhpcy5iYW5uZXJBZC5zdHlsZS5yZWFsSGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5zdHlsZS5sZWZ0ID0gd2luU2l6ZS53aW5kb3dXaWR0aCAvIDIgLSB0aGlzLmJhbm5lckFkLnN0eWxlLnJlYWxXaWR0aCAvIDJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmJhbm5lckFkLm9uRXJyb3IocmVzID0+IHtcclxuICAgICAgICAgICAgLy8g6ZSZ6K+v5LqL5Lu2XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiYW5uZXIgZXJyb3I6JywgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgICAgICAgdGhpcy5pc0Jhbm5lckVycm9yID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+makOiXj2Jhbm5lclxyXG4gICAgaGlkZUJhbm5lcigpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgJiYgdGhpcy5iYW5uZXJBZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Jhbm5lckVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5jbG9zZUV4cG9ydFVJKEV4cG9ydERpci5WSUVXX1NDUk9MTFVJKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5oaWRlKClcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnICE9IG51bGwgJiYgdGhpcy5zaG93QmFubmVyQ291bnQgPj0gcGFyc2VJbnQoSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2Jhbm5lcl9udW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QmFubmVyQ291bnQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJCYW5uZXJJZCsrXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyQmFubmVySWQgPj0gdGhpcy5iYW5uZXJVbml0SWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyQmFubmVySWQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVzdHJveSBiYW5uZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyQWQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJBZCA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCYW5uZXIoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UuY2xvc2VFeHBvcnRVSShFeHBvcnREaXIuVklFV19TQ1JPTExVSSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY291bnRCYW5uZXIoKSB7XHJcbiAgICAvLyAgICAgaWYgKEpKTWdyLmluc3RhbmNlLmRhdGFDb25maWcgIT0gbnVsbCAmJiB0aGlzLnNob3dCYW5uZXJDb3VudCA+IHBhcnNlSW50KEpKTWdyLmluc3RhbmNlLmRhdGFDb25maWcuZnJvbnRfYmFubmVyX251bWJlcikpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5iYW5uZXJBZC5oaWRlKClcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93QmFubmVyQ291bnQgPSAwXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY3VyQmFubmVySWQrK1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5jdXJCYW5uZXJJZCA+PSB0aGlzLmJhbm5lclVuaXRJZC5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3VyQmFubmVySWQgPSAwXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdkZXN0cm95IGJhbm5lcicpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYmFubmVyQWQuZGVzdHJveSgpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYmFubmVyQWQgPSBudWxsXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaW5pdEJhbm5lcigpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd0Jhbm5lcigpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8v5pi+56S6YmFubmVyXHJcbiAgICBzaG93QmFubmVyKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiB0aGlzLmJhbm5lckFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Jhbm5lckNvdW50KytcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCYW5uZXJFcnJvciAmJiAhV3hBcGkuaXNLaWxsQm9zc1VJKSB7XHJcbiAgICAgICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5zaG93RXhwb3J0VUkoRXhwb3J0RGlyLlZJRVdfU0NST0xMVUkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lckFkLnNob3coKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX1NDUk9MTFVJKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6ZSA5q+BYmFubmVyXHJcbiAgICBkZXN0cm95QmFubmVyKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiB0aGlzLmJhbm5lckFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRWaWRlbygpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtICE9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yid5aeL5YyW6KeG6aKRXHJcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvQWQpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkID0gd2luZG93W1wid3hcIl0uY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLnZpZGVvVW5pdElkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRWaWRlbygpXHJcbiAgICAgICAgdGhpcy52aWRlb0FkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopHliqDovb3miJDlip8nKVxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvTG9hZGVkID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy/op4bpopHliqDovb3lh7rplJlcclxuICAgICAgICB0aGlzLnZpZGVvQWQub25FcnJvcihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gRXJyb3I6JywgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgICAgICAgdGhpcy52aWRlb0lzRXJyb3IgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVmlkZW8oKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FICYmIHRoaXMudmlkZW9BZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Jc0Vycm9yID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkLmxvYWQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMlua/gOWKseinhumikVxyXG4gICAgc2hvd1ZpZGVvKGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMudmlkZW9DYWxsYmFjayA9IGNiXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9DYWxsYmFjaygpXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9DbG9zZUNhbGxiYWNrICYmIHRoaXMudmlkZW9DbG9zZUNhbGxiYWNrKClcclxuICAgICAgICAgICAgdGhpcy52aWRlb0Nsb3NlQ2FsbGJhY2sgPSBudWxsXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9Jc0Vycm9yKSB7XHJcbiAgICAgICAgICAgIFNoYXJlTWdyLmluc3RhbmNlLnNoYXJlR2FtZShjYilcclxuICAgICAgICAgICAgdGhpcy5sb2FkVmlkZW8oKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvTG9hZGVkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIFd4QXBpLk9wZW5BbGVydCgn6KeG6aKR5q2j5Zyo5Yqg6L295Lit77yBJylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWRlb0FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZC5vZmZDbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5YWz6Zet5aOw6Z+zXHJcblxyXG4gICAgICAgIC8v55uR5ZCs5YWz6Zet6KeG6aKRXHJcbiAgICAgICAgdGhpcy52aWRlb0FkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsScpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQ2FsbGJhY2soKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52aWRlb0Nsb3NlQ2FsbGJhY2sgJiYgdGhpcy52aWRlb0Nsb3NlQ2FsbGJhY2soKVxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ2xvc2VDYWxsYmFjayA9IG51bGxcclxuICAgICAgICAgICAgLy/mgaLlpI3lo7Dpn7NcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Mb2FkZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRWaWRlbygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy52aWRlb0FkLnNob3coKVxyXG4gICAgfVxyXG5cclxufSJdfQ==