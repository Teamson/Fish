"use strict";
cc._RF.push(module, '1422d0RQTFIsqDE3wK3oZ2e', 'WxApi');
// Scripts/Libs/WxApi.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var PlayerDataMgr_1 = require("./PlayerDataMgr");
var AdMgr_1 = require("../Mod/AdMgr");
var WxApi = /** @class */ (function () {
    function WxApi() {
    }
    //微信登录
    WxApi.LoginWx = function (cb) {
        if (cc.sys.platform !== cc.sys.WECHAT_GAME)
            return;
        var launchData = window["wx"].getLaunchOptionsSync();
        window["wx"].login({
            success: function (res) {
                if (res.code) {
                    console.log('res.code:', res.code);
                    if (cb) {
                        cb(res.code, launchData.query);
                    }
                }
            }
        });
    };
    //监听启动
    //Usually get fun(obj) obj.query
    WxApi.GetLaunchParam = function (fun) {
        var _this = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            this.OnShowFun = fun;
            fun(this.GetLaunchPassVar());
            window["wx"].onShow(function (para) {
                //check onshow Fun
                if (_this.OnShowFun != null) {
                    _this.OnShowFun(para);
                }
                console.log("wx on show");
            });
        }
    };
    WxApi.GetLaunchPassVar = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            return window["wx"].getLaunchOptionsSync();
        }
        else {
            return null;
        }
    };
    WxApi.WxOnHide = function (fun) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].onHide(fun);
        }
    };
    WxApi.WxOffHide = function (fun) {
        if (fun && cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].offHide(fun);
        }
    };
    WxApi.WxOnShow = function (fun) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].onShow(fun);
        }
    };
    WxApi.WxOffShow = function (fun) {
        if (fun && cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].offShow(fun);
        }
    };
    //震动
    WxApi.DoVibrate = function (isShort) {
        if (isShort === void 0) { isShort = true; }
        if (cc.sys.platform === cc.sys.WECHAT_GAME && this.isVibrate) {
            if (isShort) {
                window["wx"].vibrateShort();
            }
            else {
                window["wx"].vibrateLong();
            }
        }
    };
    //系统提示
    WxApi.OpenAlert = function (msg, dur, icon) {
        if (dur === void 0) { dur = 2000; }
        if (icon === void 0) { icon = false; }
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].showToast({
                title: msg,
                duration: dur,
                mask: false,
                icon: icon ? 'success' : 'none',
            });
        }
    };
    //跳转
    WxApi.NavigateApp = function (appid, path, title, cancelCB, successCB) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            var self = this;
            window["wx"].navigateToMiniProgram({
                appId: appid,
                path: path,
                success: function (res) {
                    // 打开成功
                    console.log('打开成功');
                    successCB();
                },
                fail: function (res) {
                    // 打开失败
                    console.log('打开失败');
                    cancelCB();
                }
            });
        }
    };
    //预览图片
    WxApi.preViewImage = function (url) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window["wx"].previewImage({
                current: url,
                urls: [url] // 需要预览的图片http链接列表
            });
        }
    };
    //阿拉丁统计事件
    WxApi.aldEvent = function (str) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME)
            window["wx"].aldSendEvent(str);
    };
    //计算分享次数
    WxApi.calculateShareNumber = function () {
        if (localStorage.getItem('lastDate')) {
            if (new Date().getDate() == parseInt(localStorage.getItem('lastDate'))) {
                //同一天
                this.front_share_number = parseInt(localStorage.getItem('front_share_number'));
            }
            else {
                //新的一天
                this.front_share_number = ExportUtils_1.default.instance.exportCfg.front_share_number;
            }
        }
        else {
            //新的一天
            this.front_share_number = ExportUtils_1.default.instance.exportCfg.front_share_number;
        }
        console.log('this.front_share_number:', this.front_share_number);
    };
    //误触控制
    WxApi.fixBtnTouchPos = function (btn, startPosY, endPosY, target, cb) {
        if (this.isValidBanner()) {
            btn.y = startPosY;
            target.scheduleOnce(function () { AdMgr_1.default.instance.showBanner(); }, ExportUtils_1.default.instance.exportCfg.front_banner_appear / 1000);
            target.scheduleOnce(function () {
                btn.y = endPosY;
                cb && cb();
            }, ExportUtils_1.default.instance.exportCfg.front_button_up / 1000);
        }
        else {
            AdMgr_1.default.instance.showBanner();
            cb && cb();
        }
    };
    WxApi.isValidBanner = function () {
        return PlayerDataMgr_1.default.getPlayerData().grade >= ExportUtils_1.default.instance.exportCfg.front_pass_gate && ExportUtils_1.default.instance.exportCfg.is_allow_area == 1
            && this.allowScene();
    };
    WxApi.allowScene = function () {
        var s = ExportUtils_1.default.instance.exportCfg.front_wuchu_scene.toString();
        if (s.search('|') == -1) {
            var sInt = parseInt(s);
            return sInt != WxApi.sceneId;
        }
        var sArr = s.split('|');
        for (var i = 0; i < sArr.length; i++) {
            var sInt = parseInt(sArr[i]);
            if (sInt == WxApi.sceneId) {
                return false;
            }
        }
        return true;
    };
    WxApi.bannerWuChu2 = function () {
        var _this = this;
        clearTimeout(this.bannerTO2);
        AdMgr_1.default.instance.hideBanner();
        if (WxApi.isValidBanner()) {
            var upTime = ExportUtils_1.default.instance.exportCfg.front_export_banner_appear;
            var downTime_1 = upTime + ExportUtils_1.default.instance.exportCfg.front_export_banner_hide;
            this.bannerTO2 = setTimeout(function () {
                AdMgr_1.default.instance.showBanner();
                _this.bannerTO2 = setTimeout(function () {
                    AdMgr_1.default.instance.hideBanner();
                }, downTime_1);
            }, upTime);
        }
    };
    WxApi.bannerWuChu1 = function () {
        var _this = this;
        clearTimeout(this.bannerTO1);
        AdMgr_1.default.instance.hideBanner();
        if (WxApi.isValidBanner()) {
            var upTime = ExportUtils_1.default.instance.exportCfg.front_baokuan_banner_appear;
            var downTime_2 = upTime + ExportUtils_1.default.instance.exportCfg.front_baokuan_banner_hide;
            this.bannerTO1 = setTimeout(function () {
                AdMgr_1.default.instance.showBanner();
                _this.bannerTO1 = setTimeout(function () {
                    AdMgr_1.default.instance.hideBanner();
                }, downTime_2);
            }, upTime);
        }
    };
    WxApi.getIsExportValid = function () {
        return ExportUtils_1.default.instance.exportCfg.front_all_export_switch;
    };
    WxApi.splitSection = function () {
        var s = ExportUtils_1.default.instance.exportCfg.front_water_section.toString();
        if (s.search('|') == -1) {
            var sInt = parseInt(s);
            return [sInt];
        }
        var sArr = s.split('|');
        var iArr = [];
        for (var i = 0; i < sArr.length; i++) {
            var sInt = parseInt(sArr[i]);
            iArr.push(sInt);
        }
        return iArr;
    };
    WxApi.version = '1.0.0';
    WxApi.isVibrate = true;
    WxApi.isMusic = true;
    WxApi.OnShowFun = null;
    WxApi.scopeBtn = null;
    WxApi.shareCallback = null;
    WxApi.front_share_number = 0;
    WxApi.sceneId = 0;
    WxApi.isKillBossUI = false;
    WxApi.gotOfflineBounes = false;
    WxApi.configData = null;
    WxApi.crlConfig = null;
    WxApi.navData = [];
    WxApi.shareTime = 0;
    WxApi.firstShare = true;
    WxApi.hadShowFriendUI = false;
    WxApi.launchGameUI = false;
    WxApi.firstStartGame = false;
    WxApi.firstStartUI = false;
    WxApi.firstShowVideo = false;
    WxApi.madUICallback = null;
    WxApi.isFromSkinUI = false;
    WxApi.bannerTO2 = -1;
    WxApi.bannerTO1 = -1;
    return WxApi;
}());
exports.default = WxApi;

cc._RF.pop();