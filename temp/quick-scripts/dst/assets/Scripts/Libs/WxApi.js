
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Libs/WxApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcV3hBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBZ0Q7QUFDaEQsaURBQTJDO0FBQzNDLHNDQUFnQztBQUVoQztJQUFBO0lBOFBBLENBQUM7SUEvTkcsTUFBTTtJQUNRLGFBQU8sR0FBckIsVUFBc0IsRUFBWTtRQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVztZQUFFLE9BQU07UUFDbEQsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNmLE9BQU8sWUFBQyxHQUFHO2dCQUNQLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25DLElBQUksRUFBRSxFQUFFO3dCQUNKLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtxQkFDakM7aUJBQ0o7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE1BQU07SUFDTixnQ0FBZ0M7SUFDbEIsb0JBQWMsR0FBNUIsVUFBNkIsR0FBYTtRQUExQyxpQkFZQztRQVhHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUE7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7Z0JBQ3JCLGtCQUFr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LHdCQUFrQixHQUFXLENBQUMsQ0FBQTtJQUM5QixhQUFPLEdBQVcsQ0FBQyxDQUFBO0lBQ25CLGtCQUFZLEdBQVksS0FBSyxDQUFBO0lBRTdCLHNCQUFnQixHQUFZLEtBQUssQ0FBQTtJQUNqQyxnQkFBVSxHQUFRLElBQUksQ0FBQTtJQUN0QixlQUFTLEdBQVEsSUFBSSxDQUFBO0lBQ3JCLGFBQU8sR0FBVSxFQUFFLENBQUE7SUFFbkIsZUFBUyxHQUFXLENBQUMsQ0FBQTtJQUNyQixnQkFBVSxHQUFZLElBQUksQ0FBQTtJQUMxQixxQkFBZSxHQUFZLEtBQUssQ0FBQTtJQUVoQyxrQkFBWSxHQUFZLEtBQUssQ0FBQTtJQUU3QixvQkFBYyxHQUFZLEtBQUssQ0FBQTtJQUMvQixrQkFBWSxHQUFZLEtBQUssQ0FBQTtJQUU3QixvQkFBYyxHQUFZLEtBQUssQ0FBQTtJQUUvQixtQkFBYSxHQUFhLElBQUksQ0FBQTtJQUU5QixrQkFBWSxHQUFZLEtBQUssQ0FBQTtJQStLN0IsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFBO0lBZXRCLGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQTtJQW1DeEMsWUFBQztDQTlQRCxBQThQQyxJQUFBO2tCQTlQb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKSk1nciBmcm9tIFwiLi4vLi4vRXhwb3J0TGlicy9FeHBvcnRVdGlsc1wiXHJcbmltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuL1BsYXllckRhdGFNZ3JcIlxyXG5pbXBvcnQgQWRNZ3IgZnJvbSBcIi4uL01vZC9BZE1nclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXeEFwaSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHZlcnNpb246IHN0cmluZyA9ICcxLjAuMCdcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWaWJyYXRlOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgcHVibGljIHN0YXRpYyBpc011c2ljOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgcHVibGljIHN0YXRpYyBPblNob3dGdW46IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBzY29wZUJ0bjogYW55ID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBzaGFyZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbnRfc2hhcmVfbnVtYmVyOiBudW1iZXIgPSAwXHJcbiAgICBwdWJsaWMgc3RhdGljIHNjZW5lSWQ6IG51bWJlciA9IDBcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNLaWxsQm9zc1VJOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdvdE9mZmxpbmVCb3VuZXM6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgcHVibGljIHN0YXRpYyBjb25maWdEYXRhOiBhbnkgPSBudWxsXHJcbiAgICBwdWJsaWMgc3RhdGljIGNybENvbmZpZzogYW55ID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBuYXZEYXRhOiBhbnlbXSA9IFtdXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaGFyZVRpbWU6IG51bWJlciA9IDBcclxuICAgIHB1YmxpYyBzdGF0aWMgZmlyc3RTaGFyZTogYm9vbGVhbiA9IHRydWVcclxuICAgIHB1YmxpYyBzdGF0aWMgaGFkU2hvd0ZyaWVuZFVJOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxhdW5jaEdhbWVVSTogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmaXJzdFN0YXJ0R2FtZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwdWJsaWMgc3RhdGljIGZpcnN0U3RhcnRVSTogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmaXJzdFNob3dWaWRlbzogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtYWRVSUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRnJvbVNraW5VSTogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgLy/lvq7kv6HnmbvlvZVcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9naW5XeChjYjogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtICE9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHJldHVyblxyXG4gICAgICAgIGxldCBsYXVuY2hEYXRhID0gd2luZG93W1wid3hcIl0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgICAgICB3aW5kb3dbXCJ3eFwiXS5sb2dpbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzLmNvZGU6JywgcmVzLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYihyZXMuY29kZSwgbGF1bmNoRGF0YS5xdWVyeSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v55uR5ZCs5ZCv5YqoXHJcbiAgICAvL1VzdWFsbHkgZ2V0IGZ1bihvYmopIG9iai5xdWVyeVxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRMYXVuY2hQYXJhbShmdW46IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHRoaXMuT25TaG93RnVuID0gZnVuXHJcbiAgICAgICAgICAgIGZ1bih0aGlzLkdldExhdW5jaFBhc3NWYXIoKSlcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25TaG93KChwYXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIG9uc2hvdyBGdW5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLk9uU2hvd0Z1biAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5PblNob3dGdW4ocGFyYSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3ggb24gc2hvd1wiKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0TGF1bmNoUGFzc1ZhcigpOiBhbnkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93W1wid3hcIl0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgV3hPbkhpZGUoZnVuOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5vbkhpZGUoZnVuKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgV3hPZmZIaWRlKGZ1bjogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoZnVuICYmIGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLm9mZkhpZGUoZnVuKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgV3hPblNob3coZnVuOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5vblNob3coZnVuKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgV3hPZmZTaG93KGZ1bjogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoZnVuICYmIGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLm9mZlNob3coZnVuKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+mch+WKqFxyXG4gICAgcHVibGljIHN0YXRpYyBEb1ZpYnJhdGUoaXNTaG9ydDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgJiYgdGhpcy5pc1ZpYnJhdGUpIHtcclxuICAgICAgICAgICAgaWYgKGlzU2hvcnQpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLnZpYnJhdGVTaG9ydCgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS52aWJyYXRlTG9uZygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ns7vnu5/mj5DnpLpcclxuICAgIHB1YmxpYyBzdGF0aWMgT3BlbkFsZXJ0KG1zZzogc3RyaW5nLCBkdXI6IG51bWJlciA9IDIwMDAsIGljb246IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1zZywvL+aPkOekuuaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1ciwvL+aYvuekuuaXtumVv1xyXG4gICAgICAgICAgICAgICAgbWFzazogZmFsc2UsLy/mmK/lkKbmmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI/vvIzpu5jorqTvvJpmYWxzZSAgXHJcbiAgICAgICAgICAgICAgICBpY29uOiBpY29uID8gJ3N1Y2Nlc3MnIDogJ25vbmUnLCAvL+Wbvuagh++8jOaUr+aMgVwic3VjY2Vzc1wi44CBXCJsb2FkaW5nXCIgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+i3s+i9rFxyXG4gICAgcHVibGljIHN0YXRpYyBOYXZpZ2F0ZUFwcChhcHBpZDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGNhbmNlbENCOiBGdW5jdGlvbiwgc3VjY2Vzc0NCOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBpZCxcclxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaJk+W8gOaIkOWKn1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDmiJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDQigpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmiZPlvIDlpLHotKVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5aSx6LSlJylcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDQigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6aKE6KeI5Zu+54mHXHJcbiAgICBwdWJsaWMgc3RhdGljIHByZVZpZXdJbWFnZSh1cmwpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ucHJldmlld0ltYWdlKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHVybCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxyXG4gICAgICAgICAgICAgICAgdXJsczogW3VybF0gLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+mYv+aLieS4gee7n+iuoeS6i+S7tlxyXG4gICAgcHVibGljIHN0YXRpYyBhbGRFdmVudChzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSlcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0uYWxkU2VuZEV2ZW50KHN0cilcclxuICAgIH1cclxuXHJcbiAgICAvL+iuoeeul+WIhuS6q+asoeaVsFxyXG4gICAgcHVibGljIHN0YXRpYyBjYWxjdWxhdGVTaGFyZU51bWJlcigpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3REYXRlJykpIHtcclxuICAgICAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpID09IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYXN0RGF0ZScpKSkge1xyXG4gICAgICAgICAgICAgICAgLy/lkIzkuIDlpKlcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJvbnRfc2hhcmVfbnVtYmVyID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zyb250X3NoYXJlX251bWJlcicpKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/mlrDnmoTkuIDlpKlcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJvbnRfc2hhcmVfbnVtYmVyID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3NoYXJlX251bWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/mlrDnmoTkuIDlpKlcclxuICAgICAgICAgICAgdGhpcy5mcm9udF9zaGFyZV9udW1iZXIgPSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfc2hhcmVfbnVtYmVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZyb250X3NoYXJlX251bWJlcjonLCB0aGlzLmZyb250X3NoYXJlX251bWJlcilcclxuICAgIH1cclxuXHJcbiAgICAvL+ivr+inpuaOp+WItlxyXG4gICAgcHVibGljIHN0YXRpYyBmaXhCdG5Ub3VjaFBvcyhidG4sIHN0YXJ0UG9zWSwgZW5kUG9zWSwgdGFyZ2V0LCBjYj86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJhbm5lcigpKSB7XHJcbiAgICAgICAgICAgIGJ0bi55ID0gc3RhcnRQb3NZXHJcbiAgICAgICAgICAgIHRhcmdldC5zY2hlZHVsZU9uY2UoKCkgPT4geyBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKCkgfSwgSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2Jhbm5lcl9hcHBlYXIgLyAxMDAwKVxyXG4gICAgICAgICAgICB0YXJnZXQuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ0bi55ID0gZW5kUG9zWVxyXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKVxyXG4gICAgICAgICAgICB9LCBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfYnV0dG9uX3VwIC8gMTAwMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgY2IgJiYgY2IoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVmFsaWRCYW5uZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlID49IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9wYXNzX2dhdGUgJiYgSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmlzX2FsbG93X2FyZWEgPT0gMVxyXG4gICAgICAgICAgICAmJiB0aGlzLmFsbG93U2NlbmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYWxsb3dTY2VuZSgpIHtcclxuICAgICAgICBsZXQgczogc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3d1Y2h1X3NjZW5lLnRvU3RyaW5nKClcclxuICAgICAgICBpZiAocy5zZWFyY2goJ3wnKSA9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgc0ludDogbnVtYmVyID0gcGFyc2VJbnQocylcclxuICAgICAgICAgICAgcmV0dXJuIHNJbnQgIT0gV3hBcGkuc2NlbmVJZFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc0Fycjogc3RyaW5nW10gPSBzLnNwbGl0KCd8JylcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHNJbnQ6IG51bWJlciA9IHBhcnNlSW50KHNBcnJbaV0pXHJcbiAgICAgICAgICAgIGlmIChzSW50ID09IFd4QXBpLnNjZW5lSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBiYW5uZXJUTzI6IG51bWJlciA9IC0xXHJcbiAgICBwdWJsaWMgc3RhdGljIGJhbm5lcld1Q2h1MigpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5iYW5uZXJUTzIpXHJcbiAgICAgICAgQWRNZ3IuaW5zdGFuY2UuaGlkZUJhbm5lcigpXHJcbiAgICAgICAgaWYgKFd4QXBpLmlzVmFsaWRCYW5uZXIoKSkge1xyXG4gICAgICAgICAgICBsZXQgdXBUaW1lID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2V4cG9ydF9iYW5uZXJfYXBwZWFyXHJcbiAgICAgICAgICAgIGxldCBkb3duVGltZSA9IHVwVGltZSArIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9leHBvcnRfYmFubmVyX2hpZGVcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJUTzIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLnNob3dCYW5uZXIoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJUTzIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICAgICAgICAgIH0sIGRvd25UaW1lKVxyXG4gICAgICAgICAgICB9LCB1cFRpbWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBiYW5uZXJUTzE6IG51bWJlciA9IC0xXHJcbiAgICBwdWJsaWMgc3RhdGljIGJhbm5lcld1Q2h1MSgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5iYW5uZXJUTzEpXHJcbiAgICAgICAgQWRNZ3IuaW5zdGFuY2UuaGlkZUJhbm5lcigpXHJcbiAgICAgICAgaWYgKFd4QXBpLmlzVmFsaWRCYW5uZXIoKSkge1xyXG4gICAgICAgICAgICBsZXQgdXBUaW1lID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2Jhb2t1YW5fYmFubmVyX2FwcGVhclxyXG4gICAgICAgICAgICBsZXQgZG93blRpbWUgPSB1cFRpbWUgKyBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfYmFva3Vhbl9iYW5uZXJfaGlkZVxyXG4gICAgICAgICAgICB0aGlzLmJhbm5lclRPMSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2Uuc2hvd0Jhbm5lcigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lclRPMSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgICAgICAgICAgfSwgZG93blRpbWUpXHJcbiAgICAgICAgICAgIH0sIHVwVGltZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJc0V4cG9ydFZhbGlkKCkge1xyXG4gICAgICAgIHJldHVybiBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfYWxsX2V4cG9ydF9zd2l0Y2hcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNwbGl0U2VjdGlvbigpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgbGV0IHM6IHN0cmluZyA9IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF93YXRlcl9zZWN0aW9uLnRvU3RyaW5nKClcclxuICAgICAgICBpZiAocy5zZWFyY2goJ3wnKSA9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgc0ludDogbnVtYmVyID0gcGFyc2VJbnQocylcclxuICAgICAgICAgICAgcmV0dXJuIFtzSW50XVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc0Fycjogc3RyaW5nW10gPSBzLnNwbGl0KCd8JylcclxuICAgICAgICBsZXQgaUFycjogbnVtYmVyW10gPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc0ludDogbnVtYmVyID0gcGFyc2VJbnQoc0FycltpXSlcclxuICAgICAgICAgICAgaUFyci5wdXNoKHNJbnQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpQXJyXHJcbiAgICB9XHJcblxyXG59Il19