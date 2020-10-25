
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/ExportLibs/AutoScroll');
require('./assets/ExportLibs/ExportCrl');
require('./assets/ExportLibs/ExportHttpUtils');
require('./assets/ExportLibs/ExportUtils');
require('./assets/ExportLibs/View/DrawUI');
require('./assets/ExportLibs/View/FinishGameUI');
require('./assets/ExportLibs/View/FriendGameUI');
require('./assets/ExportLibs/View/FullGameUI');
require('./assets/ExportLibs/View/RecommendUI');
require('./assets/ExportLibs/View/ScrollUI');
require('./assets/Scripts/Crl/GameLogic');
require('./assets/Scripts/Crl/Level/Level1');
require('./assets/Scripts/Crl/Level/Level10');
require('./assets/Scripts/Crl/Level/Level2');
require('./assets/Scripts/Crl/Level/Level3');
require('./assets/Scripts/Crl/Level/Level4');
require('./assets/Scripts/Crl/Level/Level5');
require('./assets/Scripts/Crl/Level/Level6');
require('./assets/Scripts/Crl/Level/Level7');
require('./assets/Scripts/Crl/Level/Level8');
require('./assets/Scripts/Crl/Level/Level9');
require('./assets/Scripts/Crl/Level/LevelBase');
require('./assets/Scripts/Crl/Player');
require('./assets/Scripts/Crl/Prop/HeadNode');
require('./assets/Scripts/Crl/Prop/Meat');
require('./assets/Scripts/Crl/Prop/Needle');
require('./assets/Scripts/Crl/Prop/Poison');
require('./assets/Scripts/Crl/Prop/RotateNeedle');
require('./assets/Scripts/Crl/Prop/SlideNeedle');
require('./assets/Scripts/Crl/Prop/Stone');
require('./assets/Scripts/Crl/Prop/ThreeNeedle');
require('./assets/Scripts/Crl/Sharp');
require('./assets/Scripts/Libs/PlayerDataMgr');
require('./assets/Scripts/Libs/ScaleLoop');
require('./assets/Scripts/Libs/TimeCountMgr');
require('./assets/Scripts/Libs/WxApi');
require('./assets/Scripts/Mod/AdMgr');
require('./assets/Scripts/Mod/HttpMgr');
require('./assets/Scripts/Mod/ShareMgr');
require('./assets/Scripts/Mod/SoundMgr');
require('./assets/Scripts/Mod/Utility');
require('./assets/Scripts/UI/FinishUI');
require('./assets/Scripts/UI/LoadingUI');
require('./assets/Scripts/UI/StartUI');
require('./assets/Scripts/UI/WeChatUI');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56680tb3D5EO7YROulSA49U', 'Level4');
// Scripts/Crl/Level/Level4.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level4 = /** @class */ (function (_super) {
    __extends(Level4, _super);
    function Level4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level4.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.SharpCrl.moveToPoint(3)];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level4.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.meatNode.isValid) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.meatCrl.triggerCB()];
                    case 1:
                        _a.sent();
                        if (!(this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(0).switchState > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.canTouch = true;
                        return [3 /*break*/, 12];
                    case 4:
                        if (!(this.SharpCrl.pointIndex == 2)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6:
                        if (!(this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(0).switchState > 0)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                    case 9: return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    Level4.prototype.trigger11 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.SharpCrl.pointIndex == 3 && this.playerCrl.pointIndex == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        if (!(this.SharpCrl.pointIndex == 3 && this.playerCrl.pointIndex == 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Level4.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.meatCrl.isTriggered) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level4 = __decorate([
        ccclass
    ], Level4);
    return Level4;
}(LevelBase_1.default));
exports.default = Level4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVM7SUFBN0M7O0lBK0NBLENBQUM7SUE3Q1MsMEJBQVMsR0FBZjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7d0JBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7OztLQUN2QjtJQUNLLDBCQUFTLEdBQWY7Ozs7OzZCQUNRLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFyQix3QkFBcUI7d0JBQ3JCLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFBOzZCQUMxQixDQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQSxFQUF6RSx3QkFBeUU7d0JBQ3pFLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMsc0JBQU07O3dCQUVWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7NkJBRWhCLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFBLEVBQTdCLHdCQUE2Qjt3QkFDN0IscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBO3dCQUNsQyxzQkFBTTs7NkJBQ0osQ0FBQSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUEsRUFBekUsd0JBQXlFO3dCQUMzRSxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7d0JBQ2xDLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMsc0JBQU07NEJBRU4scUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7Ozs7OztLQUc5QztJQUNLLDBCQUFTLEdBQWY7Ozs7OzZCQUNRLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUEvRCx3QkFBK0Q7d0JBQy9ELHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMsc0JBQU07OzZCQUNDLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUEvRCx3QkFBK0Q7d0JBQ3RFLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBOzs7Ozs7S0FFekM7SUFDSywwQkFBUyxHQUFmOzs7Ozs2QkFDTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUF6Qix3QkFBeUI7d0JBQ3hCLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs7NEJBRW5DLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7Ozt3QkFFdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7O0tBQ3ZCO0lBOUNnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBK0MxQjtJQUFELGFBQUM7Q0EvQ0QsQUErQ0MsQ0EvQ21DLG1CQUFTLEdBK0M1QztrQkEvQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsNCBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1lYXROb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5tZWF0Q3JsLnRyaWdnZXJDQigpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMyAmJiB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMCkuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gaWYgKHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSAzICYmIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgwKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSAzICYmIHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDMgJiYgdGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICBpZighdGhpcy5tZWF0Q3JsLmlzVHJpZ2dlcmVkKXtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoNClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/FriendGameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6bf1qdOV5POYvxGOLUycuW', 'FriendGameUI');
// ExportLibs/View/FriendGameUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../ExportUtils");
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FriendGameUI = /** @class */ (function (_super) {
    __extends(FriendGameUI, _super);
    function FriendGameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.myNavArr = [];
        _this.closeCallback = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    FriendGameUI.prototype.start = function () {
    };
    FriendGameUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        this.node.active = true;
        WxApi_1.default.aldEvent('好友都在玩的爆款游戏弹窗出现次数');
    };
    FriendGameUI.prototype.onEnable = function () {
        var _this = this;
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
        this.node.getChildByName('closeBtn').active = false;
        this.scheduleOnce(function () {
            _this.node.getChildByName('closeBtn').active = true;
            AdMgr_1.default.instance.hideBanner();
            WxApi_1.default.bannerWuChu1();
        }, 1.5);
    };
    FriendGameUI.prototype.onDisable = function () {
        clearTimeout(WxApi_1.default.bannerTO1);
        AdMgr_1.default.instance.hideBanner();
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
    };
    FriendGameUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    FriendGameUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    FriendGameUI.prototype.navCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('好友都在玩的爆款游戏弹窗-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI);
        }, function () {
            WxApi_1.default.aldEvent('好友都在玩的爆款游戏弹窗-总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], FriendGameUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FriendGameUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], FriendGameUI.prototype, "content", void 0);
    FriendGameUI = __decorate([
        ccclass
    ], FriendGameUI);
    return FriendGameUI;
}(cc.Component));
exports.default = FriendGameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRnJpZW5kR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBQTRDO0FBR3RDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFEdEQ7UUFBQSxxRUFpRkM7UUE3RUcsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLGNBQVEsR0FBVSxFQUFFLENBQUE7UUFFcEIsbUJBQWEsR0FBYSxJQUFJLENBQUE7O1FBa0U5QixpQkFBaUI7SUFDckIsQ0FBQztJQWpFRyxlQUFlO0lBRWYsNEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sUUFBbUIsRUFBRSxLQUFXO1FBQ25DLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUE7U0FDaEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdkIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FB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QUQsbUJBQUM7Q0FoRkQsQUFnRkMsQ0FoRnlDLEVBQUUsQ0FBQyxTQUFTLEdBZ0ZyRDtrQkFoRm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTW9kL1V0aWxpdHlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRHYW1lVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJKGNhbGxiYWNrPzogRnVuY3Rpb24sIHBhcmFtPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+mDveWcqOeOqeeahOeIhuasvua4uOaIj+W8ueeql+WHuueOsOasoeaVsCcpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2Nsb3NlQnRuJykuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnY2xvc2VCdG4nKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgICAgICBXeEFwaS5iYW5uZXJXdUNodTEoKVxyXG4gICAgICAgIH0sIDEuNSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KFd4QXBpLmJhbm5lclRPMSlcclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIHRoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayAmJiB0aGlzLmNsb3NlQ2FsbGJhY2soKVxyXG4gICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlOYXZBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSlcclxuXHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBjYy5MYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICAgICAgICAgIG5hbWUuc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UuZ2V0U3VidGl0bGUoaSlcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UubG9hZEltZ0J5VXJsKGljb24sIHRoaXMubXlOYXZBcnJbaV0uaWNvbilcclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaSkgfSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VDQigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBuYXZDQihldmVudDogY2MuRXZlbnQsIGlkOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgaWQ6JywgaWQpXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+mDveWcqOeOqeeahOeIhuasvua4uOaIj+W8ueeqly3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLk5hdmlnYXRlQXBwKGlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19GVUxMR0FNRVVJKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+mDveWcqOeOqeeahOeIhuasvua4uOaIj+W8ueeqly3mgLvmiJDlip/ot7PovazmlbAnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfb5f4tupVJtZQnbhglHLq/', 'Level7');
// Scripts/Crl/Level/Level7.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Stone_1 = require("../Prop/Stone");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level7 = /** @class */ (function (_super) {
    __extends(Level7, _super);
    function Level7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level7.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Stone_1.default.Share.triggerCB()];
                    case 1:
                        _a.sent();
                        if (!(this.getNeedleCrlById(3).switchState > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Stone_1.default.Share.triggerCB()];
                    case 2:
                        _a.sent();
                        this.loseCB();
                        return [2 /*return*/];
                    case 3:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level7.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.meatCrl.triggerCB()];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level7.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        if (!(this.Sharp.isValid && this.SharpCrl.pointIndex == 2)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        if (!(this.Sharp.isValid && this.SharpCrl.pointIndex == 3 && this.getNeedleCrlById(3).switchState > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level7.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.SharpCrl.moveToPoint(3)];
                    case 1:
                        _a.sent();
                        if (!Stone_1.default.Share.isTriggered) return [3 /*break*/, 3];
                        return [4 /*yield*/, Stone_1.default.Share.triggerCB()];
                    case 2:
                        _a.sent();
                        LevelBase_1.default.Share.loseCB();
                        return [2 /*return*/];
                    case 3:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level7.prototype.trigger40 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.Sharp.isValid && this.SharpCrl.pointIndex == 3)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        if (!(this.playerCrl.pointIndex == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                    case 4:
                        if (!(this.playerCrl.pointIndex == 1)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    Level7 = __decorate([
        ccclass
    ], Level7);
    return Level7;
}(LevelBase_1.default));
exports.default = Level7;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBQ2xDLHlDQUFvQztBQUU5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFTO0lBQTdDOztJQW1EQSxDQUFDO0lBakRTLDBCQUFTLEdBQWY7Ozs7NEJBQ0kscUJBQU0sZUFBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQTdCLFNBQTZCLENBQUE7NkJBQ3pCLENBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUEsRUFBeEMsd0JBQXdDO3dCQUN4QyxxQkFBTSxlQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBN0IsU0FBNkIsQ0FBQTt3QkFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO3dCQUNiLHNCQUFNOzt3QkFFVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7S0FDdkI7SUFDSywwQkFBUyxHQUFmOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFBO3dCQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7S0FDdkI7SUFDSywwQkFBUyxHQUFmOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs2QkFDL0IsQ0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUEsRUFBbkQsd0JBQW1EO3dCQUNuRCxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7d0JBQ2xDLHNCQUFNOzs2QkFDQyxDQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQSxFQUEvRix3QkFBK0Y7d0JBQ3RHLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTt3QkFDbEMscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBO3dCQUNsQyxzQkFBTTs7d0JBRVYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7O0tBQ3ZCO0lBQ0ssMEJBQVMsR0FBZjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7NkJBQzlCLGVBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUF2Qix3QkFBdUI7d0JBQ3ZCLHFCQUFNLGVBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFBO3dCQUM3QixtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTt3QkFDeEIsc0JBQU07O3dCQUVWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7OztLQUN2QjtJQUNLLDBCQUFTLEdBQWY7Ozs7OzZCQUNRLENBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFBLEVBQW5ELHdCQUFtRDt3QkFDbkQscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBOzZCQUM5QixDQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUE5Qix3QkFBOEI7d0JBQzlCLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTs7NEJBRXRDLHNCQUFNOzs2QkFFRixDQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUE5Qix3QkFBOEI7d0JBQzlCLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs7NEJBRXZDLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzs7Ozs7S0FFMUM7SUFsRGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FtRDFCO0lBQUQsYUFBQztDQW5ERCxBQW1EQyxDQW5EbUMsbUJBQVMsR0FtRDVDO2tCQW5Eb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9uZSBmcm9tIFwiLi4vUHJvcC9TdG9uZVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsNyBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIGF3YWl0IFN0b25lLlNoYXJlLnRyaWdnZXJDQigpXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgzKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgU3RvbmUuU2hhcmUudHJpZ2dlckNCKClcclxuICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIxMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLm1lYXRDcmwudHJpZ2dlckNCKClcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjIwKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnAuaXNWYWxpZCAmJiB0aGlzLlNoYXJwQ3JsLnBvaW50SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5TaGFycC5pc1ZhbGlkICYmIHRoaXMuU2hhcnBDcmwucG9pbnRJbmRleCA9PSAzICYmIHRoaXMuZ2V0TmVlZGxlQ3JsQnlJZCgzKS5zd2l0Y2hTdGF0ZSA+IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjMwKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICBpZiAoU3RvbmUuU2hhcmUuaXNUcmlnZ2VyZWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgU3RvbmUuU2hhcmUudHJpZ2dlckNCKClcclxuICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLmxvc2VDQigpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjQwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwLmlzVmFsaWQgJiYgdGhpcy5TaGFycENybC5wb2ludEluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TaGFycENybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJDcmwucG9pbnRJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgzKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Sharp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71123qtqFBE6ZXv3z84xy+B', 'Sharp');
// Scripts/Crl/Sharp.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../Mod/Utility");
var LevelBase_1 = require("./Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Sharp = /** @class */ (function (_super) {
    __extends(Sharp, _super);
    function Sharp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointNode = null;
        _this.moveSpeed = 1;
        _this.pointIndex = 0;
        return _this;
    }
    Sharp.prototype.onLoad = function () {
        this.pointNode = LevelBase_1.default.Share.node.getChildByName('PointNode');
    };
    Sharp.prototype.start = function () {
    };
    Sharp.prototype.moveToPoint = function (index) {
        var _this = this;
        return new Promise(function (rs, rj) {
            var desPos = _this.pointNode.children[index].getPosition();
            var dis = Utility_1.default.getWorldDis(_this.pointNode.children[index], _this.node);
            var a1 = cc.moveTo(dis / 300 /* this.moveSpeed */, desPos);
            var a2 = cc.callFunc(function () {
                _this.pointIndex = index;
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    Sharp.prototype.checkEatPlayer = function () {
        if (!LevelBase_1.default.Share.isGameOver) {
            if (Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.playerNode) <= 50) {
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Sharp.prototype.update = function (dt) {
        this.checkEatPlayer();
    };
    __decorate([
        property
    ], Sharp.prototype, "pointIndex", void 0);
    Sharp = __decorate([
        ccclass
    ], Sharp);
    return Sharp;
}(cc.Component));
exports.default = Sharp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxTaGFycC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFFckMsK0NBQTBDO0FBRXBDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFEL0M7UUFBQSxxRUEyQ0M7UUF4Q0csZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixlQUFTLEdBQVcsQ0FBQyxDQUFBO1FBR3JCLGdCQUFVLEdBQVcsQ0FBQyxDQUFBOztJQW1DMUIsQ0FBQztJQWpDRyxzQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCxxQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxLQUFhO1FBQXpCLGlCQVlDO1FBWEcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ3pELElBQUksR0FBRyxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN4RSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUEsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDekQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7Z0JBQ3ZCLEVBQUUsRUFBRSxDQUFBO1lBQ1IsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw4QkFBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUM3QixJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNsRSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTthQUMzQjtTQUNKO0lBQ0wsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFsQ0Q7UUFEQyxRQUFROzZDQUNhO0lBUEwsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTBDekI7SUFBRCxZQUFDO0NBMUNELEFBMENDLENBMUNrQyxFQUFFLENBQUMsU0FBUyxHQTBDOUM7a0JBMUNvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBMZXZlbDEgZnJvbSBcIi4vTGV2ZWwvTGV2ZWwxXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWwvTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcnAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHBvaW50Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBtb3ZlU3BlZWQ6IG51bWJlciA9IDFcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBvaW50SW5kZXg6IG51bWJlciA9IDBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludE5vZGUgPSBMZXZlbEJhc2UuU2hhcmUubm9kZS5nZXRDaGlsZEJ5TmFtZSgnUG9pbnROb2RlJylcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvUG9pbnQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocnMsIHJqKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkZXNQb3MgPSB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbltpbmRleF0uZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgICAgICBsZXQgZGlzID0gVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbltpbmRleF0sIHRoaXMubm9kZSlcclxuICAgICAgICAgICAgbGV0IGExID0gY2MubW92ZVRvKGRpcyAvIDMwMC8qIHRoaXMubW92ZVNwZWVkICovLCBkZXNQb3MpXHJcbiAgICAgICAgICAgIGxldCBhMiA9IGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRJbmRleCA9IGluZGV4XHJcbiAgICAgICAgICAgICAgICBycygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCBhMyA9IGNjLnNlcXVlbmNlKGExLCBhMilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhMylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRWF0UGxheWVyKCkge1xyXG4gICAgICAgIGlmICghTGV2ZWxCYXNlLlNoYXJlLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5ub2RlLCBMZXZlbEJhc2UuU2hhcmUucGxheWVyTm9kZSkgPD0gNTApIHtcclxuICAgICAgICAgICAgICAgIExldmVsQmFzZS5TaGFyZS5sb3NlQ0IoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tFYXRQbGF5ZXIoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level10.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '457c3oEVntDQo+eZl4B9Aaj', 'Level10');
// Scripts/Crl/Level/Level10.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level10 = /** @class */ (function (_super) {
    __extends(Level10, _super);
    function Level10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level10.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Level10.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Level10 = __decorate([
        ccclass
    ], Level10);
    return Level10;
}(LevelBase_1.default));
exports.default = Level10;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxMC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUU5QixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXFDLDJCQUFTO0lBQTlDOztJQVFBLENBQUM7SUFOUywyQkFBUyxHQUFmOzs7Ozs7S0FFQztJQUNLLDJCQUFTLEdBQWY7Ozs7OztLQUVDO0lBUGdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FRM0I7SUFBRCxjQUFDO0NBUkQsQUFRQyxDQVJvQyxtQkFBUyxHQVE3QztrQkFSb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMTAgZXh0ZW5kcyBMZXZlbEJhc2Uge1xyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIwMCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIxMCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Poison.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e7563uHIJDx5dngN1srY26', 'Poison');
// Scripts/Crl/Prop/Poison.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Poison = /** @class */ (function (_super) {
    __extends(Poison, _super);
    function Poison() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // onLoad () {}
    Poison.prototype.start = function () {
    };
    Poison.prototype.update = function (dt) {
        if (!LevelBase_1.default.Share.isGameOver) {
            if (Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.playerNode) <= 20) {
                LevelBase_1.default.Share.loseCB();
            }
            if (LevelBase_1.default.Share.meatNode.isValid && Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.meatNode) <= 20) {
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Poison = __decorate([
        ccclass
    ], Poison);
    return Poison;
}(cc.Component));
exports.default = Poison;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxQb2lzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLGdEQUEyQztBQUVyQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEOztJQWtCQSxDQUFDO0lBaEJHLGVBQWU7SUFFZixzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUM3QixJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNsRSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTthQUMzQjtZQUNELElBQUksbUJBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDcEcsbUJBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUE7YUFDM0I7U0FDSjtJQUNMLENBQUM7SUFqQmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FrQjFCO0lBQUQsYUFBQztDQWxCRCxBQWtCQyxDQWxCbUMsRUFBRSxDQUFDLFNBQVMsR0FrQi9DO2tCQWxCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWwxIGZyb20gXCIuLi9MZXZlbC9MZXZlbDFcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi4vTGV2ZWwvTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pc29uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCFMZXZlbEJhc2UuU2hhcmUuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLm5vZGUsIExldmVsQmFzZS5TaGFyZS5wbGF5ZXJOb2RlKSA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLmxvc2VDQigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKExldmVsQmFzZS5TaGFyZS5tZWF0Tm9kZS5pc1ZhbGlkICYmIFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5ub2RlLCBMZXZlbEJhc2UuU2hhcmUubWVhdE5vZGUpIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICBMZXZlbEJhc2UuU2hhcmUubG9zZUNCKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/HttpMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxIdHRwTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXdDQSxDQUFDO0lBdENHLHNCQUFrQixtQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUE7YUFDakM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCx5QkFBTyxHQUFQLFVBQVEsR0FBRyxFQUFFLFFBQVE7UUFDakIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztZQUNyQixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDakUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQjtRQUNMLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUEsd0JBQXdCO1FBQzNDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCwwQkFBUSxHQUFSLFVBQVMsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRO1FBQzFCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxHQUFHLENBQUMsa0JBQWtCLEdBQUc7WUFDckIsNEVBQTRFO1lBQzVFLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNqRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JCO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQSx3QkFBd0I7UUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQixDQUFDO0lBQ0wsY0FBQztBQUFELENBeENBLEFBd0NDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwTWdyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogSHR0cE1nclxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSHR0cE1nciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBIdHRwTWdyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgaHR0cEdldCh1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICB4aHIudGltZW91dCA9IDUwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBodHRwUG9zdCh1cmwsIHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9jYy5sb2coJ3hoci5yZWFkeVN0YXRlPScgKyB4aHIucmVhZHlTdGF0ZSArICcgIHhoci5zdGF0dXM9JyArIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICB4aHIuc2VuZChwYXJhbXMpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/LoadingUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42c8fUg6hhEcLJMTeLa+i1R', 'LoadingUI');
// Scripts/UI/LoadingUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WxApi_1 = require("../Libs/WxApi");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pBar = null;
        return _this;
        // update (dt) {}
    }
    LoadingUI.prototype.onLoad = function () {
        localStorage.clear();
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 1;
        // cc.find('ExportNode').zIndex = 999
        // cc.game.addPersistRootNode(cc.find('ExportNode'))
        PlayerDataMgr_1.default.getPlayerData();
        //AdMgr.instance.initAd()
        WxApi_1.default.WxOnHide(function () {
            localStorage.setItem('lastDate', new Date().getDate().toString());
            localStorage.setItem('front_share_number', WxApi_1.default.front_share_number.toString());
        });
    };
    LoadingUI.prototype.start = function () {
        //ShareMgr.instance.initShare()
        var _this = this;
        cc.director.preloadScene('StartScene', function (completeCount, totalCount) {
            _this.pBar.progress = completeCount / totalCount;
        }, function () {
            cc.director.loadScene('StartScene');
        });
        // SoundMgr.Share.loadSounds(() => {
        //     cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
        //         this.pBar.progress = completeCount / totalCount
        //     }, () => {
        //         cc.director.loadScene('StartScene')
        //     })
        // })
        // JJMgr.instance.initJJ(WxApi.version, () => {
        //     ShareMgr.instance.initShare()
        //     WxApi.calculateShareNumber()
        //     //获取场景值
        //     if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        //         WxApi.sceneId = WxApi.GetLaunchPassVar().scene
        //         console.log('sceneId:', WxApi.sceneId)
        //     }
        //     // SoundMgr.Share.loadSounds(() => {
        //     //     cc.director.preloadScene('StartScene', (completeCount: number, totalCount: number) => {
        //     //         this.pBar.progress = completeCount / totalCount
        //     //     }, () => {
        //     //         WxApi.aldEvent('成功加载进入游戏内人数')
        //     //         cc.director.loadScene('StartScene')
        //     //     })
        //     // })
        // })
    };
    __decorate([
        property(cc.ProgressBar)
    ], LoadingUI.prototype, "pBar", void 0);
    LoadingUI = __decorate([
        ccclass
    ], LoadingUI);
    return LoadingUI;
}(cc.Component));
exports.default = LoadingUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXExvYWRpbmdVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFLbEMsdURBQWtEO0FBRzVDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUEyREM7UUF2REcsVUFBSSxHQUFtQixJQUFJLENBQUE7O1FBc0QzQixpQkFBaUI7SUFDckIsQ0FBQztJQXJERywwQkFBTSxHQUFOO1FBQ0ksWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3BCLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQzlDLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ2hELEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFBO1FBQ2xELHFDQUFxQztRQUNyQyxvREFBb0Q7UUFFcEQsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUM3Qix5QkFBeUI7UUFFekIsZUFBSyxDQUFDLFFBQVEsQ0FBQztZQUNYLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUNqRSxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGVBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSwrQkFBK0I7UUFEbkMsaUJBaUNDO1FBOUJHLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxVQUFDLGFBQXFCLEVBQUUsVUFBa0I7WUFDN0UsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxHQUFHLFVBQVUsQ0FBQTtRQUNuRCxDQUFDLEVBQUU7WUFDQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQTtRQUNGLG9DQUFvQztRQUNwQyw4RkFBOEY7UUFDOUYsMERBQTBEO1FBQzFELGlCQUFpQjtRQUNqQiw4Q0FBOEM7UUFDOUMsU0FBUztRQUNULEtBQUs7UUFFTCwrQ0FBK0M7UUFDL0Msb0NBQW9DO1FBQ3BDLG1DQUFtQztRQUNuQyxjQUFjO1FBQ2Qsb0RBQW9EO1FBQ3BELHlEQUF5RDtRQUN6RCxpREFBaUQ7UUFDakQsUUFBUTtRQUNSLDJDQUEyQztRQUMzQyxxR0FBcUc7UUFDckcsaUVBQWlFO1FBQ2pFLHdCQUF3QjtRQUN4QiwrQ0FBK0M7UUFDL0MscURBQXFEO1FBQ3JELGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osS0FBSztJQUNULENBQUM7SUFwREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDRTtJQUhWLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EwRDdCO0lBQUQsZ0JBQUM7Q0ExREQsQUEwREMsQ0ExRHNDLEVBQUUsQ0FBQyxTQUFTLEdBMERsRDtrQkExRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV3hBcGkgZnJvbSBcIi4uL0xpYnMvV3hBcGlcIjtcclxuaW1wb3J0IEh0dHBNZ3IgZnJvbSBcIi4uL01vZC9IdHRwTWdyXCI7XHJcbmltcG9ydCBTaGFyZU1nciBmcm9tIFwiLi4vTW9kL1NoYXJlTWdyXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vTW9kL0FkTWdyXCI7XHJcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vTW9kL1NvdW5kTWdyXCI7XHJcbmltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IEpKTWdyIGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IDFcclxuICAgICAgICAvLyBjYy5maW5kKCdFeHBvcnROb2RlJykuekluZGV4ID0gOTk5XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUoY2MuZmluZCgnRXhwb3J0Tm9kZScpKVxyXG5cclxuICAgICAgICBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKVxyXG4gICAgICAgIC8vQWRNZ3IuaW5zdGFuY2UuaW5pdEFkKClcclxuXHJcbiAgICAgICAgV3hBcGkuV3hPbkhpZGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdERhdGUnLCBuZXcgRGF0ZSgpLmdldERhdGUoKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZnJvbnRfc2hhcmVfbnVtYmVyJywgV3hBcGkuZnJvbnRfc2hhcmVfbnVtYmVyLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvL1NoYXJlTWdyLmluc3RhbmNlLmluaXRTaGFyZSgpXHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnU3RhcnRTY2VuZScsIChjb21wbGV0ZUNvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudFxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTdGFydFNjZW5lJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIFNvdW5kTWdyLlNoYXJlLmxvYWRTb3VuZHMoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ1N0YXJ0U2NlbmUnLCAoY29tcGxldGVDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucEJhci5wcm9ncmVzcyA9IGNvbXBsZXRlQ291bnQgLyB0b3RhbENvdW50XHJcbiAgICAgICAgLy8gICAgIH0sICgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU3RhcnRTY2VuZScpXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgLy8gSkpNZ3IuaW5zdGFuY2UuaW5pdEpKKFd4QXBpLnZlcnNpb24sICgpID0+IHtcclxuICAgICAgICAvLyAgICAgU2hhcmVNZ3IuaW5zdGFuY2UuaW5pdFNoYXJlKClcclxuICAgICAgICAvLyAgICAgV3hBcGkuY2FsY3VsYXRlU2hhcmVOdW1iZXIoKVxyXG4gICAgICAgIC8vICAgICAvL+iOt+WPluWcuuaZr+WAvFxyXG4gICAgICAgIC8vICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAvLyAgICAgICAgIFd4QXBpLnNjZW5lSWQgPSBXeEFwaS5HZXRMYXVuY2hQYXNzVmFyKCkuc2NlbmVcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdzY2VuZUlkOicsIFd4QXBpLnNjZW5lSWQpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgLy8gU291bmRNZ3IuU2hhcmUubG9hZFNvdW5kcygoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ1N0YXJ0U2NlbmUnLCAoY29tcGxldGVDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICB0aGlzLnBCYXIucHJvZ3Jlc3MgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudFxyXG4gICAgICAgIC8vICAgICAvLyAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIFd4QXBpLmFsZEV2ZW50KCfmiJDlip/liqDovb3ov5vlhaXmuLjmiI/lhoXkurrmlbAnKVxyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU3RhcnRTY2VuZScpXHJcbiAgICAgICAgLy8gICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vICAgICAvLyB9KVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/GameLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b790dcAVrJK+Y2P3WTjeGtj', 'GameLogic');
// Scripts/Crl/GameLogic.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLogic = /** @class */ (function (_super) {
    __extends(GameLogic, _super);
    function GameLogic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FinishUI = null;
        _this.DefeatUI = null;
        return _this;
        // update (dt) {}
    }
    GameLogic_1 = GameLogic;
    GameLogic.prototype.onLoad = function () {
        GameLogic_1.Share = this;
    };
    GameLogic.prototype.start = function () {
    };
    GameLogic.prototype.showFinishUI = function () {
        this.FinishUI.active = true;
    };
    GameLogic.prototype.showDefeatUI = function () {
        this.DefeatUI.active = true;
    };
    var GameLogic_1;
    __decorate([
        property(cc.Node)
    ], GameLogic.prototype, "FinishUI", void 0);
    __decorate([
        property(cc.Node)
    ], GameLogic.prototype, "DefeatUI", void 0);
    GameLogic = GameLogic_1 = __decorate([
        ccclass
    ], GameLogic);
    return GameLogic;
}(cc.Component));
exports.default = GameLogic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxHYW1lTG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQURuRDtRQUFBLHFFQTBCQztRQXJCRyxjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUE7O1FBa0J4QixpQkFBaUI7SUFDckIsQ0FBQztrQkF6Qm9CLFNBQVM7SUFRMUIsMEJBQU0sR0FBTjtRQUNJLFdBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO0lBQzFCLENBQUM7SUFFRCx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDL0IsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDL0IsQ0FBQzs7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNNO0lBTlAsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXlCN0I7SUFBRCxnQkFBQztDQXpCRCxBQXlCQyxDQXpCc0MsRUFBRSxDQUFDLFNBQVMsR0F5QmxEO2tCQXpCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxvZ2ljIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgU2hhcmU6IEdhbWVMb2dpY1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRmluaXNoVUk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIERlZmVhdFVJOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBHYW1lTG9naWMuU2hhcmUgPSB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dGaW5pc2hVSSgpIHtcclxuICAgICAgICB0aGlzLkZpbmlzaFVJLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGVmZWF0VUkoKSB7XHJcbiAgICAgICAgdGhpcy5EZWZlYXRVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/AutoScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a75d1uQdLhKfJU99KUbdLWv', 'AutoScroll');
// ExportLibs/AutoScroll.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AutoScroll = /** @class */ (function (_super) {
    __extends(AutoScroll, _super);
    function AutoScroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollSpeed = 2;
        _this.isVertical = true;
        _this.scroll = null;
        _this.isReady = false;
        _this.isDown = true;
        return _this;
    }
    AutoScroll.prototype.onLoad = function () {
        this.scroll = this.node.getComponent(cc.ScrollView);
    };
    AutoScroll.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.isReady = true; }, 1);
    };
    AutoScroll.prototype.onEnable = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.isReady = true; }, 1);
    };
    AutoScroll.prototype.onDisable = function () {
        this.isReady = false;
    };
    AutoScroll.prototype.update = function (dt) {
        var _this = this;
        if (!this.isReady || this.scroll.isScrolling())
            return;
        var curV = this.isVertical ? this.scroll.getScrollOffset().y : -this.scroll.getScrollOffset().x;
        var maxV = this.isVertical ? this.scroll.getMaxScrollOffset().y : this.scroll.getMaxScrollOffset().x;
        if (this.isDown) {
            if (curV < maxV) {
                curV += 2;
                if (this.isVertical) {
                    this.scroll.scrollToOffset(cc.v2(0, curV));
                }
                else {
                    this.scroll.scrollToOffset(cc.v2(curV, 0));
                }
            }
            else {
                this.isDown = false;
                this.isReady = false;
                this.scheduleOnce(function () { _this.isReady = true; }, 1);
            }
        }
        else {
            if (curV > 0) {
                curV -= 2;
                if (this.isVertical) {
                    this.scroll.scrollToOffset(cc.v2(0, curV));
                }
                else {
                    this.scroll.scrollToOffset(cc.v2(curV, 0));
                }
            }
            else {
                this.isDown = true;
                this.isReady = false;
                this.scheduleOnce(function () { _this.isReady = true; }, 1);
            }
        }
    };
    __decorate([
        property
    ], AutoScroll.prototype, "scrollSpeed", void 0);
    __decorate([
        property
    ], AutoScroll.prototype, "isVertical", void 0);
    AutoScroll = __decorate([
        ccclass
    ], AutoScroll);
    return AutoScroll;
}(cc.Component));
exports.default = AutoScroll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcQXV0b1Njcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBRHBEO1FBQUEscUVBK0RDO1FBM0RHLGlCQUFXLEdBQVcsQ0FBQyxDQUFBO1FBRXZCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLFlBQU0sR0FBa0IsSUFBSSxDQUFBO1FBRTVCLGFBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsWUFBTSxHQUFZLElBQUksQ0FBQTs7SUFvRDFCLENBQUM7SUFsREcsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBUSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQ3hCLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUFULGlCQWdDQztRQS9CRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUFFLE9BQU07UUFFdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDL0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7Z0JBQ2IsSUFBSSxJQUFJLENBQUMsQ0FBQTtnQkFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7aUJBQzdDO3FCQUFNO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQzdDO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO2dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDdEQ7U0FDSjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNWLElBQUksSUFBSSxDQUFDLENBQUE7Z0JBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO2lCQUM3QztxQkFBTTtvQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUM3QzthQUNKO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3REO1NBQ0o7SUFDTCxDQUFDO0lBekREO1FBREMsUUFBUTttREFDYztJQUV2QjtRQURDLFFBQVE7a0RBQ2lCO0lBTFQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThEOUI7SUFBRCxpQkFBQztDQTlERCxBQThEQyxDQTlEdUMsRUFBRSxDQUFDLFNBQVMsR0E4RG5EO2tCQTlEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1Njcm9sbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzY3JvbGxTcGVlZDogbnVtYmVyID0gMlxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuID0gdHJ1ZVxyXG5cclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBpc1JlYWR5OiBib29sZWFuID0gZmFsc2VcclxuICAgIGlzRG93bjogYm9vbGVhbiA9IHRydWVcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmlzUmVhZHkgPSB0cnVlIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmlzUmVhZHkgPSB0cnVlIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkgfHwgdGhpcy5zY3JvbGwuaXNTY3JvbGxpbmcoKSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGxldCBjdXJWID0gdGhpcy5pc1ZlcnRpY2FsID8gdGhpcy5zY3JvbGwuZ2V0U2Nyb2xsT2Zmc2V0KCkueSA6IC10aGlzLnNjcm9sbC5nZXRTY3JvbGxPZmZzZXQoKS54XHJcbiAgICAgICAgbGV0IG1heFYgPSB0aGlzLmlzVmVydGljYWwgPyB0aGlzLnNjcm9sbC5nZXRNYXhTY3JvbGxPZmZzZXQoKS55IDogdGhpcy5zY3JvbGwuZ2V0TWF4U2Nyb2xsT2Zmc2V0KCkueFxyXG4gICAgICAgIGlmICh0aGlzLmlzRG93bikge1xyXG4gICAgICAgICAgICBpZiAoY3VyViA8IG1heFYpIHtcclxuICAgICAgICAgICAgICAgIGN1clYgKz0gMlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvT2Zmc2V0KGNjLnYyKDAsIGN1clYpKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUb09mZnNldChjYy52MihjdXJWLCAwKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuaXNSZWFkeSA9IHRydWUgfSwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJWID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY3VyViAtPSAyXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgY3VyVikpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvT2Zmc2V0KGNjLnYyKGN1clYsIDApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmlzUmVhZHkgPSB0cnVlIH0sIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/ExportHttpUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcRXhwb3J0SHR0cFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXdDQSxDQUFDO0lBdENHLHNCQUFrQixrQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUE7YUFDaEM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCx3QkFBTyxHQUFQLFVBQVEsR0FBRyxFQUFFLFFBQVE7UUFDakIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztZQUNyQixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDakUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQjtRQUNMLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUEsd0JBQXdCO1FBQzNDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCx5QkFBUSxHQUFSLFVBQVMsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRO1FBQzFCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxHQUFHLENBQUMsa0JBQWtCLEdBQUc7WUFDckIsNEVBQTRFO1lBQzVFLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNqRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JCO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQSx3QkFBd0I7UUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQixDQUFDO0lBQ0wsYUFBQztBQUFELENBeENBLEFBd0NDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBKSkh0dHAge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBKSkh0dHBcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEpKSHR0cCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBKSkh0dHAoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBodHRwR2V0KHVybCwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbmUgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGh0dHBQb3N0KHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL2NjLmxvZygneGhyLnJlYWR5U3RhdGU9JyArIHhoci5yZWFkeVN0YXRlICsgJyAgeGhyLnN0YXR1cz0nICsgeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOy8vIDUgc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgIHhoci5zZW5kKHBhcmFtcyk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/FinishGameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80640I/xFpMor6MfSekWPx9', 'FinishGameUI');
// ExportLibs/View/FinishGameUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var Utility_1 = require("../../Scripts/Mod/Utility");
var ExportUtils_1 = require("../ExportUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FinishGameUI = /** @class */ (function (_super) {
    __extends(FinishGameUI, _super);
    function FinishGameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.navId = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    FinishGameUI.prototype.start = function () {
    };
    FinishGameUI.prototype.showUI = function (callback, param) {
        if (param && param.posY) {
            this.rootNode.y = param.posY;
        }
        this.node.active = true;
    };
    FinishGameUI.prototype.onEnable = function () {
        this._init();
        this.chushihuaNav();
    };
    FinishGameUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    FinishGameUI.prototype._init = function () {
        this.navId = 0;
    };
    FinishGameUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    FinishGameUI.prototype.cno = function (index) {
        var _this = this;
        var item = this.rootNode.children[index];
        var icon = item.getChildByName('icon').getComponent(cc.Sprite);
        ExportUtils_1.default.instance.loadImgByUrl(icon, ExportUtils_1.default.instance.navigateAppArr[this.navId].icon);
        var id = this.navId;
        item.off(cc.Node.EventType.TOUCH_END);
        item.on(cc.Node.EventType.TOUCH_END, function (event) { _this.tiaozhuanCB(event, id); }, this);
        this.navId++;
        if (this.navId >= ExportUtils_1.default.instance.navigateAppArr.length) {
            this.navId = 0;
        }
    };
    FinishGameUI.prototype.tiaozhuanCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('结算页 6 个 icon-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () {
                AdMgr_1.default.instance.showBanner();
            });
        }, function () {
            WxApi_1.default.aldEvent('结算页 6 个 icon-总跳转数');
        });
        var index = this.rootNode.children.indexOf(event.target);
        this.cno(index);
    };
    FinishGameUI.prototype.chushihuaNav = function () {
        var _this = this;
        var rArr = [0, 1, 2, 3, 4, 5];
        rArr = Utility_1.default.shuffleArr(rArr);
        var randNum = Math.floor(Math.random() * 6);
        var _loop_1 = function (i) {
            var item = this_1.rootNode.children[rArr[0]];
            rArr.splice(rArr.indexOf(rArr[0]), 1);
            var icon = item.getChildByName('icon').getComponent(cc.Sprite);
            var finger = item.getChildByName('finger');
            ExportUtils_1.default.instance.loadImgByUrl(icon, ExportUtils_1.default.instance.navigateAppArr[this_1.navId].icon);
            finger.active = randNum == i;
            var id = this_1.navId;
            item.off(cc.Node.EventType.TOUCH_END);
            item.on(cc.Node.EventType.TOUCH_END, function (event) { _this.tiaozhuanCB(event, id); }, this_1);
            this_1.navId++;
        };
        var this_1 = this;
        for (var i = 0; i < 6; i++) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.Node)
    ], FinishGameUI.prototype, "rootNode", void 0);
    FinishGameUI = __decorate([
        ccclass
    ], FinishGameUI);
    return FinishGameUI;
}(cc.Component));
exports.default = FinishGameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRmluaXNoR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUM3QyxpREFBNEM7QUFDNUMscURBQWdEO0FBQ2hELDhDQUFrRDtBQUU1QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBdUZDO1FBbkZHLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsV0FBSyxHQUFXLENBQUMsQ0FBQTs7UUFnRmpCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0VHLGVBQWU7SUFFZiw0QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxRQUFtQixFQUFFLEtBQVc7UUFDbkMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQzNCLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUE7SUFDakMsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUM1QixDQUFDO0lBRUQsMEJBQUcsR0FBSCxVQUFJLEtBQWE7UUFBakIsaUJBWUM7UUFYRyxJQUFJ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QUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFLLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pGLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQTtZQUM1QixJQUFJLEVBQUUsR0FBRyxPQUFLLEtBQUssQ0FBQTtZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBSyxJQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxTQUFPLENBQUE7WUFFdEYsT0FBSyxLQUFLLEVBQUUsQ0FBQTs7O1FBWGhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUFqQixDQUFDO1NBWVQ7SUFDTCxDQUFDO0lBL0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ007SUFIUCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBc0ZoQztJQUFELG1CQUFDO0NBdEZELEFBc0ZDLENBdEZ5QyxFQUFFLENBQUMsU0FBUyxHQXNGckQ7a0JBdEZvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFd4QXBpIGZyb20gXCIuLi8uLi9TY3JpcHRzL0xpYnMvV3hBcGlcIjtcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuLi8uLi9TY3JpcHRzL01vZC9BZE1nclwiO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uL0V4cG9ydFV0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluaXNoR2FtZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG5hdklkOiBudW1iZXIgPSAwXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSShjYWxsYmFjaz86IEZ1bmN0aW9uLCBwYXJhbT86IGFueSkge1xyXG4gICAgICAgIGlmIChwYXJhbSAmJiBwYXJhbS5wb3NZKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdE5vZGUueSA9IHBhcmFtLnBvc1lcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgICAgICB0aGlzLmNodXNoaWh1YU5hdigpXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICB9XHJcblxyXG4gICAgX2luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5uYXZJZCA9IDBcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUNCKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNubyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuW2luZGV4XVxyXG4gICAgICAgIGxldCBpY29uID0gaXRlbS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpIGFzIGNjLlNwcml0ZVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCBKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFyclt0aGlzLm5hdklkXS5pY29uKVxyXG4gICAgICAgIGxldCBpZCA9IHRoaXMubmF2SWRcclxuICAgICAgICBpdGVtLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpXHJcbiAgICAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4geyB0aGlzLnRpYW96aHVhbkNCKGV2ZW50LCBpZCkgfSwgdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5uYXZJZCsrXHJcbiAgICAgICAgaWYgKHRoaXMubmF2SWQgPj0gSkpNZ3IuaW5zdGFuY2UubmF2aWdhdGVBcHBBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2SWQgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRpYW96aHVhbkNCKGV2ZW50LCBpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBpZDonLCBpZClcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn57uT566X6aG1IDYg5LiqIGljb24t5oC754K55Ye75pWwJylcclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5OYXZpZ2F0ZUFwcChpZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5zaG93RXhwb3J0VUkoRXhwb3J0RGlyLlZJRVdfRlVMTEdBTUVVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2Uuc2hvd0Jhbm5lcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn57uT566X6aG1IDYg5LiqIGljb24t5oC76Lez6L2s5pWwJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIHRoaXMuY25vKGluZGV4KVxyXG4gICAgfVxyXG4gICAgY2h1c2hpaHVhTmF2KCkge1xyXG4gICAgICAgIGxldCByQXJyOiBudW1iZXJbXSA9IFswLCAxLCAyLCAzLCA0LCA1XVxyXG4gICAgICAgIHJBcnIgPSBVdGlsaXR5LnNodWZmbGVBcnIockFycilcclxuICAgICAgICBsZXQgcmFuZE51bTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogY2MuTm9kZSA9IHRoaXMucm9vdE5vZGUuY2hpbGRyZW5bckFyclswXV1cclxuICAgICAgICAgICAgckFyci5zcGxpY2UockFyci5pbmRleE9mKHJBcnJbMF0pLCAxKVxyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSBhcyBjYy5TcHJpdGVcclxuICAgICAgICAgICAgbGV0IGZpbmdlciA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ZpbmdlcicpXHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCBKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFyclt0aGlzLm5hdklkXS5pY29uKVxyXG4gICAgICAgICAgICBmaW5nZXIuYWN0aXZlID0gcmFuZE51bSA9PSBpXHJcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMubmF2SWRcclxuICAgICAgICAgICAgaXRlbS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKVxyXG4gICAgICAgICAgICBpdGVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7IHRoaXMudGlhb3podWFuQ0IoZXZlbnQsIGlkKSB9LCB0aGlzKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5uYXZJZCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/ExportCrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7de57dSE4tEJaZ954yYkzmB', 'ExportCrl');
// ExportLibs/ExportCrl.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ExportCrl = /** @class */ (function (_super) {
    __extends(ExportCrl, _super);
    function ExportCrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExportCrl.prototype.onLoad = function () {
        this.node.setContentSize(cc.view.getVisibleSize());
        this.node.setPosition(cc.v2(this.node.getContentSize().width / 2, this.node.getContentSize().height / 2));
    };
    ExportCrl.prototype.start = function () {
    };
    ExportCrl.prototype.showJJUI = function (dir, param, callback) {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].zIndex = this.node.children[i].name == dir ? 999 : 100;
        }
        this.node.getChildByName(dir).getComponent(dir).showUI(callback, param);
    };
    ExportCrl.prototype.closeJJUI = function (dir) {
        this.node.getChildByName(dir).active = false;
    };
    ExportCrl.prototype.closeAllJJUI = function () {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].active = false;
            this.node.children[i].getComponent(this.node.children[i].name).unscheduleAllCallbacks();
        }
    };
    ExportCrl = __decorate([
        ccclass
    ], ExportCrl);
    return ExportCrl;
}(cc.Component));
exports.default = ExportCrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcRXhwb3J0Q3JsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBOEJBLENBQUM7SUE1QkcsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdHLENBQUM7SUFFRCx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxHQUFjLEVBQUUsS0FBVyxFQUFFLFFBQW1CO1FBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7U0FDL0U7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLEdBQWM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUNoRCxDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1NBQzFGO0lBQ0wsQ0FBQztJQTNCZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQThCN0I7SUFBRCxnQkFBQztDQTlCRCxBQThCQyxDQTlCc0MsRUFBRSxDQUFDLFNBQVMsR0E4QmxEO2tCQTlCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cG9ydERpciB9IGZyb20gXCIuL0V4cG9ydFV0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwb3J0Q3JsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKSlcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY2MudjIodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggLyAyLCB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyAyKSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0pKVUkoZGlyOiBFeHBvcnREaXIsIHBhcmFtPzogYW55LCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpXS56SW5kZXggPSB0aGlzLm5vZGUuY2hpbGRyZW5baV0ubmFtZSA9PSBkaXIgPyA5OTkgOiAxMDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGRpcikuZ2V0Q29tcG9uZW50KGRpcikuc2hvd1VJKGNhbGxiYWNrLCBwYXJhbSlcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUpKVUkoZGlyOiBFeHBvcnREaXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoZGlyKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQWxsSkpVSSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQodGhpcy5ub2RlLmNoaWxkcmVuW2ldLm5hbWUpLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/RecommendUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da209iyFA1FDbOBIynyh2YW', 'RecommendUI');
// ExportLibs/View/RecommendUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../ExportUtils");
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var PlayerDataMgr_1 = require("../../Scripts/Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RecommendUI = /** @class */ (function (_super) {
    __extends(RecommendUI, _super);
    function RecommendUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.myNavArr = [];
        _this.closeCallback = null;
        return _this;
    }
    // onLoad () {}
    RecommendUI.prototype.start = function () {
    };
    RecommendUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        this.node.active = true;
        WxApi_1.default.aldEvent('热门推荐全屏幕导出页出现次数');
    };
    RecommendUI.prototype.onEnable = function () {
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
        AdMgr_1.default.instance.hideBanner();
        if (ExportUtils_1.default.instance.exportCfg.front_remen_screen_auto) {
            this.randomNav();
        }
        this.node.getChildByName('continueBtn').active = false;
        if (WxApi_1.default.isValidBanner() && PlayerDataMgr_1.default.getPlayerData().grade >= ExportUtils_1.default.instance.exportCfg.front_continuegame_start_level) {
            this.node.getChildByName('continueBtn').active = true;
            WxApi_1.default.bannerWuChu2();
        }
    };
    RecommendUI.prototype.onDisable = function () {
        clearTimeout(WxApi_1.default.bannerTO2);
        AdMgr_1.default.instance.hideBanner();
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
    };
    RecommendUI.prototype._init = function () {
        var _this = this;
        var fingerNum = Math.floor(Math.random() * 6);
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            var finger = node.getChildByName('finger');
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            finger.active = i == fingerNum;
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    RecommendUI.prototype.continueCB = function () {
        this.node.active = false;
    };
    RecommendUI.prototype.randomNav = function () {
        var id = Math.floor(Math.random() * 6);
        this.navCB(null, id);
    };
    RecommendUI.prototype.navCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('热门推荐全屏幕导出页-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () { }, function () {
            WxApi_1.default.aldEvent('热门推荐全屏幕导出页-总成功跳转数');
        });
    };
    RecommendUI.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], RecommendUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], RecommendUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], RecommendUI.prototype, "content", void 0);
    RecommendUI = __decorate([
        ccclass
    ], RecommendUI);
    return RecommendUI;
}(cc.Component));
exports.default = RecommendUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcUmVjb21tZW5kVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQWtEO0FBQ2xELGtEQUE2QztBQUM3QyxpREFBNEM7QUFFNUMsa0VBQTZEO0FBRXZELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFEckQ7UUFBQSxxRUE0RkM7UUF6RkcsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLGNBQVEsR0FBVSxFQUFFLENBQUE7UUFFcEIsbUJBQWEsR0FBYSxJQUFJLENBQUE7O0lBK0VsQyxDQUFDO0lBN0VHLGVBQWU7SUFFZiwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxRQUFtQixFQUFFLEtBQVc7UUFDbkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQTtTQUNoQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN2QixlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRVosZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMzQixJQUFJLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRTtZQUNsRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDbkI7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ZSxFQUFFLEVBQVU7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDNUIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ2pDLHFCQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsY0FBUSxDQUFDLEVBQUU7WUFDdEMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFFO0lBRVQsQ0FBQztJQXhGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7K0NBQ0k7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSztJQVJOLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EyRi9CO0lBQUQsa0JBQUM7Q0EzRkQsQUEyRkMsQ0EzRndDLEVBQUUsQ0FBQyxTQUFTLEdBMkZwRDtrQkEzRm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvQWRNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb21tZW5kVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsOiBjYy5TY3JvbGxWaWV3ID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBteU5hdkFycjogYW55W10gPSBbXVxyXG5cclxuICAgIGNsb3NlQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbFxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93VUkoY2FsbGJhY2s/OiBGdW5jdGlvbiwgcGFyYW0/OiBhbnkpIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn54Ot6Zeo5o6o6I2Q5YWo5bGP5bmV5a+85Ye66aG15Ye6546w5qyh5pWwJylcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm15TmF2QXJyID0gW10uY29uY2F0KEpKTWdyLmluc3RhbmNlLm5hdmlnYXRlQXBwQXJyKVxyXG4gICAgICAgIHRoaXMuX2luaXQoKVxyXG5cclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICBpZiAoSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3JlbWVuX3NjcmVlbl9hdXRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tTmF2KClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdjb250aW51ZUJ0bicpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKFd4QXBpLmlzVmFsaWRCYW5uZXIoKSAmJiBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA+PSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfY29udGludWVnYW1lX3N0YXJ0X2xldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnY29udGludWVCdG4nKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIFd4QXBpLmJhbm5lcld1Q2h1MigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoV3hBcGkuYmFubmVyVE8yKVxyXG4gICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgdGhpcy5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpXHJcbiAgICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrICYmIHRoaXMuY2xvc2VDYWxsYmFjaygpXHJcbiAgICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIGxldCBmaW5nZXJOdW06IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm15TmF2QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKVxyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKG5vZGUpXHJcblxyXG4gICAgICAgICAgICBsZXQgbmFtZTogY2MuTGFiZWwgPSBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICBsZXQgaWNvbjogY2MuU3ByaXRlID0gbm9kZS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgIGxldCBmaW5nZXI6IGNjLk5vZGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdmaW5nZXInKVxyXG5cclxuICAgICAgICAgICAgbmFtZS5zdHJpbmcgPSBKSk1nci5pbnN0YW5jZS5nZXRTdWJ0aXRsZShpKVxyXG4gICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5sb2FkSW1nQnlVcmwoaWNvbiwgdGhpcy5teU5hdkFycltpXS5pY29uKVxyXG4gICAgICAgICAgICBmaW5nZXIuYWN0aXZlID0gaSA9PSBmaW5nZXJOdW1cclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaSkgfSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udGludWVDQigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21OYXYoKSB7XHJcbiAgICAgICAgbGV0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNilcclxuICAgICAgICB0aGlzLm5hdkNCKG51bGwsIGlkKVxyXG4gICAgfVxyXG5cclxuICAgIG5hdkNCKGV2ZW50OiBjYy5FdmVudCwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBpZDonLCBpZClcclxuICAgICAgICBXeEFwaS5hbGRFdmVudCgn54Ot6Zeo5o6o6I2Q5YWo5bGP5bmV5a+85Ye66aG1LeaAu+eCueWHu+aVsCcpXHJcbiAgICAgICAgSkpNZ3IuaW5zdGFuY2UuTmF2aWdhdGVBcHAoaWQsICgpID0+IHsgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn54Ot6Zeo5o6o6I2Q5YWo5bGP5bmV5a+85Ye66aG1LeaAu+aIkOWKn+i3s+i9rOaVsCcpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/ScrollUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '031b7VcdSJJzpl/U/4pTZPt', 'ScrollUI');
// ExportLibs/View/ScrollUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../ExportUtils");
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScrollUI = /** @class */ (function (_super) {
    __extends(ScrollUI, _super);
    function ScrollUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.isGameUI = false;
        _this.myNavArr = [];
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    ScrollUI.prototype.start = function () {
    };
    ScrollUI.prototype.showUI = function (callback, param) {
        this.node.active = true;
        if (this.isGameUI) {
            WxApi_1.default.aldEvent('顶部导出栏出现次数');
        }
        else {
            WxApi_1.default.aldEvent('底部导出栏出现次数');
        }
    };
    ScrollUI.prototype.onEnable = function () {
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
    };
    ScrollUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
    };
    ScrollUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            node.setPosition(cc.v2(0, 0));
            this_1.content.addChild(node);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    ScrollUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    ScrollUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        if (this.isGameUI) {
            WxApi_1.default.aldEvent('顶部导出栏-总点击数');
        }
        else {
            WxApi_1.default.aldEvent('底部导出栏-总点击数');
        }
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            if (_this.isGameUI)
                ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () { AdMgr_1.default.instance.showBanner(); });
        }, function () {
            if (_this.isGameUI) {
                WxApi_1.default.aldEvent('顶部导出栏-总成功跳转数');
            }
            else {
                WxApi_1.default.aldEvent('底部导出栏-总成功跳转数');
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], ScrollUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], ScrollUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], ScrollUI.prototype, "content", void 0);
    __decorate([
        property
    ], ScrollUI.prototype, "isGameUI", void 0);
    ScrollUI = __decorate([
        ccclass
    ], ScrollUI);
    return ScrollUI;
}(cc.Component));
exports.default = ScrollUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcU2Nyb2xsVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQWtEO0FBQ2xELGtEQUE2QztBQUM3QyxpREFBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQW9GQztRQWpGRyxVQUFJLEdBQVksSUFBSSxDQUFBO1FBR3BCLFlBQU0sR0FBa0IsSUFBSSxDQUFBO1FBRzVCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFHdkIsY0FBUSxHQUFZLEtBQUssQ0FBQTtRQUV6QixjQUFRLEdBQVUsRUFBRSxDQUFBOztRQXFFcEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFsRUcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLFFBQW1CLEVBQUUsS0FBVztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFFdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsZUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUM5QjthQUFNO1lBQ0gsZUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUM5QjtJQUNMLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ3hELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUFBLGlCQWFDO2dDQVpZLENBQUM7WUFDTixJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQUssSUFBSSxDQUFDLENBQUE7WUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzdCLE9BQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUUzQixJQUFJLElBQUksR0FBYyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7WUFFekUscUJBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV4RCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUssSUFBTyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsU0FBTyxDQUFBOzs7UUFWbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBcEMsQ0FBQztTQVdUO0lBQ0wsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDNUIsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxLQUFlLEVBQUUsRUFBVTtRQUFqQyxpQkFrQkM7UUFqQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFFNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsZUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUMvQjthQUFNO1lBQ0gsZUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUMvQjtRQUNELHFCQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxLQUFJLENBQUMsUUFBUTtnQkFDYixxQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsdUJBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLGNBQVEsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzNHLENBQUMsRUFBRTtZQUNDLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixlQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO2FBQ2pDO2lCQUFNO2dCQUNILGVBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7YUFDakM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE5RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDOzRDQUNJO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFHdkI7UUFEQyxRQUFROzhDQUNnQjtJQVhSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRjVCO0lBQUQsZUFBQztDQW5GRCxBQW1GQyxDQW5GcUMsRUFBRSxDQUFDLFNBQVMsR0FtRmpEO2tCQW5Gb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKSk1nciwgeyBFeHBvcnREaXIgfSBmcm9tIFwiLi4vRXhwb3J0VXRpbHNcIjtcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi8uLi9TY3JpcHRzL0xpYnMvV3hBcGlcIjtcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuLi8uLi9TY3JpcHRzL01vZC9BZE1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc0dhbWVVSTogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcblxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93VUkoY2FsbGJhY2s/OiBGdW5jdGlvbiwgcGFyYW0/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVVSSkge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn6aG26YOo5a+85Ye65qCP5Ye6546w5qyh5pWwJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5bqV6YOo5a+85Ye65qCP5Ye6546w5qyh5pWwJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlOYXZBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSlcclxuXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCB0aGlzLm15TmF2QXJyW2ldLmljb24pXHJcblxyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7IHRoaXMubmF2Q0IoZXZlbnQsIGkpIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgbmF2Q0IoZXZlbnQ6IGNjLkV2ZW50LCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGlkOicsIGlkKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVVSSkge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn6aG26YOo5a+85Ye65qCPLeaAu+eCueWHu+aVsCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+W6lemDqOWvvOWHuuagjy3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5OYXZpZ2F0ZUFwcChpZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0dhbWVVSSlcclxuICAgICAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19GVUxMR0FNRVVJLCBudWxsLCAoKSA9PiB7IEFkTWdyLmluc3RhbmNlLnNob3dCYW5uZXIoKSB9KVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNHYW1lVUkpIHtcclxuICAgICAgICAgICAgICAgIFd4QXBpLmFsZEV2ZW50KCfpobbpg6jlr7zlh7rmoI8t5oC75oiQ5Yqf6Lez6L2s5pWwJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFd4QXBpLmFsZEV2ZW50KCflupXpg6jlr7zlh7rmoI8t5oC75oiQ5Yqf6Lez6L2s5pWwJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/FullGameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab3few7iJVE6ZOrRaammn4s', 'FullGameUI');
// ExportLibs/View/FullGameUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../ExportUtils");
var Utility_1 = require("../../Scripts/Mod/Utility");
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var PlayerDataMgr_1 = require("../../Scripts/Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FullGameUI = /** @class */ (function (_super) {
    __extends(FullGameUI, _super);
    function FullGameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.myNavArr = [];
        _this.hotArr = [];
        _this.closeCallback = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    FullGameUI.prototype.start = function () {
    };
    FullGameUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        this.node.active = true;
        WxApi_1.default.aldEvent('网红爆款全屏幕导出页出现次数');
    };
    FullGameUI.prototype.onEnable = function () {
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this.getHotRandArr();
        this._init();
        if (ExportUtils_1.default.instance.exportCfg.front_all_screen_auto) {
            this.randomNav();
        }
        Utility_1.default.delayActive(this.node.getChildByName('continueBtn'), ExportUtils_1.default.instance.exportCfg.front_export_delay / 1000, this);
        AdMgr_1.default.instance.hideBanner();
        this.scheduleOnce(function () {
            WxApi_1.default.bannerWuChu2();
        }, ExportUtils_1.default.instance.exportCfg.front_export_delay / 1000);
        this.node.getChildByName('randomBtn').active = WxApi_1.default.isValidBanner() &&
            PlayerDataMgr_1.default.getPlayerData().grade >= ExportUtils_1.default.instance.exportCfg.front_randompaly_start_level;
    };
    FullGameUI.prototype.onDisable = function () {
        clearTimeout(WxApi_1.default.bannerTO2);
        AdMgr_1.default.instance.hideBanner();
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
    };
    FullGameUI.prototype.getHotRandArr = function () {
        this.hotArr = [];
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        arr = ExportUtils_1.default.instance.shuffleArr(arr);
        this.hotArr = arr.slice(0, 3);
    };
    FullGameUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var colorBar = node.getChildByName('colorBar').getComponent(cc.Sprite);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            var hot = node.getChildByName('hot');
            ExportUtils_1.default.instance.loadSpriteFrame('ExportRes/' + (Math.floor(i % 9) + 1), colorBar);
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            hot.active = this_1.hotArr.indexOf(i) != -1;
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    FullGameUI.prototype.continueCB = function () {
        this.node.active = false;
    };
    FullGameUI.prototype.randomNav = function () {
        var id = Math.floor(Math.random() * 6);
        this.navCB(null, id);
    };
    FullGameUI.prototype.navCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('网红爆款全屏幕导出页-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () { }, function () {
            WxApi_1.default.aldEvent('网红爆款全屏幕导出页-总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], FullGameUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FullGameUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], FullGameUI.prototype, "content", void 0);
    FullGameUI = __decorate([
        ccclass
    ], FullGameUI);
    return FullGameUI;
}(cc.Component));
exports.default = FullGameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRnVsbEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4Q0FBbUM7QUFDbkMscURBQWdEO0FBQ2hELGtEQUE2QztBQUM3QyxpREFBNEM7QUFDNUMsa0VBQTZEO0FBRXZELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUF3R0M7UUFwR0csVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLGNBQVEsR0FBVSxFQUFFLENBQUE7UUFFcEIsWUFBTSxHQUFhLEVBQUUsQ0FBQTtRQUVyQixtQkFBYSxHQUFhLElBQUksQ0FBQTs7UUF1RjlCLGlCQUFpQjtJQUNyQixDQUFDO0lBdEZHLGVBQWU7SUFFZiwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxRQUFtQixFQUFFLEtBQVc7UUFDbkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQTtTQUNoQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN2QixlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNaLElBQUkscUJBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixF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QVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWpHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7OENBQ0k7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDSztJQVROLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F1RzlCO0lBQUQsaUJBQUM7Q0F2R0QsQUF1R0MsQ0F2R3VDLEVBQUUsQ0FBQyxTQUFTLEdBdUduRDtrQkF2R29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpIdHRwIGZyb20gXCIuLi9FeHBvcnRIdHRwVXRpbHNcIjtcclxuaW1wb3J0IEpKTWdyIGZyb20gXCIuLi9FeHBvcnRVdGlsc1wiO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTGlicy9XeEFwaVwiO1xyXG5pbXBvcnQgQWRNZ3IgZnJvbSBcIi4uLy4uL1NjcmlwdHMvTW9kL0FkTWdyXCI7XHJcbmltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi8uLi9TY3JpcHRzL0xpYnMvUGxheWVyRGF0YU1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxHYW1lVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcbiAgICBob3RBcnI6IG51bWJlcltdID0gW11cclxuXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VJKGNhbGxiYWNrPzogRnVuY3Rpb24sIHBhcmFtPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+e9kee6oueIhuasvuWFqOWxj+W5leWvvOWHuumhteWHuueOsOasoeaVsCcpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLmdldEhvdFJhbmRBcnIoKVxyXG4gICAgICAgIHRoaXMuX2luaXQoKVxyXG4gICAgICAgIGlmIChKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfYWxsX3NjcmVlbl9hdXRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tTmF2KClcclxuICAgICAgICB9XHJcbiAgICAgICAgVXRpbGl0eS5kZWxheUFjdGl2ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2NvbnRpbnVlQnRuJyksIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9leHBvcnRfZGVsYXkgLyAxMDAwLCB0aGlzKVxyXG5cclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIFd4QXBpLmJhbm5lcld1Q2h1MigpXHJcbiAgICAgICAgfSwgSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2V4cG9ydF9kZWxheSAvIDEwMDApXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncmFuZG9tQnRuJykuYWN0aXZlID0gV3hBcGkuaXNWYWxpZEJhbm5lcigpICYmXHJcbiAgICAgICAgICAgIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlID49IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9yYW5kb21wYWx5X3N0YXJ0X2xldmVsXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChXeEFwaS5iYW5uZXJUTzIpXHJcbiAgICAgICAgQWRNZ3IuaW5zdGFuY2UuaGlkZUJhbm5lcigpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgJiYgdGhpcy5jbG9zZUNhbGxiYWNrKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SG90UmFuZEFycigpIHtcclxuICAgICAgICB0aGlzLmhvdEFyciA9IFtdXHJcbiAgICAgICAgbGV0IGFycjogbnVtYmVyW10gPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF1cclxuICAgICAgICBhcnIgPSBKSk1nci5pbnN0YW5jZS5zaHVmZmxlQXJyKGFycilcclxuICAgICAgICB0aGlzLmhvdEFyciA9IGFyci5zbGljZSgwLCAzKVxyXG4gICAgfVxyXG5cclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5teU5hdkFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSlcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChub2RlKVxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbG9yQmFyOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdjb2xvckJhcicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBjYy5MYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgbGV0IGhvdDogY2MuTm9kZSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hvdCcpXHJcblxyXG4gICAgICAgICAgICBKSk1nci5pbnN0YW5jZS5sb2FkU3ByaXRlRnJhbWUoJ0V4cG9ydFJlcy8nICsgKE1hdGguZmxvb3IoaSAlIDkpICsgMSksIGNvbG9yQmFyKVxyXG4gICAgICAgICAgICBuYW1lLnN0cmluZyA9IEpKTWdyLmluc3RhbmNlLmdldFN1YnRpdGxlKGkpXHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmxvYWRJbWdCeVVybChpY29uLCB0aGlzLm15TmF2QXJyW2ldLmljb24pXHJcbiAgICAgICAgICAgIGhvdC5hY3RpdmUgPSB0aGlzLmhvdEFyci5pbmRleE9mKGkpICE9IC0xXHJcblxyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7IHRoaXMubmF2Q0IoZXZlbnQsIGkpIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRpbnVlQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tTmF2KCkge1xyXG4gICAgICAgIGxldCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXHJcbiAgICAgICAgdGhpcy5uYXZDQihudWxsLCBpZClcclxuICAgIH1cclxuXHJcbiAgICBuYXZDQihldmVudDogY2MuRXZlbnQsIGlkOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgaWQ6JywgaWQpXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+e9kee6oueIhuasvuWFqOWxj+W5leWvvOWHuumhtS3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLk5hdmlnYXRlQXBwKGlkLCAoKSA9PiB7IH0sICgpID0+IHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+e9kee6oueIhuasvuWFqOWxj+W5leWvvOWHuumhtS3mgLvmiJDlip/ot7PovazmlbAnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f47dTdHCdHOYWgWn/A9zfd', 'Level2');
// Scripts/Crl/Level/Level2.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level2 = /** @class */ (function (_super) {
    __extends(Level2, _super);
    function Level2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level2.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        if (!(this.getNeedleCrlById(1).switchState > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level2.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.playerCrl.pointIndex == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(4)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level2.prototype.trigger11 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.SharpCrl.moveToPoint(0);
                return [2 /*return*/];
            });
        });
    };
    Level2.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Level2 = __decorate([
        ccclass
    ], Level2);
    return Level2;
}(LevelBase_1.default));
exports.default = Level2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVM7SUFBN0M7O0lBdUJBLENBQUM7SUFyQlMsMEJBQVMsR0FBZjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7NkJBQy9CLENBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUEsRUFBeEMsd0JBQXdDO3dCQUN4QyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7d0JBQ25DLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs7O3dCQUV2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7S0FDdkI7SUFDSywwQkFBUyxHQUFmOzs7Ozs2QkFDUSxDQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQSxFQUE5Qix3QkFBOEI7d0JBQzlCLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzs7d0JBRXZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7OztLQUN2QjtJQUNLLDBCQUFTLEdBQWY7OztnQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7OztLQUMvQjtJQUNLLDBCQUFTLEdBQWY7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFBOzs7OztLQUNyQztJQXRCZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXVCMUI7SUFBRCxhQUFDO0NBdkJELEFBdUJDLENBdkJtQyxtQkFBUyxHQXVCNUM7a0JBdkJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5lZWRsZSBmcm9tIFwiLi4vUHJvcC9OZWVkbGVcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbDIgZXh0ZW5kcyBMZXZlbEJhc2Uge1xyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIwMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgIGlmICh0aGlzLmdldE5lZWRsZUNybEJ5SWQoMSkuc3dpdGNoU3RhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLnBvaW50SW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgyKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCg0KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjExKCkge1xyXG4gICAgICAgIHRoaXMuU2hhcnBDcmwubW92ZVRvUG9pbnQoMClcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66a63zd4wlKDrcVYZCaguS3', 'Level3');
// Scripts/Crl/Level/Level3.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level3 = /** @class */ (function (_super) {
    __extends(Level3, _super);
    function Level3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level3.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.meatCrl.triggerCB()];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level3.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Level3.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Level3.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Level3 = __decorate([
        ccclass
    ], Level3);
    return Level3;
}(LevelBase_1.default));
exports.default = Level3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVM7SUFBN0M7O0lBZ0JBLENBQUM7SUFkUywwQkFBUyxHQUFmOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFBO3dCQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7S0FDdkI7SUFDSywwQkFBUyxHQUFmOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzs7OztLQUN0QztJQUNLLDBCQUFTLEdBQWY7Ozs7OztLQUVDO0lBQ0ssMEJBQVMsR0FBZjs7Ozs7O0tBRUM7SUFmZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWdCMUI7SUFBRCxhQUFDO0NBaEJELEFBZ0JDLENBaEJtQyxtQkFBUyxHQWdCNUM7a0JBaEJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbDMgZXh0ZW5kcyBMZXZlbEJhc2Uge1xyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIwMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLm1lYXRDcmwudHJpZ2dlckNCKClcclxuICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIzMCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ExportLibs/View/DrawUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12943VnbVBF/JhC43WoEYow', 'DrawUI');
// ExportLibs/View/DrawUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExportUtils_1 = require("../ExportUtils");
var WxApi_1 = require("../../Scripts/Libs/WxApi");
var AdMgr_1 = require("../../Scripts/Mod/AdMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DrawUI = /** @class */ (function (_super) {
    __extends(DrawUI, _super);
    function DrawUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.scroll = null;
        _this.content = null;
        _this.bgNode = null;
        _this.myNavArr = [];
        _this.closeCallback = null;
        _this.isAutoClose = false;
        _this.hadTouch = false;
        return _this;
    }
    // onLoad () {}
    DrawUI.prototype.start = function () {
    };
    DrawUI.prototype.showUI = function (callback, param) {
        if (callback) {
            this.closeCallback = callback;
        }
        if (param && param.isAutoClose) {
            this.isAutoClose = param.isAutoClose;
        }
        WxApi_1.default.aldEvent('左边抽屉导出弹窗出现次数');
        this.node.active = true;
        this.moveDraw(-375, function () { });
    };
    DrawUI.prototype.onEnable = function () {
        var _this = this;
        this.myNavArr = [].concat(ExportUtils_1.default.instance.navigateAppArr);
        this._init();
        if (this.isAutoClose) {
            this.scheduleOnce(function () {
                if (!_this.hadTouch)
                    _this.closeCB();
            }, 1.5);
        }
    };
    DrawUI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
        this.content.destroyAllChildren();
        this.closeCallback && this.closeCallback();
        this.closeCallback = null;
        this.bgNode.x = -1000;
        this.hadTouch = false;
    };
    DrawUI.prototype.moveDraw = function (x, cb) {
        var a1 = cc.moveTo(0.2, cc.v2(x, this.bgNode.y));
        var a2 = cc.callFunc(cb);
        this.bgNode.runAction(cc.sequence(a1, a2));
    };
    DrawUI.prototype._init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = cc.instantiate(this_1.item);
            node.active = true;
            this_1.content.addChild(node);
            var name = node.getChildByName('name').getComponent(cc.Label);
            var icon = node.getChildByName('icon').getComponent(cc.Sprite);
            name.string = ExportUtils_1.default.instance.getSubtitle(i);
            ExportUtils_1.default.instance.loadImgByUrl(icon, this_1.myNavArr[i].icon);
            node.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, i); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.myNavArr.length; i++) {
            _loop_1(i);
        }
    };
    DrawUI.prototype.closeCB = function () {
        var _this = this;
        this.moveDraw(-1000, function () {
            _this.node.active = false;
        });
    };
    DrawUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        this.hadTouch = true;
        WxApi_1.default.aldEvent('左边抽屉导出弹窗-总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                _this.scheduleOnce(function () { AdMgr_1.default.instance.showBanner(); }, 0.1);
            });
        }, function () {
            WxApi_1.default.aldEvent('左边抽屉导出弹窗全-总成功跳转数');
        });
    };
    DrawUI.prototype.update = function (dt) {
        if (!this.hadTouch && this.scroll.isScrolling()) {
            this.hadTouch = true;
        }
    };
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "item", void 0);
    __decorate([
        property(cc.ScrollView)
    ], DrawUI.prototype, "scroll", void 0);
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], DrawUI.prototype, "bgNode", void 0);
    DrawUI = __decorate([
        ccclass
    ], DrawUI);
    return DrawUI;
}(cc.Component));
exports.default = DrawUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhwb3J0TGlic1xcVmlld1xcRHJhd1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBQTRDO0FBRXRDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFEaEQ7UUFBQSxxRUEwR0M7UUF0R0csVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsY0FBUSxHQUFVLEVBQUUsQ0FBQTtRQUVwQixtQkFBYSxHQUFhLElBQUksQ0FBQTtRQUU5QixpQkFBVyxHQUFZLEtBQUssQ0FBQTtRQUM1QixjQUFRLEdBQVksS0FBSyxDQUFBOztJQXNGN0IsQ0FBQztJQXBGRyxlQUFlO0lBRWYsc0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sUUFBbUIsRUFBRSxLQUFXO1FBQ25DLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUE7U0FDaEM7UUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQTtTQUN2QztRQUNELGVBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsY0FBUSxDQUFDLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFFBQVEs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R29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSkpNZ3IsIHsgRXhwb3J0RGlyIH0gZnJvbSBcIi4uL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Nb2QvQWRNZ3JcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3VUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZ05vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgbXlOYXZBcnI6IGFueVtdID0gW11cclxuXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICBpc0F1dG9DbG9zZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBoYWRUb3VjaDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSShjYWxsYmFjaz86IEZ1bmN0aW9uLCBwYXJhbT86IGFueSkge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyYW0gJiYgcGFyYW0uaXNBdXRvQ2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0F1dG9DbG9zZSA9IHBhcmFtLmlzQXV0b0Nsb3NlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFd4QXBpLmFsZEV2ZW50KCflt6bovrnmir3lsYnlr7zlh7rlvLnnqpflh7rnjrDmrKHmlbAnKVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tb3ZlRHJhdygtMzc1LCAoKSA9PiB7IH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5teU5hdkFyciA9IFtdLmNvbmNhdChKSk1nci5pbnN0YW5jZS5uYXZpZ2F0ZUFwcEFycilcclxuICAgICAgICB0aGlzLl9pbml0KClcclxuICAgICAgICBpZiAodGhpcy5pc0F1dG9DbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFkVG91Y2gpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUNCKClcclxuICAgICAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgJiYgdGhpcy5jbG9zZUNhbGxiYWNrKClcclxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBudWxsXHJcbiAgICAgICAgdGhpcy5iZ05vZGUueCA9IC0xMDAwXHJcbiAgICAgICAgdGhpcy5oYWRUb3VjaCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZURyYXcoeDogbnVtYmVyLCBjYjogRnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgYTEgPSBjYy5tb3ZlVG8oMC4yLCBjYy52Mih4LCB0aGlzLmJnTm9kZS55KSlcclxuICAgICAgICBsZXQgYTIgPSBjYy5jYWxsRnVuYyhjYilcclxuICAgICAgICB0aGlzLmJnTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYTEsIGEyKSlcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXlOYXZBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSlcclxuXHJcbiAgICAgICAgICAgIGxldCBuYW1lOiBjYy5MYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIGxldCBpY29uOiBjYy5TcHJpdGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuXHJcbiAgICAgICAgICAgIG5hbWUuc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UuZ2V0U3VidGl0bGUoaSlcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UubG9hZEltZ0J5VXJsKGljb24sIHRoaXMubXlOYXZBcnJbaV0uaWNvbilcclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaSkgfSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VDQigpIHtcclxuICAgICAgICB0aGlzLm1vdmVEcmF3KC0xMDAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbmF2Q0IoZXZlbnQ6IGNjLkV2ZW50LCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGlkOicsIGlkKVxyXG4gICAgICAgIHRoaXMuaGFkVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+W3pui+ueaKveWxieWvvOWHuuW8ueeqly3mgLvngrnlh7vmlbAnKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLk5hdmlnYXRlQXBwKGlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19SRUNPTU1FTkRVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKCkgfSwgMC4xKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+W3pui+ueaKveWxieWvvOWHuuW8ueeql+WFqC3mgLvmiJDlip/ot7PovazmlbAnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhZFRvdWNoICYmIHRoaXMuc2Nyb2xsLmlzU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5oYWRUb3VjaCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c900dbUYdRBwqtoN0ujG3aE', 'Level6');
// Scripts/Crl/Level/Level6.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level6 = /** @class */ (function (_super) {
    __extends(Level6, _super);
    function Level6() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.meatMove = false;
        return _this;
    }
    Level6.prototype.onEnable = function () {
        this.schedule(this.updateCB);
    };
    Level6.prototype.updateCB = function () {
        var _this = this;
        if (this.meatNode && this.meatNode.isValid && this.meatNode.y <= 70 && !this.meatMove) {
            this.canTouch = false;
            this.playerCrl.moveToPoint(0);
            this.meatMove = true;
            this.scheduleOnce(function () { _this.canTouch = true; }, 1);
        }
    };
    Level6.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level6.prototype.trigger01 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getNeedleCrlById(0).node.active = false;
                return [2 /*return*/];
            });
        });
    };
    Level6.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Level6 = __decorate([
        ccclass
    ], Level6);
    return Level6;
}(LevelBase_1.default));
exports.default = Level6;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVM7SUFEN0M7UUFBQSxxRUE0QkM7UUF6QkcsY0FBUSxHQUFZLEtBQUssQ0FBQTs7SUF5QjdCLENBQUM7SUF2QkcseUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuRixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDdkQ7SUFDTCxDQUFDO0lBRUssMEJBQVMsR0FBZjs7O2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7O0tBQ3ZCO0lBQ0ssMEJBQVMsR0FBZjs7O2dCQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTs7OztLQUMvQztJQUNLLDBCQUFTLEdBQWY7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzs7OztLQUN0QztJQXpCZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTJCMUI7SUFBRCxhQUFDO0NBM0JELEFBMkJDLENBM0JtQyxtQkFBUyxHQTJCNUM7a0JBM0JvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWw2IGV4dGVuZHMgTGV2ZWxCYXNlIHtcclxuXHJcbiAgICBtZWF0TW92ZTogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNCKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNCKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1lYXROb2RlICYmIHRoaXMubWVhdE5vZGUuaXNWYWxpZCAmJiB0aGlzLm1lYXROb2RlLnkgPD0gNzAgJiYgIXRoaXMubWVhdE1vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgICAgIHRoaXMubWVhdE1vdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5jYW5Ub3VjaCA9IHRydWUgfSwgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMDEoKSB7XHJcbiAgICAgICAgdGhpcy5nZXROZWVkbGVDcmxCeUlkKDApLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIxMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbffahfBQ5C6rof27BHiJtR', 'Level8');
// Scripts/Crl/Level/Level8.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var Stone_1 = require("../Prop/Stone");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level8 = /** @class */ (function (_super) {
    __extends(Level8, _super);
    function Level8() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.waterNode = null;
        _this.desSwitch = false;
        return _this;
    }
    Level8.prototype.onEnable = function () {
        this.schedule(this.updateCB);
    };
    Level8.prototype.updateCB = function () {
        if (this.isGameOver)
            return;
        if (this.meatNode.isValid && Utility_1.default.getWorldDis(Stone_1.default.Share.node, this.meatNode) <= 100) {
            this.loseCB();
            return;
        }
        if (!this.desSwitch) {
            for (var i = 0; i < this.waterNode.childrenCount; i++) {
                var w = this.waterNode.children[i];
                if (Utility_1.default.getWorldDis(Stone_1.default.Share.node, w) <= 111) {
                    this.waterNode.destroyAllChildren();
                    Stone_1.default.Share.node.runAction(cc.scaleTo(0.5, 1.2));
                    break;
                }
            }
            for (var i = 0; i < this.waterNode.childrenCount; i++) {
                var w = this.waterNode.children[i];
                if (Utility_1.default.getWorldDis(this.DesNode, w) <= 50) {
                    Utility_1.default.loadSpriteFrame('Texture/Prop/yxz_dj13_1', this.DesNode.getComponent(cc.Sprite));
                    this.desSwitch = true;
                    if (this.Sharp.isValid) {
                        this.canTouch = false;
                        this.SharpCrl.moveToPoint(0);
                    }
                    break;
                }
            }
        }
    };
    Level8.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.scheduleOnce(function () {
                    _this.canTouch = true;
                }, 3);
                return [2 /*return*/];
            });
        });
    };
    Level8.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.canTouch = true;
                return [2 /*return*/];
            });
        });
    };
    Level8.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.getNeedleCrlById(3).isAwake = true;
                this.scheduleOnce(function () {
                    _this.canTouch = true;
                }, 3);
                return [2 /*return*/];
            });
        });
    };
    Level8.prototype.trigger30 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        if (!this.desSwitch) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.loseCB();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level8.prototype, "waterNode", void 0);
    Level8 = __decorate([
        ccclass
    ], Level8);
    return Level8;
}(LevelBase_1.default));
exports.default = Level8;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHVDQUFrQztBQUNsQyx5Q0FBb0M7QUFFOUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFvQywwQkFBUztJQUQ3QztRQUFBLHFFQXNFQztRQWxFRyxlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBWSxLQUFLLENBQUE7O0lBZ0U5QixDQUFDO0lBOURHLHlCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFNO1FBRTNCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksaUJBQU8sQ0FBQyxXQUFXLENBQUMsZUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUN0RixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDYixPQUFNO1NBQ1Q7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNsQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLGVBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtvQkFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO29CQUNuQyxlQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtvQkFDaEQsTUFBSztpQkFDUjthQUNKO1lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDbEMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDNUMsaUJBQU8sQ0FBQyxlQUFlLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7b0JBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO29CQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO3dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTt3QkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7cUJBQy9CO29CQUVELE1BQUs7aUJBQ1I7YUFDSjtTQUNKO0lBRUwsQ0FBQztJQUVLLDBCQUFTLEdBQWY7Ozs7Z0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtnQkFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7O0tBQ1I7SUFDSywwQkFBUyxHQUFmOzs7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7S0FDdkI7SUFDSywwQkFBUyxHQUFmOzs7O2dCQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO2dCQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7S0FDUjtJQUNLLDBCQUFTLEdBQWY7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBOzZCQUMvQixJQUFJLENBQUMsU0FBUyxFQUFkLHdCQUFjO3dCQUNkLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMsc0JBQU07O3dCQUVOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTs7Ozs7O0tBRXBCO0lBakVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ087SUFIUixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBcUUxQjtJQUFELGFBQUM7Q0FyRUQsQUFxRUMsQ0FyRW1DLG1CQUFTLEdBcUU1QztrQkFyRW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IFN0b25lIGZyb20gXCIuLi9Qcm9wL1N0b25lXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWw4IGV4dGVuZHMgTGV2ZWxCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhdGVyTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBkZXNTd2l0Y2g6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDQilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDQigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWVhdE5vZGUuaXNWYWxpZCAmJiBVdGlsaXR5LmdldFdvcmxkRGlzKFN0b25lLlNoYXJlLm5vZGUsIHRoaXMubWVhdE5vZGUpIDw9IDEwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRlc1N3aXRjaCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2F0ZXJOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHcgPSB0aGlzLndhdGVyTm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXMoU3RvbmUuU2hhcmUubm9kZSwgdykgPD0gMTExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXRlck5vZGUuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgICAgICAgICAgICAgICAgICBTdG9uZS5TaGFyZS5ub2RlLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuNSwgMS4yKSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2F0ZXJOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHcgPSB0aGlzLndhdGVyTm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5EZXNOb2RlLCB3KSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxpdHkubG9hZFNwcml0ZUZyYW1lKCdUZXh0dXJlL1Byb3AveXh6X2RqMTNfMScsIHRoaXMuRGVzTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc1N3aXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5TaGFycC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0sIDMpXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIyMCgpIHtcclxuICAgICAgICB0aGlzLmdldE5lZWRsZUNybEJ5SWQoMykuaXNBd2FrZSA9IHRydWVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICAgICAgfSwgMylcclxuICAgIH1cclxuICAgIGFzeW5jIHRyaWdnZXIzMCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgwKVxyXG4gICAgICAgIGlmICh0aGlzLmRlc1N3aXRjaCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvc2VDQigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79c99Zl62hK57chV6G4niFD', 'Level5');
// Scripts/Crl/Level/Level5.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Stone_1 = require("../Prop/Stone");
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level5 = /** @class */ (function (_super) {
    __extends(Level5, _super);
    function Level5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level5.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Stone_1.default.Share.triggerCB()];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level5.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.Sharp && this.Sharp.isValid)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(2)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(3)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Level5.prototype.trigger20 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.Sharp && this.Sharp.isValid)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.SharpCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Level5 = __decorate([
        ccclass
    ], Level5);
    return Level5;
}(LevelBase_1.default));
exports.default = Level5;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBQ2xDLHlDQUFvQztBQUU5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFTO0lBQTdDOztJQXVCQSxDQUFDO0lBckJTLDBCQUFTLEdBQWY7Ozs7NEJBQ0kscUJBQU0sZUFBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQTdCLFNBQTZCLENBQUE7d0JBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7OztLQUN2QjtJQUVLLDBCQUFTLEdBQWY7Ozs7OzZCQUNRLENBQUEsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQSxFQUFoQyx3QkFBZ0M7d0JBQ2hDLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTs7NEJBRWxDLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7Ozs7OztLQUUxQztJQUVLLDBCQUFTLEdBQWY7Ozs7OzZCQUNRLENBQUEsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQSxFQUFoQyx3QkFBZ0M7d0JBQ2hDLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQTs7Ozs7O0tBRXpDO0lBckJnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBdUIxQjtJQUFELGFBQUM7Q0F2QkQsQUF1QkMsQ0F2Qm1DLG1CQUFTLEdBdUI1QztrQkF2Qm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvbmUgZnJvbSBcIi4uL1Byb3AvU3RvbmVcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbDUgZXh0ZW5kcyBMZXZlbEJhc2Uge1xyXG5cclxuICAgIGFzeW5jIHRyaWdnZXIwMCgpIHtcclxuICAgICAgICBhd2FpdCBTdG9uZS5TaGFyZS50cmlnZ2VyQ0IoKVxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwICYmIHRoaXMuU2hhcnAuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMSlcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjIwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwICYmIHRoaXMuU2hhcnAuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLlNoYXJwQ3JsLm1vdmVUb1BvaW50KDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/LevelBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8eb3fKy3TBPUYz0uZxx2D2O', 'LevelBase');
// Scripts/Crl/Level/LevelBase.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerDataMgr_1 = require("../../Libs/PlayerDataMgr");
var Utility_1 = require("../../Mod/Utility");
var GameLogic_1 = require("../GameLogic");
var Player_1 = require("../Player");
var Meat_1 = require("../Prop/Meat");
var Needle_1 = require("../Prop/Needle");
var Sharp_1 = require("../Sharp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelBase = /** @class */ (function (_super) {
    __extends(LevelBase, _super);
    function LevelBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playerNode = null;
        _this.meatNode = null;
        _this.playerCrl = null;
        _this.meatCrl = null;
        _this.DesNode = null;
        _this.levelCrl = null;
        _this.NeedleNode = null;
        _this.Sharp = null;
        _this.SharpCrl = null;
        _this.canTouch = true;
        _this.isGameOver = false;
        _this.isWin = false;
        return _this;
    }
    LevelBase_1 = LevelBase;
    LevelBase.prototype.onLoad = function () {
        LevelBase_1.Share = this;
        this.playerNode = this.node.getChildByName('Player');
        this.meatNode = this.node.getChildByName('Meat');
        this.DesNode = this.node.getChildByName('Des');
        this.playerCrl = this.playerNode.getComponent(Player_1.default);
        this.meatCrl = this.meatNode.getComponent(Meat_1.default);
        this.levelCrl = this.node.getComponent('Level' + PlayerDataMgr_1.default.getPlayerData().grade);
        this.NeedleNode = this.node.getChildByName('NeedleNode');
        this.Sharp = this.node.getChildByName('Sharp');
        if (this.Sharp)
            this.SharpCrl = this.Sharp.getComponent(Sharp_1.default);
    };
    LevelBase.prototype.start = function () {
    };
    LevelBase.prototype.triggerNeedle = function (index, pIndex) {
        this.canTouch = false;
        this.levelCrl['trigger' + index.toString() + pIndex.toString()]();
    };
    LevelBase.prototype.checkGotDes = function () {
        if (this.isGameOver)
            return;
        if (Utility_1.default.getWorldDis(this.playerNode, this.DesNode) <= 20) {
            if (this.playerCrl.gotMeat) {
                this.winCB();
            }
            else {
                this.loseCB();
            }
        }
    };
    LevelBase.prototype.winCB = function () {
        if (this.isGameOver)
            return;
        this.isGameOver = true;
        this.isWin = true;
        this.playerNode.stopAllActions();
        if (this.Sharp)
            this.Sharp.stopAllActions();
        GameLogic_1.default.Share.showFinishUI();
    };
    LevelBase.prototype.loseCB = function () {
        if (this.isGameOver)
            return;
        this.isGameOver = true;
        this.isWin = false;
        this.playerNode.stopAllActions();
        if (this.Sharp)
            this.Sharp.stopAllActions();
        GameLogic_1.default.Share.showDefeatUI();
    };
    LevelBase.prototype.getNeedleCrlById = function (id) {
        return this.NeedleNode.children[id].getComponent(Needle_1.default);
    };
    LevelBase.prototype.update = function (dt) {
        this.checkGotDes();
    };
    var LevelBase_1;
    LevelBase = LevelBase_1 = __decorate([
        ccclass
    ], LevelBase);
    return LevelBase;
}(cc.Component));
exports.default = LevelBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWxCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCw2Q0FBd0M7QUFDeEMsMENBQXFDO0FBQ3JDLG9DQUErQjtBQUMvQixxQ0FBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLGtDQUE2QjtBQUV2QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBNkVDO1FBekVHLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBQzFCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFDeEIsZUFBUyxHQUFXLElBQUksQ0FBQTtRQUN4QixhQUFPLEdBQVMsSUFBSSxDQUFBO1FBQ3BCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFDdkIsY0FBUSxHQUFRLElBQUksQ0FBQTtRQUNwQixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUMxQixXQUFLLEdBQVksSUFBSSxDQUFBO1FBQ3JCLGNBQVEsR0FBVSxJQUFJLENBQUE7UUFFdEIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUN4QixnQkFBVSxHQUFZLEtBQUssQ0FBQTtRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFBOztJQTZEMUIsQ0FBQztrQkE1RW9CLFNBQVM7SUFpQjFCLDBCQUFNLEdBQU47UUFDSSxXQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENB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QTRFQyxDQTVFc0MsRUFBRSxDQUFDLFNBQVMsR0E0RWxEO2tCQTVFb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi8uLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBHYW1lTG9naWMgZnJvbSBcIi4uL0dhbWVMb2dpY1wiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuaW1wb3J0IE1lYXQgZnJvbSBcIi4uL1Byb3AvTWVhdFwiO1xyXG5pbXBvcnQgTmVlZGxlIGZyb20gXCIuLi9Qcm9wL05lZWRsZVwiO1xyXG5pbXBvcnQgU2hhcnAgZnJvbSBcIi4uL1NoYXJwXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgU2hhcmU6IExldmVsQmFzZVxyXG5cclxuICAgIHBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBtZWF0Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIHBsYXllckNybDogUGxheWVyID0gbnVsbFxyXG4gICAgbWVhdENybDogTWVhdCA9IG51bGxcclxuICAgIERlc05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBsZXZlbENybDogYW55ID0gbnVsbFxyXG4gICAgTmVlZGxlTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIFNoYXJwOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgU2hhcnBDcmw6IFNoYXJwID0gbnVsbFxyXG5cclxuICAgIGNhblRvdWNoOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBpc1dpbjogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIExldmVsQmFzZS5TaGFyZSA9IHRoaXNcclxuICAgICAgICB0aGlzLnBsYXllck5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1BsYXllcicpXHJcbiAgICAgICAgdGhpcy5tZWF0Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnTWVhdCcpXHJcbiAgICAgICAgdGhpcy5EZXNOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdEZXMnKVxyXG4gICAgICAgIHRoaXMucGxheWVyQ3JsID0gdGhpcy5wbGF5ZXJOb2RlLmdldENvbXBvbmVudChQbGF5ZXIpXHJcbiAgICAgICAgdGhpcy5tZWF0Q3JsID0gdGhpcy5tZWF0Tm9kZS5nZXRDb21wb25lbnQoTWVhdClcclxuICAgICAgICB0aGlzLmxldmVsQ3JsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudCgnTGV2ZWwnICsgUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUpXHJcbiAgICAgICAgdGhpcy5OZWVkbGVOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdOZWVkbGVOb2RlJylcclxuICAgICAgICB0aGlzLlNoYXJwID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTaGFycCcpXHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnApXHJcbiAgICAgICAgICAgIHRoaXMuU2hhcnBDcmwgPSB0aGlzLlNoYXJwLmdldENvbXBvbmVudChTaGFycClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlck5lZWRsZShpbmRleDogbnVtYmVyLCBwSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGV2ZWxDcmxbJ3RyaWdnZXInICsgaW5kZXgudG9TdHJpbmcoKSArIHBJbmRleC50b1N0cmluZygpXSgpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tHb3REZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuXHJcbiAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5wbGF5ZXJOb2RlLCB0aGlzLkRlc05vZGUpIDw9IDIwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllckNybC5nb3RNZWF0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbkNCKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5DQigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pc1dpbiA9IHRydWVcclxuICAgICAgICB0aGlzLnBsYXllck5vZGUuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwKSB0aGlzLlNoYXJwLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICBHYW1lTG9naWMuU2hhcmUuc2hvd0ZpbmlzaFVJKClcclxuICAgIH1cclxuXHJcbiAgICBsb3NlQ0IoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNXaW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucGxheWVyTm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnApIHRoaXMuU2hhcnAuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgIEdhbWVMb2dpYy5TaGFyZS5zaG93RGVmZWF0VUkoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldE5lZWRsZUNybEJ5SWQoaWQ6IG51bWJlcik6IE5lZWRsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuTmVlZGxlTm9kZS5jaGlsZHJlbltpZF0uZ2V0Q29tcG9uZW50KE5lZWRsZSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmNoZWNrR290RGVzKClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level9.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f68favbPQ1FbqFhzNHqLiYR', 'Level9');
// Scripts/Crl/Level/Level9.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level9 = /** @class */ (function (_super) {
    __extends(Level9, _super);
    function Level9() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sawNode = null;
        return _this;
    }
    Level9.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        if (!this.sawNode.isValid) return [3 /*break*/, 2];
                        this.loseCB();
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(2)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Level9.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.scheduleOnce(function () {
                    _this.sawNode.destroy();
                    _this.canTouch = true;
                }, 2);
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Level9.prototype, "sawNode", void 0);
    Level9 = __decorate([
        ccclass
    ], Level9);
    return Level9;
}(LevelBase_1.default));
exports.default = Level9;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWw5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVM7SUFEN0M7UUFBQSxxRUFxQkM7UUFqQkcsYUFBTyxHQUFZLElBQUksQ0FBQTs7SUFpQjNCLENBQUM7SUFmUywwQkFBUyxHQUFmOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs2QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQXBCLHdCQUFvQjt3QkFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBOzs0QkFFYixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7d0JBQ25DLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTs7Ozs7O0tBRTFDO0lBQ0ssMEJBQVMsR0FBZjs7OztnQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7b0JBQ3RCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7S0FDUjtJQWhCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNLO0lBSE4sTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQW9CMUI7SUFBRCxhQUFDO0NBcEJELEFBb0JDLENBcEJtQyxtQkFBUyxHQW9CNUM7a0JBcEJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbDkgZXh0ZW5kcyBMZXZlbEJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2F3Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBhc3luYyB0cmlnZ2VyMDAoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICBpZiAodGhpcy5zYXdOb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDEpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheWVyQ3JsLm1vdmVUb1BvaW50KDIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgdHJpZ2dlcjEwKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zYXdOb2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Meat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0645KFQ2hFw7jXMP2cWpkN', 'Meat');
// Scripts/Crl/Prop/Meat.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var Player_1 = require("../Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Meat = /** @class */ (function (_super) {
    __extends(Meat, _super);
    function Meat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveByY = 0;
        _this.moveTime = 1;
        _this.playerNode = null;
        _this.isMoveing = false;
        _this.isTriggered = false;
        return _this;
    }
    // onLoad () {}
    Meat.prototype.start = function () {
        this.playerNode = LevelBase_1.default.Share.playerNode;
    };
    //触发事件
    Meat.prototype.triggerCB = function () {
        var _this = this;
        return new Promise(function (rs, rj) {
            _this.isMoveing = true;
            var a1 = cc.moveBy(_this.moveTime, cc.v2(0, _this.moveByY));
            var a2 = cc.callFunc(function () {
                _this.isMoveing = false;
                _this.isTriggered = true;
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    //检测是否碰到美人鱼
    Meat.prototype.eatByPlayer = function () {
        if (this.playerNode) {
            var dis = Utility_1.default.getWorldDis(this.node, this.playerNode);
            if (dis <= 50 && !this.isMoveing) {
                //被吃掉
                this.playerNode.getComponent(Player_1.default).eatMean();
                this.node.destroy();
            }
        }
    };
    Meat.prototype.eatBySharp = function () {
        if (LevelBase_1.default.Share.Sharp && LevelBase_1.default.Share.Sharp.isValid) {
            var dis = Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.Sharp);
            if (dis <= 50 && !this.isMoveing) {
                //被吃掉
                this.node.destroy();
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Meat.prototype.update = function (dt) {
        this.eatByPlayer();
        this.eatBySharp();
    };
    __decorate([
        property
    ], Meat.prototype, "moveByY", void 0);
    __decorate([
        property
    ], Meat.prototype, "moveTime", void 0);
    Meat = __decorate([
        ccclass
    ], Meat);
    return Meat;
}(cc.Component));
exports.default = Meat;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxNZWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxnREFBMkM7QUFDM0Msb0NBQStCO0FBRXpCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFEOUM7UUFBQSxxRUE4REM7UUExREcsYUFBTyxHQUFXLENBQUMsQ0FBQTtRQUduQixjQUFRLEdBQVcsQ0FBQyxDQUFBO1FBRXBCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGVBQVMsR0FBWSxLQUFLLENBQUE7UUFDMUIsaUJBQVcsR0FBWSxLQUFLLENBQUE7O0lBa0RoQyxDQUFDO0lBaERHLGVBQWU7SUFFZixvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7SUFDaEQsQ0FBQztJQUVELE1BQU07SUFDTix3QkFBUyxHQUFUO1FBQUEsaUJBWUM7UUFYRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7WUFDckIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1lBQ3pELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO2dCQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtnQkFDdkIsRUFBRSxFQUFFLENBQUE7WUFDUixDQUFDLENBQUMsQ0FBQTtZQUNGLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQzVCLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELFdBQVc7SUFDWCwwQkFBVyxHQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksR0FBRyxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3pELElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzlCLEtBQUs7Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ3RCO1NBQ0o7SUFDTCxDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUNJLElBQUksbUJBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLG1CQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDeEQsSUFBSSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUMvRCxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM5QixLQUFLO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ25CLG1CQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFBO2FBQzNCO1NBQ0o7SUFDTCxDQUFDO0lBRUQscUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUF6REQ7UUFEQyxRQUFRO3lDQUNVO0lBR25CO1FBREMsUUFBUTswQ0FDVztJQU5ILElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E2RHhCO0lBQUQsV0FBQztDQTdERCxBQTZEQyxDQTdEaUMsRUFBRSxDQUFDLFNBQVMsR0E2RDdDO2tCQTdEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi9MZXZlbC9MZXZlbEJhc2VcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtb3ZlQnlZOiBudW1iZXIgPSAwXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtb3ZlVGltZTogbnVtYmVyID0gMVxyXG5cclxuICAgIHBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgaXNNb3ZlaW5nOiBib29sZWFuID0gZmFsc2VcclxuICAgIGlzVHJpZ2dlcmVkOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllck5vZGUgPSBMZXZlbEJhc2UuU2hhcmUucGxheWVyTm9kZVxyXG4gICAgfVxyXG5cclxuICAgIC8v6Kem5Y+R5LqL5Lu2XHJcbiAgICB0cmlnZ2VyQ0IoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChycywgcmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmVpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIGxldCBhMSA9IGNjLm1vdmVCeSh0aGlzLm1vdmVUaW1lLCBjYy52MigwLCB0aGlzLm1vdmVCeVkpKVxyXG4gICAgICAgICAgICBsZXQgYTIgPSBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92ZWluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVHJpZ2dlcmVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcnMoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgYTMgPSBjYy5zZXF1ZW5jZShhMSwgYTIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYTMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+ajgOa1i+aYr+WQpueisOWIsOe+juS6uumxvFxyXG4gICAgZWF0QnlQbGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyTm9kZSkge1xyXG4gICAgICAgICAgICBsZXQgZGlzID0gVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLm5vZGUsIHRoaXMucGxheWVyTm9kZSlcclxuICAgICAgICAgICAgaWYgKGRpcyA8PSA1MCAmJiAhdGhpcy5pc01vdmVpbmcpIHtcclxuICAgICAgICAgICAgICAgIC8v6KKr5ZCD5o6JXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllck5vZGUuZ2V0Q29tcG9uZW50KFBsYXllcikuZWF0TWVhbigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWF0QnlTaGFycCgpIHtcclxuICAgICAgICBpZiAoTGV2ZWxCYXNlLlNoYXJlLlNoYXJwICYmIExldmVsQmFzZS5TaGFyZS5TaGFycC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSBVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMubm9kZSwgTGV2ZWxCYXNlLlNoYXJlLlNoYXJwKVxyXG4gICAgICAgICAgICBpZiAoZGlzIDw9IDUwICYmICF0aGlzLmlzTW92ZWluZykge1xyXG4gICAgICAgICAgICAgICAgLy/ooqvlkIPmjolcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIExldmVsQmFzZS5TaGFyZS5sb3NlQ0IoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuZWF0QnlQbGF5ZXIoKVxyXG4gICAgICAgIHRoaXMuZWF0QnlTaGFycCgpXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Needle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc428UI9wtJwYzz/r/7Ssrz', 'Needle');
// Scripts/Crl/Prop/Needle.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Needle = /** @class */ (function (_super) {
    __extends(Needle, _super);
    function Needle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lostHead = false;
        _this.onceTrigger = false;
        _this.isAwake = true;
        _this.needle = null;
        _this.pointNode = null;
        _this.isTouching = false;
        _this.switchState = 0;
        _this.myDir = cc.v2(0, 0);
        _this.middlePos = cc.v2(0, 0);
        _this.touchStartPos = cc.v2(0, 0);
        _this.needleStartPos = cc.v2(0, 0);
        _this.myId = 0;
        _this.needleLength = 0;
        return _this;
    }
    Needle.prototype.onLoad = function () {
        this.myId = this.node.parent.children.indexOf(this.node);
        this.needle = this.node.getChildByName('needle');
        this.needleLength = this.needle.width;
        this.myDir = cc.v2(this.needle.right.x, this.needle.right.y);
        this.pointNode = this.node.getChildByName('pointNode');
        this.middlePos = this.needle.getPosition().add(this.myDir.mul(this.needleLength / 2));
        this.needleStartPos = this.needle.getPosition();
    };
    Needle.prototype.start = function () {
        this.needle.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.needle.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.needle.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.needle.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    Needle.prototype.touchStart = function (event) {
        if (this.isTouching || !LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        this.isTouching = true;
        var pos = event.getLocation();
        this.touchStartPos = pos;
    };
    Needle.prototype.touchMove = function (event) {
        if (!LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        var pos = event.getLocation();
        var touchDir = pos.sub(this.touchStartPos).normalizeSelf();
        var angle = cc.misc.radiansToDegrees(touchDir.angle(this.myDir));
        var isRight = Math.abs(angle) <= 90;
        var dt = pos.sub(this.touchStartPos).mag();
        dt = dt > 30 ? 30 : dt;
        dt = isRight ? dt : -dt;
        var desPos = this.needle.getPosition().add(this.myDir.mul(dt));
        if (desPos.sub(this.middlePos).mag() < this.needleLength / 2)
            this.needle.setPosition(desPos);
        this.checkIsTrigger();
        this.touchStartPos = pos;
    };
    Needle.prototype.touchEnd = function (event) {
        if (!LevelBase_1.default.Share.canTouch || this.lostHead || !this.isAwake)
            return;
        this.isTouching = false;
    };
    Needle.prototype.checkIsTrigger = function () {
        for (var i = 0; i < this.pointNode.childrenCount; i++) {
            var p = this.pointNode.children[i];
            if (p.active && Utility_1.default.getWorldDis(p, this.needle) <= 50) {
                if (this.onceTrigger) {
                    this.node.active = false;
                    this.switchState = 2;
                }
                else {
                    this.switchState = i + 1;
                    this.needle.setPosition(p.getPosition());
                }
                this.pointNode.children.forEach(function (c) { c.active = true; });
                p.active = false;
                LevelBase_1.default.Share.triggerNeedle(this.myId, i);
                break;
            }
        }
        if (this.switchState != 0) {
            if (this.needle.getPosition().sub(this.needleStartPos).mag() <= 20) {
                this.switchState = 0;
                this.needle.setPosition(this.needleStartPos);
                this.pointNode.children.forEach(function (c) { c.active = true; });
            }
        }
    };
    Needle.prototype.update = function (dt) {
        if (this.node.getComponentInChildren(cc.RigidBody)) {
            this.node.getComponentInChildren(cc.RigidBody).syncPosition(true);
        }
    };
    __decorate([
        property
    ], Needle.prototype, "lostHead", void 0);
    __decorate([
        property
    ], Needle.prototype, "onceTrigger", void 0);
    __decorate([
        property
    ], Needle.prototype, "isAwake", void 0);
    Needle = __decorate([
        ccclass
    ], Needle);
    return Needle;
}(cc.Component));
exports.default = Needle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxOZWVkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQXdDO0FBQ3hDLGdEQUEyQztBQUVyQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBRGhEO1FBQUEscUVBMEdDO1FBdEdHLGNBQVEsR0FBWSxLQUFLLENBQUE7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUE7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBQ3RCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBWSxLQUFLLENBQUE7UUFFM0IsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFDdkIsV0FBSyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzVCLGVBQVMsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoQyxtQkFBYSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLG9CQUFjLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFckMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUNoQixrQkFBWSxHQUFXLENBQUMsQ0FBQTs7SUFvRjVCLENBQUM7SUFsRkcsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNyRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDbkQsQ0FBQztJQUVELHNCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FB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QUUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDcEU7SUFDTCxDQUFDO0lBckdEO1FBREMsUUFBUTs0Q0FDZ0I7SUFFekI7UUFEQyxRQUFROytDQUNtQjtJQUU1QjtRQURDLFFBQVE7MkNBQ2M7SUFQTixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBeUcxQjtJQUFELGFBQUM7Q0F6R0QsQUF5R0MsQ0F6R21DLEVBQUUsQ0FBQyxTQUFTLEdBeUcvQztrQkF6R29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi9MZXZlbC9MZXZlbEJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZWVkbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbG9zdEhlYWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBvbmNlVHJpZ2dlcjogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlzQXdha2U6IGJvb2xlYW4gPSB0cnVlXHJcblxyXG4gICAgbmVlZGxlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcG9pbnROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIGlzVG91Y2hpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIHN3aXRjaFN0YXRlOiBudW1iZXIgPSAwXHJcbiAgICBteURpcjogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcbiAgICBtaWRkbGVQb3M6IGNjLlZlYzIgPSBjYy52MigwLCAwKVxyXG4gICAgdG91Y2hTdGFydFBvczogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcbiAgICBuZWVkbGVTdGFydFBvczogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcblxyXG4gICAgbXlJZDogbnVtYmVyID0gMFxyXG4gICAgbmVlZGxlTGVuZ3RoOiBudW1iZXIgPSAwXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubXlJZCA9IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5uZWVkbGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25lZWRsZScpXHJcbiAgICAgICAgdGhpcy5uZWVkbGVMZW5ndGggPSB0aGlzLm5lZWRsZS53aWR0aFxyXG4gICAgICAgIHRoaXMubXlEaXIgPSBjYy52Mih0aGlzLm5lZWRsZS5yaWdodC54LCB0aGlzLm5lZWRsZS5yaWdodC55KVxyXG4gICAgICAgIHRoaXMucG9pbnROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdwb2ludE5vZGUnKVxyXG4gICAgICAgIHRoaXMubWlkZGxlUG9zID0gdGhpcy5uZWVkbGUuZ2V0UG9zaXRpb24oKS5hZGQodGhpcy5teURpci5tdWwodGhpcy5uZWVkbGVMZW5ndGggLyAyKSlcclxuICAgICAgICB0aGlzLm5lZWRsZVN0YXJ0UG9zID0gdGhpcy5uZWVkbGUuZ2V0UG9zaXRpb24oKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5uZWVkbGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5uZWVkbGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3VjaGluZyB8fCAhTGV2ZWxCYXNlLlNoYXJlLmNhblRvdWNoIHx8IHRoaXMubG9zdEhlYWQgfHwgIXRoaXMuaXNBd2FrZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc1RvdWNoaW5nID0gdHJ1ZVxyXG5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghTGV2ZWxCYXNlLlNoYXJlLmNhblRvdWNoIHx8IHRoaXMubG9zdEhlYWQgfHwgIXRoaXMuaXNBd2FrZSkgcmV0dXJuXHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuXHJcbiAgICAgICAgbGV0IHRvdWNoRGlyID0gcG9zLnN1Yih0aGlzLnRvdWNoU3RhcnRQb3MpLm5vcm1hbGl6ZVNlbGYoKVxyXG4gICAgICAgIGxldCBhbmdsZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyh0b3VjaERpci5hbmdsZSh0aGlzLm15RGlyKSlcclxuICAgICAgICBsZXQgaXNSaWdodCA9IE1hdGguYWJzKGFuZ2xlKSA8PSA5MFxyXG5cclxuICAgICAgICBsZXQgZHQgPSBwb3Muc3ViKHRoaXMudG91Y2hTdGFydFBvcykubWFnKClcclxuICAgICAgICBkdCA9IGR0ID4gMzAgPyAzMCA6IGR0XHJcbiAgICAgICAgZHQgPSBpc1JpZ2h0ID8gZHQgOiAtZHRcclxuXHJcbiAgICAgICAgbGV0IGRlc1BvcyA9IHRoaXMubmVlZGxlLmdldFBvc2l0aW9uKCkuYWRkKHRoaXMubXlEaXIubXVsKGR0KSlcclxuICAgICAgICBpZiAoZGVzUG9zLnN1Yih0aGlzLm1pZGRsZVBvcykubWFnKCkgPCB0aGlzLm5lZWRsZUxlbmd0aCAvIDIpXHJcbiAgICAgICAgICAgIHRoaXMubmVlZGxlLnNldFBvc2l0aW9uKGRlc1BvcylcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0lzVHJpZ2dlcigpXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIUxldmVsQmFzZS5TaGFyZS5jYW5Ub3VjaCB8fCB0aGlzLmxvc3RIZWFkIHx8ICF0aGlzLmlzQXdha2UpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJc1RyaWdnZXIoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLnBvaW50Tm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBpZiAocC5hY3RpdmUgJiYgVXRpbGl0eS5nZXRXb3JsZERpcyhwLCB0aGlzLm5lZWRsZSkgPD0gNTApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uY2VUcmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTdGF0ZSA9IDJcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTdGF0ZSA9IGkgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWVkbGUuc2V0UG9zaXRpb24ocC5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGMpID0+IHsgYy5hY3RpdmUgPSB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICBwLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBMZXZlbEJhc2UuU2hhcmUudHJpZ2dlck5lZWRsZSh0aGlzLm15SWQsIGkpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN3aXRjaFN0YXRlICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmVlZGxlLmdldFBvc2l0aW9uKCkuc3ViKHRoaXMubmVlZGxlU3RhcnRQb3MpLm1hZygpIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFN0YXRlID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZWVkbGUuc2V0UG9zaXRpb24odGhpcy5uZWVkbGVTdGFydFBvcylcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGMpID0+IHsgYy5hY3RpdmUgPSB0cnVlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLlJpZ2lkQm9keSkpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuUmlnaWRCb2R5KS5zeW5jUG9zaXRpb24odHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/RotateNeedle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c30cJVj/dHEZgFf08gDM4E', 'RotateNeedle');
// Scripts/Crl/Prop/RotateNeedle.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RotateNeedle = /** @class */ (function (_super) {
    __extends(RotateNeedle, _super);
    function RotateNeedle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.needle = null;
        _this.touchStartPos = cc.v2(0, 0);
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    RotateNeedle.prototype.start = function () {
        this.needle.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.needle.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.needle.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.needle.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    RotateNeedle.prototype.touchStart = function (event) {
        var pos = event.getLocation();
        this.touchStartPos = pos;
    };
    RotateNeedle.prototype.touchMove = function (event) {
        var pos = event.getLocation();
        this.needle.getComponent(cc.RigidBody).applyAngularImpulse(pos.x < this.touchStartPos.x ? 50000 : -50000, true);
        this.touchStartPos = pos;
    };
    RotateNeedle.prototype.touchEnd = function (event) {
    };
    __decorate([
        property(cc.Node)
    ], RotateNeedle.prototype, "needle", void 0);
    RotateNeedle = __decorate([
        ccclass
    ], RotateNeedle);
    return RotateNeedle;
}(cc.Component));
exports.default = RotateNeedle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxSb3RhdGVOZWVkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUR0RDtRQUFBLHFFQWlDQztRQTdCRyxZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLG1CQUFhLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7O1FBMEJwQyxpQkFBaUI7SUFDckIsQ0FBQztJQXpCRyxlQUFlO0lBRWYsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsS0FBMEI7UUFDakMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO0lBQzVCLENBQUM7SUFDRCxnQ0FBUyxHQUFULFVBQVUsS0FBMEI7UUFDaEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBRTdCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRS9HLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO0lBQzVCLENBQUM7SUFDRCwrQkFBUSxHQUFSLFVBQVMsS0FBMEI7SUFFbkMsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBSEwsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWdDaEM7SUFBRCxtQkFBQztDQWhDRCxBQWdDQyxDQWhDeUMsRUFBRSxDQUFDLFNBQVMsR0FnQ3JEO2tCQWhDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm90YXRlTmVlZGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5lZWRsZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5lZWRsZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubmVlZGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLm5lZWRsZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcbiAgICB0b3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG5cclxuICAgICAgICB0aGlzLm5lZWRsZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5hcHBseUFuZ3VsYXJJbXB1bHNlKHBvcy54IDwgdGhpcy50b3VjaFN0YXJ0UG9zLnggPyA1MDAwMCA6IC01MDAwMCwgdHJ1ZSlcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcbiAgICB0b3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/Level1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f40ds4/3JHJ4sfRhDGJa7p', 'Level1');
// Scripts/Crl/Level/Level1.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LevelBase_1 = require("./LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level1 = /** @class */ (function (_super) {
    __extends(Level1, _super);
    function Level1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level1.prototype.trigger00 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.meatCrl.triggerCB()];
                    case 1:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level1.prototype.trigger10 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerCrl.moveToPoint(0)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.playerCrl.moveToPoint(1)];
                    case 2:
                        _a.sent();
                        this.canTouch = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Level1 = __decorate([
        ccclass
    ], Level1);
    return Level1;
}(LevelBase_1.default));
exports.default = Level1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWwxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseUNBQW9DO0FBRTlCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVM7SUFBN0M7O0lBV0EsQ0FBQztJQVRTLDBCQUFTLEdBQWY7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQTlCLFNBQThCLENBQUE7d0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7OztLQUN2QjtJQUNLLDBCQUFTLEdBQWY7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUNuQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUE7d0JBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzs7OztLQUN2QjtJQVZnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBVzFCO0lBQUQsYUFBQztDQVhELEFBV0MsQ0FYbUMsbUJBQVMsR0FXNUM7a0JBWG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuaW1wb3J0IE1lYXQgZnJvbSBcIi4uL1Byb3AvTWVhdFwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMSBleHRlbmRzIExldmVsQmFzZSB7XHJcblxyXG4gICAgYXN5bmMgdHJpZ2dlcjAwKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMubWVhdENybC50cmlnZ2VyQ0IoKVxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyB0cmlnZ2VyMTAoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJDcmwubW92ZVRvUG9pbnQoMClcclxuICAgICAgICBhd2FpdCB0aGlzLnBsYXllckNybC5tb3ZlVG9Qb2ludCgxKVxyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/HeadNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0473N+vbFH0JHD6gLQmtb5', 'HeadNode');
// Scripts/Crl/Prop/HeadNode.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HeadNode = /** @class */ (function (_super) {
    __extends(HeadNode, _super);
    function HeadNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.num = null;
        _this.count = 1;
        return _this;
    }
    HeadNode.prototype.onLoad = function () { };
    HeadNode.prototype.start = function () {
        this.icon.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.icon.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.icon.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.icon.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    HeadNode.prototype.touchStart = function (event) {
    };
    HeadNode.prototype.touchMove = function (event) {
        if (this.count <= 0)
            return;
        var pos = event.getLocation();
        pos = this.node.convertToNodeSpaceAR(pos);
        this.icon.setPosition(pos);
    };
    HeadNode.prototype.touchEnd = function (event) {
        if (this.count <= 0)
            return;
        for (var i = 0; i < LevelBase_1.default.Share.NeedleNode.childrenCount; i++) {
            var n = LevelBase_1.default.Share.NeedleNode.children[i];
            var head = n.getChildByName('needle').getChildByName('yxz_dj1_2');
            if (head.active == false && Utility_1.default.getWorldDis(head, this.icon) <= 50) {
                head.active = true;
                this.count--;
                LevelBase_1.default.Share.getNeedleCrlById(i).lostHead = false;
                break;
            }
        }
        this.icon.setPosition(cc.v2(0, 10));
    };
    HeadNode.prototype.update = function (dt) {
        this.num.string = this.count.toString();
    };
    __decorate([
        property(cc.Node)
    ], HeadNode.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], HeadNode.prototype, "num", void 0);
    __decorate([
        property
    ], HeadNode.prototype, "count", void 0);
    HeadNode = __decorate([
        ccclass
    ], HeadNode);
    return HeadNode;
}(cc.Component));
exports.default = HeadNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxIZWFkTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBRXJDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUFpREM7UUE3Q0csVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixTQUFHLEdBQWEsSUFBSSxDQUFBO1FBR3BCLFdBQUssR0FBVyxDQUFDLENBQUE7O0lBdUNyQixDQUFDO0lBckNHLHlCQUFNLEdBQU4sY0FBVyxDQUFDO0lBRVosd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsS0FBMEI7SUFFckMsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxLQUEwQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztZQUFFLE9BQU07UUFDM0IsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsS0FBMEI7UUFDL0IsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7WUFBRSxPQUFNO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9ELElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDOUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDakUsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDcEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDWixtQkFBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO2dCQUNwRCxNQUFLO2FBQ1I7U0FDSjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUdELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUMzQyxDQUFDO0lBNUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5Q0FDQztJQUdwQjtRQURDLFFBQVE7MkNBQ1E7SUFUQSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0Q1QjtJQUFELGVBQUM7Q0FoREQsQUFnREMsQ0FoRHFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RqRDtrQkFoRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vLi4vTW9kL1V0aWxpdHlcIjtcclxuaW1wb3J0IExldmVsQmFzZSBmcm9tIFwiLi4vTGV2ZWwvTGV2ZWxCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZE5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaWNvbjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBudW06IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY291bnQ6IG51bWJlciA9IDFcclxuXHJcbiAgICBvbkxvYWQoKSB7IH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmljb24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcylcclxuICAgICAgICB0aGlzLmljb24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5pY29uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLmljb24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuXHJcbiAgICB9XHJcbiAgICB0b3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudCA8PSAwKSByZXR1cm5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgdGhpcy5pY29uLnNldFBvc2l0aW9uKHBvcylcclxuICAgIH1cclxuICAgIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPD0gMCkgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBMZXZlbEJhc2UuU2hhcmUuTmVlZGxlTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG4gPSBMZXZlbEJhc2UuU2hhcmUuTmVlZGxlTm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBsZXQgaGVhZCA9IG4uZ2V0Q2hpbGRCeU5hbWUoJ25lZWRsZScpLmdldENoaWxkQnlOYW1lKCd5eHpfZGoxXzInKVxyXG4gICAgICAgICAgICBpZiAoaGVhZC5hY3RpdmUgPT0gZmFsc2UgJiYgVXRpbGl0eS5nZXRXb3JsZERpcyhoZWFkLCB0aGlzLmljb24pIDw9IDUwKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQtLVxyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLmdldE5lZWRsZUNybEJ5SWQoaSkubG9zdEhlYWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmljb24uc2V0UG9zaXRpb24oY2MudjIoMCwgMTApKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLm51bS5zdHJpbmcgPSB0aGlzLmNvdW50LnRvU3RyaW5nKClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/Stone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ead0i5Y2hHIaJFLKQdJamx', 'Stone');
// Scripts/Crl/Prop/Stone.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Stone = /** @class */ (function (_super) {
    __extends(Stone, _super);
    function Stone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveByY = 0;
        _this.moveTime = 1;
        _this.playerNode = null;
        _this.isMoveing = false;
        _this.isTriggered = false;
        return _this;
    }
    Stone_1 = Stone;
    Stone.prototype.onLoad = function () {
        Stone_1.Share = this;
        this.playerNode = LevelBase_1.default.Share.playerNode;
    };
    Stone.prototype.start = function () {
    };
    //触发事件
    Stone.prototype.triggerCB = function () {
        var _this = this;
        return new Promise(function (rs, rj) {
            _this.isMoveing = true;
            var a1 = cc.moveBy(_this.moveTime, cc.v2(0, _this.moveByY));
            var a2 = cc.callFunc(function () {
                _this.isMoveing = false;
                _this.isTriggered = true;
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    //检测是否碰到美人鱼
    Stone.prototype.collByPlayer = function () {
        if (this.playerNode) {
            var dis = Utility_1.default.getWorldDis(this.node, this.playerNode);
            if (dis <= 20 && !this.isMoveing) {
                this.playerNode.stopAllActions();
                this.node.destroy();
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Stone.prototype.collBySharp = function () {
        if (LevelBase_1.default.Share.Sharp && LevelBase_1.default.Share.Sharp.isValid) {
            var dis = Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.Sharp);
            if (dis <= 50 && !this.isMoveing) {
                LevelBase_1.default.Share.Sharp.stopAllActions();
                LevelBase_1.default.Share.Sharp.destroy();
            }
        }
    };
    Stone.prototype.update = function (dt) {
        this.collByPlayer();
        this.collBySharp();
    };
    var Stone_1;
    __decorate([
        property
    ], Stone.prototype, "moveByY", void 0);
    __decorate([
        property
    ], Stone.prototype, "moveTime", void 0);
    Stone = Stone_1 = __decorate([
        ccclass
    ], Stone);
    return Stone;
}(cc.Component));
exports.default = Stone;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxTdG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBR3JDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFEL0M7UUFBQSxxRUFpRUM7UUE1REcsYUFBTyxHQUFXLENBQUMsQ0FBQTtRQUduQixjQUFRLEdBQVcsQ0FBQyxDQUFBO1FBRXBCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGVBQVMsR0FBWSxLQUFLLENBQUE7UUFDMUIsaUJBQVcsR0FBWSxLQUFLLENBQUE7O0lBb0RoQyxDQUFDO2NBaEVvQixLQUFLO0lBY3RCLHNCQUFNLEdBQU47UUFDSSxPQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQTtJQUNoRCxDQUFDO0lBRUQscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxNQUFNO0lBQ04seUJBQVMsR0FBVDtRQUFBLGlCQVlDO1FBWEcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1lBQ3JCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtZQUN6RCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNqQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtnQkFDdEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7Z0JBQ3ZCLEVBQUUsRUFBRSxDQUFBO1lBQ1IsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxXQUFXO0lBQ1gsNEJBQVksR0FBWjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLEdBQUcsR0FBRyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN6RCxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNuQixtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQTthQUMzQjtTQUNKO0lBQ0wsQ0FBQztJQUVELDJCQUFXLEdBQVg7UUFDSSxJQUFJLG1CQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3hELElBQUksR0FBRyxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDL0QsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDOUIsbUJBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUN0QyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUE7YUFDbEM7U0FDSjtJQUNMLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQzs7SUEzREQ7UUFEQyxRQUFROzBDQUNVO0lBR25CO1FBREMsUUFBUTsyQ0FDVztJQVBILEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FnRXpCO0lBQUQsWUFBQztDQWhFRCxBQWdFQyxDQWhFa0MsRUFBRSxDQUFDLFNBQVMsR0FnRTlDO2tCQWhFb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuLi9MZXZlbC9MZXZlbEJhc2VcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBTaGFyZTogU3RvbmVcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1vdmVCeVk6IG51bWJlciA9IDBcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1vdmVUaW1lOiBudW1iZXIgPSAxXHJcblxyXG4gICAgcGxheWVyTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBpc01vdmVpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgaXNUcmlnZ2VyZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBTdG9uZS5TaGFyZSA9IHRoaXNcclxuICAgICAgICB0aGlzLnBsYXllck5vZGUgPSBMZXZlbEJhc2UuU2hhcmUucGxheWVyTm9kZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+inpuWPkeS6i+S7tlxyXG4gICAgdHJpZ2dlckNCKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocnMsIHJqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZlaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICBsZXQgYTEgPSBjYy5tb3ZlQnkodGhpcy5tb3ZlVGltZSwgY2MudjIoMCwgdGhpcy5tb3ZlQnlZKSlcclxuICAgICAgICAgICAgbGV0IGEyID0gY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RyaWdnZXJlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHJzKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IGEzID0gY2Muc2VxdWVuY2UoYTEsIGEyKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGEzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/mo4DmtYvmmK/lkKbnorDliLDnvo7kurrpsbxcclxuICAgIGNvbGxCeVBsYXllcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJOb2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSBVdGlsaXR5LmdldFdvcmxkRGlzKHRoaXMubm9kZSwgdGhpcy5wbGF5ZXJOb2RlKVxyXG4gICAgICAgICAgICBpZiAoZGlzIDw9IDIwICYmICF0aGlzLmlzTW92ZWluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIExldmVsQmFzZS5TaGFyZS5sb3NlQ0IoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxCeVNoYXJwKCkge1xyXG4gICAgICAgIGlmIChMZXZlbEJhc2UuU2hhcmUuU2hhcnAgJiYgTGV2ZWxCYXNlLlNoYXJlLlNoYXJwLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgbGV0IGRpcyA9IFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5ub2RlLCBMZXZlbEJhc2UuU2hhcmUuU2hhcnApXHJcbiAgICAgICAgICAgIGlmIChkaXMgPD0gNTAgJiYgIXRoaXMuaXNNb3ZlaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBMZXZlbEJhc2UuU2hhcmUuU2hhcnAuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgICAgICAgICAgTGV2ZWxCYXNlLlNoYXJlLlNoYXJwLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuY29sbEJ5UGxheWVyKClcclxuICAgICAgICB0aGlzLmNvbGxCeVNoYXJwKClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Libs/PlayerDataMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11da5Tk8/dEdb4yQ71R6Ymx', 'PlayerDataMgr');
// Scripts/Libs/PlayerDataMgr.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        this.grade = 10;
        this.coin = 0;
        this.power = 5;
        this.tipsNum = 1;
        this.exitTime = 0;
        this.lv = 1;
    }
    return PlayerData;
}());
exports.PlayerData = PlayerData;
var PlayerDataMgr = /** @class */ (function () {
    function PlayerDataMgr() {
    }
    //获取用户数据
    PlayerDataMgr.getPlayerData = function () {
        if (!localStorage.getItem('playerData')) {
            this._playerData = new PlayerData();
            localStorage.setItem('playerData', JSON.stringify(this._playerData));
        }
        else {
            if (this._playerData == null) {
                this._playerData = JSON.parse(localStorage.getItem('playerData'));
            }
        }
        return this._playerData;
    };
    //设置用户数据
    PlayerDataMgr.setPlayerData = function () {
        localStorage.setItem('playerData', JSON.stringify(this._playerData));
    };
    PlayerDataMgr.changeCoin = function (dt) {
        this._playerData.coin += dt;
        this.setPlayerData();
    };
    PlayerDataMgr._playerData = null;
    PlayerDataMgr.powerMax = 5;
    PlayerDataMgr = __decorate([
        ccclass
    ], PlayerDataMgr);
    return PlayerDataMgr;
}());
exports.default = PlayerDataMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcUGxheWVyRGF0YU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFNUM7SUFBQTtRQUNJLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsU0FBSSxHQUFXLENBQUMsQ0FBQTtRQUNoQixVQUFLLEdBQVUsQ0FBQyxDQUFBO1FBQ2hCLFlBQU8sR0FBVSxDQUFDLENBQUE7UUFDbEIsYUFBUSxHQUFXLENBQUMsQ0FBQTtRQUNwQixPQUFFLEdBQVUsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFBRCxpQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksZ0NBQVU7QUFTdkI7SUFBQTtJQTRCQSxDQUFDO0lBeEJHLFFBQVE7SUFDTSwyQkFBYSxHQUEzQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQTtZQUNuQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1NBQ3ZFO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO2dCQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBZSxDQUFBO2FBQ2xGO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDM0IsQ0FBQztJQUVELFFBQVE7SUFDTSwyQkFBYSxHQUEzQjtRQUNJLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDeEUsQ0FBQztJQUVhLHdCQUFVLEdBQXhCLFVBQXlCLEVBQVU7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBeEJjLHlCQUFXLEdBQWUsSUFBSSxDQUFBO0lBQy9CLHNCQUFRLEdBQVUsQ0FBQyxDQUFBO0lBRmhCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0E0QmpDO0lBQUQsb0JBQUM7Q0E1QkQsQUE0QkMsSUFBQTtrQkE1Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vTW9kL1V0aWxpdHlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyRGF0YSB7XHJcbiAgICBncmFkZTogbnVtYmVyID0gMTBcclxuICAgIGNvaW46IG51bWJlciA9IDBcclxuICAgIHBvd2VyOm51bWJlciA9IDVcclxuICAgIHRpcHNOdW06bnVtYmVyID0gMVxyXG4gICAgZXhpdFRpbWU6IG51bWJlciA9IDBcclxuICAgIGx2Om51bWJlciA9IDFcclxufVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJEYXRhTWdyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9wbGF5ZXJEYXRhOiBQbGF5ZXJEYXRhID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBwb3dlck1heDpudW1iZXIgPSA1XHJcblxyXG4gICAgLy/ojrflj5bnlKjmiLfmlbDmja5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGxheWVyRGF0YSgpOiBQbGF5ZXJEYXRhIHtcclxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXJEYXRhJykpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyRGF0YSA9IG5ldyBQbGF5ZXJEYXRhKClcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllckRhdGEnLCBKU09OLnN0cmluZ2lmeSh0aGlzLl9wbGF5ZXJEYXRhKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGxheWVyRGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVyRGF0YScpKSBhcyBQbGF5ZXJEYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllckRhdGFcclxuICAgIH1cclxuXHJcbiAgICAvL+iuvue9rueUqOaIt+aVsOaNrlxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRQbGF5ZXJEYXRhKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5fcGxheWVyRGF0YSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjaGFuZ2VDb2luKGR0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJEYXRhLmNvaW4gKz0gZHRcclxuICAgICAgICB0aGlzLnNldFBsYXllckRhdGEoKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Libs/TimeCountMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0a4fRQMHxNH7nYx2FY6BmU', 'TimeCountMgr');
// Scripts/Libs/TimeCountMgr.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerDataMgr_1 = require("./PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeCountMgr = /** @class */ (function (_super) {
    __extends(TimeCountMgr, _super);
    function TimeCountMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tCount = 0;
        return _this;
    }
    TimeCountMgr_1 = TimeCountMgr;
    TimeCountMgr.prototype.onLoad = function () {
        TimeCountMgr_1.Share = this;
        cc.game.addPersistRootNode(this.node);
        this.init();
    };
    TimeCountMgr.prototype.init = function () {
        var _this = this;
        if (localStorage.getItem('powerTime')) {
            this.tCount = parseInt(localStorage.getItem('powerTime'));
        }
        else {
            localStorage.setItem('power', '0');
        }
        this.calculateExitTime();
        if (CC_WECHATGAME) {
            window["wx"].onShow(function (para) {
                _this.calculateExitTime();
            });
            window["wx"].onHide(function (para) {
                localStorage.setItem('powerTime', _this.tCount.toString());
                localStorage.setItem('exitTime', new Date().getTime().toString());
            });
        }
        this.schedule(this.calculateExitTime);
    };
    TimeCountMgr.prototype.calculateExitTime = function () {
        var exitTime = 0;
        if (localStorage.getItem('exitTime')) {
            exitTime = new Date().getTime() - parseInt(localStorage.getItem('exitTime'));
        }
        if (exitTime <= 0)
            return;
        exitTime /= 1000;
        var t = Math.floor(exitTime / 600);
        PlayerDataMgr_1.default.getPlayerData().power += t;
        if (PlayerDataMgr_1.default.getPlayerData().power > 10) {
            PlayerDataMgr_1.default.getPlayerData().power = 10;
            PlayerDataMgr_1.default.setPlayerData();
        }
    };
    TimeCountMgr.prototype.calculateTime = function () {
        if (this.tCount <= 0) {
            if (PlayerDataMgr_1.default.getPlayerData().power < 10) {
                this.tCount = 600;
            }
            else {
                this.tCount = 0;
            }
            return;
        }
        this.tCount--;
        if (this.tCount <= 0) {
            if (PlayerDataMgr_1.default.getPlayerData().power < 10) {
                PlayerDataMgr_1.default.getPlayerData().power += 1;
                PlayerDataMgr_1.default.setPlayerData();
                this.tCount = PlayerDataMgr_1.default.getPlayerData().power < 10 ? 600 : 0;
            }
        }
    };
    var TimeCountMgr_1;
    TimeCountMgr = TimeCountMgr_1 = __decorate([
        ccclass
    ], TimeCountMgr);
    return TimeCountMgr;
}(cc.Component));
exports.default = TimeCountMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcVGltZUNvdW50TWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUEyQztBQUVyQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBd0VDO1FBbkVHLFlBQU0sR0FBVyxDQUFDLENBQUE7O0lBbUV0QixDQUFDO3FCQXZFb0IsWUFBWTtJQU03Qiw2QkFBTSxHQUFOO1FBQ0ksY0FBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDekIsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFBQSxpQkFvQkM7UUFuQkcsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtTQUM1RDthQUFNO1lBQ0gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDckM7UUFFRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUV4QixJQUFJLGFBQWEsRUFBRTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO2dCQUNyQixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUM1QixDQUFDLENBQUMsQ0FBQTtZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO2dCQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQ3pELFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUNyRSxDQUFDLENBQUMsQ0FBQTtTQUNMO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxRQUFRLEdBQVcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNsQyxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1NBQy9FO1FBRUQsSUFBSSxRQUFRLElBQUksQ0FBQztZQUFFLE9BQU07UUFFekIsUUFBUSxJQUFJLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUNsQyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUE7UUFDeEMsSUFBSSx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDMUMsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBQ3hDLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUE7U0FDaEM7SUFDTCxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO2FBQ3BCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO2FBQ2xCO1lBQ0QsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBRWIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRTtnQkFDMUMsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBO2dCQUN4Qyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDbkU7U0FDSjtJQUNMLENBQUM7O0lBckVnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBdUVoQztJQUFELG1CQUFDO0NBdkVELEFBdUVDLENBdkV5QyxFQUFFLENBQUMsU0FBUyxHQXVFckQ7a0JBdkVvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4vUGxheWVyRGF0YU1nclwiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZUNvdW50TWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNoYXJlOiBUaW1lQ291bnRNZ3JcclxuXHJcbiAgICB0Q291bnQ6IG51bWJlciA9IDBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgVGltZUNvdW50TWdyLlNoYXJlID0gdGhpc1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3dlclRpbWUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRDb3VudCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3dlclRpbWUnKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG93ZXInLCAnMCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZUV4aXRUaW1lKClcclxuXHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25TaG93KChwYXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUV4aXRUaW1lKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25IaWRlKChwYXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG93ZXJUaW1lJywgdGhpcy50Q291bnQudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleGl0VGltZScsIG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY2FsY3VsYXRlRXhpdFRpbWUpXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlRXhpdFRpbWUoKSB7XHJcbiAgICAgICAgbGV0IGV4aXRUaW1lOiBudW1iZXIgPSAwXHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleGl0VGltZScpKSB7XHJcbiAgICAgICAgICAgIGV4aXRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhpdFRpbWUnKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChleGl0VGltZSA8PSAwKSByZXR1cm5cclxuXHJcbiAgICAgICAgZXhpdFRpbWUgLz0gMTAwMFxyXG4gICAgICAgIGxldCB0ID0gTWF0aC5mbG9vcihleGl0VGltZSAvIDYwMClcclxuICAgICAgICBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciArPSB0XHJcbiAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyID4gMTApIHtcclxuICAgICAgICAgICAgUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkucG93ZXIgPSAxMFxyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLnNldFBsYXllckRhdGEoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVUaW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRDb3VudCA9IDYwMFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50Q291bnQgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudENvdW50LS1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudENvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyIDwgMTApIHtcclxuICAgICAgICAgICAgICAgIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyICs9IDFcclxuICAgICAgICAgICAgICAgIFBsYXllckRhdGFNZ3Iuc2V0UGxheWVyRGF0YSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRDb3VudCA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyIDwgMTAgPyA2MDAgOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/ShareMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxTaGFyZU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHVDQUFpQztBQUNqQyw0REFBZ0Q7QUFHaEQ7SUFBQTtRQVNZLFNBQUksR0FBVyxFQUFFLENBQUE7UUFDakIsYUFBUSxHQUFXLENBQUMsQ0FBQTtRQUVwQixTQUFJLEdBQVcsQ0FBQyxDQUFBO1FBRXhCLGNBQVMsR0FBYTtZQUNsQixXQUFXO1lBQ1gsVUFBVTtZQUNWLFNBQVM7WUFDVCxjQUFjO1NBQUMsQ0FBQTtJQXdGdkIsQ0FBQztJQXhHRyxzQkFBa0Isb0JBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFBO2FBQ2xDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBYUQsU0FBUztJQUNULDRCQUFTLEdBQVQ7UUFBQSxpQkF5REM7UUF4REcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUN4QyxVQUFVO1lBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDdkIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzthQUM5QyxDQUFDLENBQUM7WUFFSCxJQUFJLEtBQUcsR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFBO1lBQzNELElBQUksU0FBTyxHQUFHLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUE7WUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRztnQkFD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UUFDN0IsU0FBUztRQUNULE1BQU07SUFDVixDQUFDO0lBRUwsZUFBQztBQUFELENBMUdBLEFBMEdDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEFkTWdyIGZyb20gXCIuL0FkTWdyXCJcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi9MaWJzL1d4QXBpXCJcclxuaW1wb3J0IEpKTWdyIGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZU1nciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNoYXJlTWdyXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBTaGFyZU1nciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTaGFyZU1ncigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGF0aDogc3RyaW5nID0gJydcclxuICAgIHByaXZhdGUgcGljQ291bnQ6IG51bWJlciA9IDNcclxuXHJcbiAgICBwcml2YXRlIHByZVQ6IG51bWJlciA9IDBcclxuXHJcbiAgICBzaGFyZVRpcHM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICfor7fliIbkuqvliLDmtLvot4PnmoTnvqTvvIEnLFxyXG4gICAgICAgICfor7fliIbkuqvliLDkuI3lkIznvqTvvIEnLFxyXG4gICAgICAgICfor7fliIbkuqvnu5nlpb3lj4vvvIEnLFxyXG4gICAgICAgICfor7fliIbkuqvnu5kyMOS6uuS7peS4iueahOe+pO+8gSddXHJcblxyXG4gICAgLy/liJ3lp4vljJbliIbkuqsgIFxyXG4gICAgaW5pdFNoYXJlKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAvL+W8gOWQr+WPs+S4iuinkueahOWIhuS6q1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICAgICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lbnVzOiBbJ3NoYXJlQXBwTWVzc2FnZScsICdzaGFyZVRpbWVsaW5lJ11cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlyID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3NoYXJlX2NvbmZpZy5pbWFnZVxyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9zaGFyZV9jb25maWcudGl0bGVcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogZGlyLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhkaXIsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gICAgIHdpbmRvd1tcInd4XCJdLm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogY29udGVudCxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub25TaG93KChwYXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoV3hBcGkuc2hhcmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZiA9IHQgLSBXeEFwaS5zaGFyZVRpbWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiAvIDEwMDAgPj0gMyAmJiAhV3hBcGkuZmlyc3RTaGFyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBXeEFwaS5zaGFyZUNhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgV3hBcGkuZnJvbnRfc2hhcmVfbnVtYmVyLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93W1wid3hcIl0uc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5YiG5Lqr5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFd4QXBpLnNoYXJlQ2FsbGJhY2sgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgV3hBcGkuZmlyc3RTaGFyZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNoYXJlVGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNoYXJlVGlwcy5sZW5ndGgpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn6YeN5paw5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaGFyZU1nci5pbnN0YW5jZS5zaGFyZUdhbWUoV3hBcGkuc2hhcmVDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hhcmVHYW1lKGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIC8vIGlmIChXeEFwaS5mcm9udF9zaGFyZV9udW1iZXIgPD0gMCkge1xyXG4gICAgICAgIC8vICAgICBBZE1nci5pbnN0YW5jZS5zaG93VmlkZW8oY2IpXHJcbiAgICAgICAgLy8gICAgIHJldHVyblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgV3hBcGkuc2hhcmVDYWxsYmFjayA9IGNiXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgV3hBcGkuc2hhcmVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICBsZXQgZGlyID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3NoYXJlX2NvbmZpZy5pbWFnZVxyXG4gICAgICAgIGxldCBjb250ZW50ID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3NoYXJlX2NvbmZpZy50aXRsZVxyXG4gICAgICAgIHdpbmRvd1tcInd4XCJdLnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgICAgICBpbWFnZVVybDogZGlyXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhkaXIsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAvLyAgICAgd2luZG93W1wid3hcIl0uc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAvLyAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgIC8vICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/Utility.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08ebfwGkANOp4sXiyeJ4qrB', 'Utility');
// Scripts/Mod/Utility.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.loadSpriteFrame = function (spName, sprite, cb) {
        //加载SpriteAtlas(图集)，并获取其中一张图片
        cc.loader.loadRes(spName, cc.SpriteFrame, function (err, spriteFrame) {
            sprite.spriteFrame = spriteFrame;
            cb && cb();
        });
    };
    Utility.loadSpAtlas = function (atlasName, spfName, sprite) {
        //加载SpriteAtlas(图集)，并获取其中一张图片
        cc.loader.loadRes(atlasName, cc.SpriteAtlas, function (err, atlas) {
            sprite.spriteFrame = atlas.getSpriteFrame(spfName);
        });
    };
    //打乱数组
    Utility.shuffleArr = function (arr) {
        var _a;
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    };
    //数字前补0
    Utility.joinZero = function (length, num) {
        return (Array(length).join('0') + num).slice(-length);
    };
    Utility.getWorldPos = function (node, point) {
        if (point === void 0) { point = cc.v2(0, 0); }
        return node.convertToWorldSpaceAR(point);
    };
    Utility.getWorldDis = function (node1, node2) {
        var p1 = this.getWorldPos(node1);
        var p2 = this.getWorldPos(node2);
        return (p1.sub(p2)).mag();
    };
    Utility.getWorldDir = function (from, to) {
        var p1 = this.getWorldPos(from);
        var p2 = this.getWorldPos(to);
        var dir = p2.sub(p1).normalizeSelf();
        return dir;
    };
    Utility.delayActive = function (node, duration, target) {
        node.active = false;
        target.scheduleOnce(function () { node.active = true; }, duration);
    };
    Utility.getRandomItemInArr = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    Utility.getRandomItemInArrWithoutSelf = function (self, arr, count) {
        if (count === void 0) { count = 1; }
        var temp = [].concat(arr);
        temp.splice(temp.indexOf(self), 1);
        temp = this.shuffleArr(temp);
        return temp.slice(0, count);
    };
    Utility.rotateLoop = function (node, duration, rate) {
        var a1 = cc.rotateBy(duration, -rate);
        var a2 = cc.rotateBy(duration * 2, rate * 2);
        var a3 = cc.rotateBy(duration, -rate);
        var a4 = cc.sequence(a1, a2, a3);
        node.stopAllActions();
        node.runAction(cc.repeatForever(a4));
    };
    Utility.GetRandom = function (mix, max, isInt) {
        if (isInt === void 0) { isInt = true; }
        var w = max - mix;
        var r1 = Math.random() * w;
        r1 += mix;
        return isInt ? Math.floor(r1) : r1;
    };
    Utility.checkInsection = function (pNode, rNode) {
        var p1 = this.getWorldPos(pNode);
        var rPos = this.getWorldPos(rNode);
        var x1 = rPos.x - rNode.width / 2;
        var x2 = rPos.x + rNode.width / 2;
        var y1 = rPos.y - rNode.height / 2;
        var y2 = rPos.y + rNode.height / 2;
        return p1.x >= x1 && p1.x <= x2 && p1.y >= y1 && p1.y <= y2;
    };
    Utility = __decorate([
        ccclass
    ], Utility);
    return Utility;
}());
exports.default = Utility;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxVdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFBO0lBMEZBLENBQUM7SUF4RmlCLHVCQUFlLEdBQTdCLFVBQThCLE1BQWMsRUFBRSxNQUFpQixFQUFFLEVBQWE7UUFDMUUsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxFQUFFLFdBQVc7WUFDaEUsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7WUFDaEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFBO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRWEsbUJBQVcsR0FBekIsVUFBMEIsU0FBaUIsRUFBRSxPQUFlLEVBQUUsTUFBaUI7UUFDM0UsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUs7WUFDN0QsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE1BQU07SUFDUSxrQkFBVSxHQUF4QixVQUF5QixHQUFVOztRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QyxxQkFBbUMsRUFBbEMsY0FBTSxFQUFFLGNBQU0sQ0FBcUI7U0FDdkM7UUFDRCxP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QUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDL0QsQ0FBQztJQXpGZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTBGM0I7SUFBRCxjQUFDO0NBMUZELEFBMEZDLElBQUE7a0JBMUZvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTcHJpdGVGcmFtZShzcE5hbWU6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUsIGNiPzogRnVuY3Rpb24pIHtcclxuICAgICAgICAvL+WKoOi9vVNwcml0ZUF0bGFzKOWbvumbhinvvIzlubbojrflj5blhbbkuK3kuIDlvKDlm77niYdcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhzcE5hbWUsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZVxyXG4gICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTcEF0bGFzKGF0bGFzTmFtZTogc3RyaW5nLCBzcGZOYW1lOiBzdHJpbmcsIHNwcml0ZTogY2MuU3ByaXRlKSB7XHJcbiAgICAgICAgLy/liqDovb1TcHJpdGVBdGxhcyjlm77pm4Yp77yM5bm26I635Y+W5YW25Lit5LiA5byg5Zu+54mHXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoYXRsYXNOYW1lLCBjYy5TcHJpdGVBdGxhcywgZnVuY3Rpb24gKGVyciwgYXRsYXMpIHtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gYXRsYXMuZ2V0U3ByaXRlRnJhbWUoc3BmTmFtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+S5seaVsOe7hFxyXG4gICAgcHVibGljIHN0YXRpYyBzaHVmZmxlQXJyKGFycjogYW55W10pIHtcclxuICAgICAgICBsZXQgaSA9IGFyci5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGkpIHtcclxuICAgICAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpLS0pO1xyXG4gICAgICAgICAgICBbYXJyW2pdLCBhcnJbaV1dID0gW2FycltpXSwgYXJyW2pdXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICAvL+aVsOWtl+WJjeihpTBcclxuICAgIHB1YmxpYyBzdGF0aWMgam9pblplcm8obGVuZ3RoOiBudW1iZXIsIG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChBcnJheShsZW5ndGgpLmpvaW4oJzAnKSArIG51bSkuc2xpY2UoLWxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRXb3JsZFBvcyhub2RlOiBjYy5Ob2RlLCBwb2ludDogY2MuVmVjMiA9IGNjLnYyKDAsIDApKTogY2MuVmVjMiB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHBvaW50KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGREaXMobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHAxOiBjYy5WZWMyID0gdGhpcy5nZXRXb3JsZFBvcyhub2RlMSlcclxuICAgICAgICBsZXQgcDI6IGNjLlZlYzIgPSB0aGlzLmdldFdvcmxkUG9zKG5vZGUyKVxyXG4gICAgICAgIHJldHVybiAocDEuc3ViKHAyKSkubWFnKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFdvcmxkRGlyKGZyb206IGNjLk5vZGUsIHRvOiBjYy5Ob2RlKTogY2MuVmVjMiB7XHJcbiAgICAgICAgbGV0IHAxOiBjYy5WZWMyID0gdGhpcy5nZXRXb3JsZFBvcyhmcm9tKVxyXG4gICAgICAgIGxldCBwMjogY2MuVmVjMiA9IHRoaXMuZ2V0V29ybGRQb3ModG8pXHJcbiAgICAgICAgbGV0IGRpciA9IHAyLnN1YihwMSkubm9ybWFsaXplU2VsZigpXHJcbiAgICAgICAgcmV0dXJuIGRpclxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVsYXlBY3RpdmUobm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciwgdGFyZ2V0KSB7XHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRhcmdldC5zY2hlZHVsZU9uY2UoKCkgPT4geyBub2RlLmFjdGl2ZSA9IHRydWUgfSwgZHVyYXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb21JdGVtSW5BcnIoYXJyOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUl0ZW1JbkFycldpdGhvdXRTZWxmKHNlbGY6IGFueSwgYXJyOiBhbnlbXSwgY291bnQ6IG51bWJlciA9IDEpIHtcclxuICAgICAgICBsZXQgdGVtcDogYW55ID0gW10uY29uY2F0KGFycilcclxuICAgICAgICB0ZW1wLnNwbGljZSh0ZW1wLmluZGV4T2Yoc2VsZiksIDEpXHJcbiAgICAgICAgdGVtcCA9IHRoaXMuc2h1ZmZsZUFycih0ZW1wKVxyXG4gICAgICAgIHJldHVybiB0ZW1wLnNsaWNlKDAsIGNvdW50KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRlTG9vcChub2RlOiBjYy5Ob2RlLCBkdXJhdGlvbjogbnVtYmVyLCByYXRlOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgYTEgPSBjYy5yb3RhdGVCeShkdXJhdGlvbiwgLXJhdGUpXHJcbiAgICAgICAgbGV0IGEyID0gY2Mucm90YXRlQnkoZHVyYXRpb24gKiAyLCByYXRlICogMilcclxuICAgICAgICBsZXQgYTMgPSBjYy5yb3RhdGVCeShkdXJhdGlvbiwgLXJhdGUpXHJcbiAgICAgICAgbGV0IGE0ID0gY2Muc2VxdWVuY2UoYTEsIGEyLCBhMylcclxuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGE0KSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbShtaXgsIG1heCwgaXNJbnQgPSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IHcgPSBtYXggLSBtaXhcclxuICAgICAgICBsZXQgcjEgPSBNYXRoLnJhbmRvbSgpICogd1xyXG4gICAgICAgIHIxICs9IG1peFxyXG4gICAgICAgIHJldHVybiBpc0ludCA/IE1hdGguZmxvb3IocjEpIDogcjFcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrSW5zZWN0aW9uKHBOb2RlOiBjYy5Ob2RlLCByTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBwMSA9IHRoaXMuZ2V0V29ybGRQb3MocE5vZGUpXHJcbiAgICAgICAgbGV0IHJQb3MgPSB0aGlzLmdldFdvcmxkUG9zKHJOb2RlKVxyXG4gICAgICAgIGxldCB4MSA9IHJQb3MueCAtIHJOb2RlLndpZHRoIC8gMlxyXG4gICAgICAgIGxldCB4MiA9IHJQb3MueCArIHJOb2RlLndpZHRoIC8gMlxyXG4gICAgICAgIGxldCB5MSA9IHJQb3MueSAtIHJOb2RlLmhlaWdodCAvIDJcclxuICAgICAgICBsZXQgeTIgPSByUG9zLnkgKyByTm9kZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgcmV0dXJuIHAxLnggPj0geDEgJiYgcDEueCA8PSB4MiAmJiBwMS55ID49IHkxICYmIHAxLnkgPD0geTJcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mod/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa199+MokBA1ak/l2nJ16BK', 'SoundMgr');
// Scripts/Mod/SoundMgr.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundMgr = /** @class */ (function (_super) {
    __extends(SoundMgr, _super);
    function SoundMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentMusic = "";
        _this.currentAid = -1;
        _this.waitBackgroundMuisc = "";
        _this.buttonIns = false;
        _this.doneCB = null;
        return _this;
    }
    SoundMgr_1 = SoundMgr;
    SoundMgr.MuteSW = function () {
        cc.audioEngine.stopAll();
        cc.audioEngine.stopMusic();
        SoundMgr_1.IsMute = !SoundMgr_1.IsMute;
        SoundMgr_1.Share.node.active = !SoundMgr_1.IsMute;
        if (SoundMgr_1.IsMute == false) {
            SoundMgr_1.Share.PlayBackground(SoundMgr_1.Share.currentMusic == "" ? SoundMgr_1.Share.waitBackgroundMuisc : SoundMgr_1.Share.currentMusic);
        }
    };
    SoundMgr.initAll = function (cb) {
        // let soundnode: cc.Node = new cc.Node()
        // let crl = soundnode.addComponent(SoundMgr)
        // soundnode.name = "SoundMgr"
        // crl.doneCB = cb
        // crl.loadSounds()
        // cc.director.getScene().addChild(soundnode)
        // cc.game.addPersistRootNode(soundnode)
    };
    SoundMgr.prototype.loadSounds = function (cb) {
        var _this = this;
        this.doneCB = cb;
        cc.loader.loadResDir("Sound", cc.AudioClip, function (err, sounds) {
            sounds.forEach(function (sound) {
                var clip = new cc.Node();
                var crl = clip.addComponent(cc.AudioSource);
                crl.clip = sound;
                clip.name = sound.name;
                _this.node.addChild(clip);
            });
            _this.doneCB();
            cc.log("loaded sound:", sounds.length);
        });
    };
    SoundMgr.justMute = function () {
        SoundMgr_1.IsMute = true;
    };
    SoundMgr.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        SoundMgr_1.Share = this;
    };
    SoundMgr.prototype.start = function () {
        //cc.game.addPersistRootNode(this.node)
    };
    SoundMgr.prototype.PlaySound = function (key, loop) {
        if (loop === void 0) { loop = false; }
        if (this.node == null) {
            return null;
        }
        if (!SoundMgr_1.IsMute) {
            var source = this.node.getChildByName(key);
            if (source == null) {
                cc.log("can't load sound", key);
                return null;
            }
            return cc.audioEngine.play(this.node.getChildByName(key).getComponent(cc.AudioSource).clip, loop, 1);
        }
    };
    SoundMgr.prototype.getMusicClip = function (key) {
        return this.node.getChildByName(key).getComponent(cc.AudioSource).clip;
    };
    SoundMgr.prototype.PlayMusic = function (key, loop) {
        if (loop === void 0) { loop = false; }
        if (this.node == null) {
            return;
        }
        if (!SoundMgr_1.IsMute) {
            var source = this.node.getChildByName(key);
            if (source == null) {
                cc.log("can't load music", key);
                return;
            }
            if (!this.node.getChildByName(key).getComponent(cc.AudioSource).isPlaying) {
                this.node.getChildByName(key).getComponent(cc.AudioSource).loop = loop;
                this.node.getChildByName(key).getComponent(cc.AudioSource).play();
            }
            this.currentMusic = key;
        }
    };
    SoundMgr.prototype.PlayBackground = function (key) {
        if (this.node == null) {
            return;
        }
        this.waitBackgroundMuisc = key;
        if (SoundMgr_1.IsMute == false) {
            cc.log("playbackground ", key, SoundMgr_1.IsMute);
            var source = this.node.getChildByName(key);
            if (source == null) {
                cc.log("can't load PlayBackground", key);
                return;
            }
            if (this.currentMusic != "") {
                this.StopMuisc(this.currentMusic);
                cc.log("stop muisc", this.currentMusic);
            }
            if (!cc.audioEngine.isMusicPlaying() /* this.node.getChildByName(key).getComponent(cc.AudioSource).isPlaying */) {
                // this.node.getChildByName(key).getComponent(cc.AudioSource).loop = true
                // this.node.getChildByName(key).getComponent(cc.AudioSource).play()
                cc.audioEngine.playMusic(this.node.getChildByName(key).getComponent(cc.AudioSource).clip, true);
            }
            this.currentMusic = key;
        }
    };
    SoundMgr.prototype.StopMuisc = function (key) {
        if (this.node == null) {
            return;
        }
        this.node.getChildByName(key).getComponent(cc.AudioSource).stop();
    };
    var SoundMgr_1;
    SoundMgr.Share = new SoundMgr_1();
    SoundMgr.IsMute = false;
    SoundMgr = SoundMgr_1 = __decorate([
        ccclass
    ], SoundMgr);
    return SoundMgr;
}(cc.Component));
exports.default = SoundMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kXFxTb3VuZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBcUlDO1FBaElHLGtCQUFZLEdBQVcsRUFBRSxDQUFBO1FBSXpCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUE7UUFFdkIseUJBQW1CLEdBQVcsRUFBRSxDQUFBO1FBRWhDLGVBQVMsR0FBWSxLQUFLLENBQUE7UUFFMUIsWUFBTSxHQUFhLElBQUksQ0FBQTs7SUFzSDNCLENBQUM7aUJBcElvQixRQUFRO0lBZ0JYLGVBQU0sR0FBcEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDMUIsVUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLFVBQVEsQ0FBQyxNQUFNLENBQUE7UUFDbEMsVUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsVUFBUSxDQUFDLE1BQU0sQ0FBQTtRQUM3QyxJQUFJLFVBQVEsQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFO1lBQzFCLFVBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBUSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsVUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUN0STtJQUNMLENBQUM7SUFFYSxnQkFBTyxHQUFyQixVQUFzQixFQUFZO1FBQzlCLHlDQUF5QztRQUN6Qyw2Q0FBNkM7UUFDN0MsOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixtQkFBbUI7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RSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2FBQzFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUEsMEVBQTBFLEVBQUU7Z0JBQzVHLHlFQUF5RTtnQkFDekUsb0VBQW9FO2dCQUNwRSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTthQUNsRztZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFBO1NBQzFCO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxHQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDbkIsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNyRSxDQUFDOztJQWpJTSxjQUFLLEdBQWEsSUFBSSxVQUFRLEVBQUUsQ0FBQTtJQUloQyxlQUFNLEdBQVksS0FBSyxDQUFBO0lBTmIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9JNUI7SUFBRCxlQUFDO0NBcElELEFBb0lDLENBcElxQyxFQUFFLENBQUMsU0FBUyxHQW9JakQ7a0JBcElvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgU2hhcmU6IFNvdW5kTWdyID0gbmV3IFNvdW5kTWdyKClcclxuXHJcbiAgICBjdXJyZW50TXVzaWM6IHN0cmluZyA9IFwiXCJcclxuXHJcbiAgICBzdGF0aWMgSXNNdXRlOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBjdXJyZW50QWlkOiBudW1iZXIgPSAtMVxyXG5cclxuICAgIHdhaXRCYWNrZ3JvdW5kTXVpc2M6IHN0cmluZyA9IFwiXCJcclxuXHJcbiAgICBidXR0b25JbnM6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIGRvbmVDQjogRnVuY3Rpb24gPSBudWxsXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBNdXRlU1coKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKClcclxuICAgICAgICBTb3VuZE1nci5Jc011dGUgPSAhU291bmRNZ3IuSXNNdXRlXHJcbiAgICAgICAgU291bmRNZ3IuU2hhcmUubm9kZS5hY3RpdmUgPSAhU291bmRNZ3IuSXNNdXRlXHJcbiAgICAgICAgaWYgKFNvdW5kTWdyLklzTXV0ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBTb3VuZE1nci5TaGFyZS5QbGF5QmFja2dyb3VuZChTb3VuZE1nci5TaGFyZS5jdXJyZW50TXVzaWMgPT0gXCJcIiA/IFNvdW5kTWdyLlNoYXJlLndhaXRCYWNrZ3JvdW5kTXVpc2MgOiBTb3VuZE1nci5TaGFyZS5jdXJyZW50TXVzaWMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdEFsbChjYjogRnVuY3Rpb24pIHtcclxuICAgICAgICAvLyBsZXQgc291bmRub2RlOiBjYy5Ob2RlID0gbmV3IGNjLk5vZGUoKVxyXG4gICAgICAgIC8vIGxldCBjcmwgPSBzb3VuZG5vZGUuYWRkQ29tcG9uZW50KFNvdW5kTWdyKVxyXG4gICAgICAgIC8vIHNvdW5kbm9kZS5uYW1lID0gXCJTb3VuZE1nclwiXHJcbiAgICAgICAgLy8gY3JsLmRvbmVDQiA9IGNiXHJcbiAgICAgICAgLy8gY3JsLmxvYWRTb3VuZHMoKVxyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQoc291bmRub2RlKVxyXG4gICAgICAgIC8vIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHNvdW5kbm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU291bmRzKGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuZG9uZUNCID0gY2JcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihcIlNvdW5kXCIsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgc291bmRzKSA9PiB7XHJcbiAgICAgICAgICAgIHNvdW5kcy5mb3JFYWNoKChzb3VuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaXAgPSBuZXcgY2MuTm9kZSgpXHJcbiAgICAgICAgICAgICAgICBsZXQgY3JsID0gY2xpcC5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICAgICAgICAgICAgICBjcmwuY2xpcCA9IHNvdW5kXHJcbiAgICAgICAgICAgICAgICBjbGlwLm5hbWUgPSBzb3VuZC5uYW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY2xpcClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5kb25lQ0IoKVxyXG4gICAgICAgICAgICBjYy5sb2coXCJsb2FkZWQgc291bmQ6XCIsIHNvdW5kcy5sZW5ndGgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGp1c3RNdXRlKCkge1xyXG4gICAgICAgIFNvdW5kTWdyLklzTXV0ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKVxyXG4gICAgICAgIFNvdW5kTWdyLlNoYXJlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvL2NjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBQbGF5U291bmQoa2V5OiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVNvdW5kTWdyLklzTXV0ZSkge1xyXG4gICAgICAgICAgICBsZXQgc291cmNlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSlcclxuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJjYW4ndCBsb2FkIHNvdW5kXCIsIGtleSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwLCBsb29wLCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRNdXNpY0NsaXAoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwXHJcbiAgICB9XHJcblxyXG4gICAgUGxheU11c2ljKGtleTogc3RyaW5nLCBsb29wOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghU291bmRNZ3IuSXNNdXRlKSB7XHJcbiAgICAgICAgICAgIGxldCBzb3VyY2UgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoa2V5KVxyXG4gICAgICAgICAgICBpZiAoc291cmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNhbid0IGxvYWQgbXVzaWNcIiwga2V5KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoa2V5KS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5sb29wID0gbG9vcFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNdXNpYyA9IGtleVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBQbGF5QmFja2dyb3VuZChrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YWl0QmFja2dyb3VuZE11aXNjID0ga2V5XHJcbiAgICAgICAgaWYgKFNvdW5kTWdyLklzTXV0ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJwbGF5YmFja2dyb3VuZCBcIiwga2V5LCBTb3VuZE1nci5Jc011dGUpXHJcbiAgICAgICAgICAgIGxldCBzb3VyY2UgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoa2V5KVxyXG4gICAgICAgICAgICBpZiAoc291cmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNhbid0IGxvYWQgUGxheUJhY2tncm91bmRcIiwga2V5KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNdXNpYyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0b3BNdWlzYyh0aGlzLmN1cnJlbnRNdXNpYylcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcInN0b3AgbXVpc2NcIiwgdGhpcy5jdXJyZW50TXVzaWMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpLyogdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5pc1BsYXlpbmcgKi8pIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShrZXkpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkubG9vcCA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShrZXkpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwLCB0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE11c2ljID0ga2V5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFN0b3BNdWlzYyhrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGtleSkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5zdG9wKClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Libs/ScaleLoop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '990d6YJhU5HUbj0EGVi6QL6', 'ScaleLoop');
// Scripts/Libs/ScaleLoop.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScaleLoop = /** @class */ (function (_super) {
    __extends(ScaleLoop, _super);
    function ScaleLoop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originScale = 1;
        _this.targetScale = 1;
        _this.scaleDuration = 0.5;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    ScaleLoop.prototype.start = function () {
        var a1 = cc.scaleTo(this.scaleDuration, this.targetScale);
        var a2 = cc.scaleTo(this.scaleDuration, this.originScale);
        var a3 = cc.sequence(a1, a2);
        this.node.runAction(cc.repeatForever(a3));
    };
    __decorate([
        property
    ], ScaleLoop.prototype, "originScale", void 0);
    __decorate([
        property
    ], ScaleLoop.prototype, "targetScale", void 0);
    __decorate([
        property
    ], ScaleLoop.prototype, "scaleDuration", void 0);
    ScaleLoop = __decorate([
        ccclass
    ], ScaleLoop);
    return ScaleLoop;
}(cc.Component));
exports.default = ScaleLoop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcU2NhbGVMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUFvQkM7UUFoQkcsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFFdkIsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFFdkIsbUJBQWEsR0FBVyxHQUFHLENBQUE7O1FBVzNCLGlCQUFpQjtJQUNyQixDQUFDO0lBVkcsZUFBZTtJQUVmLHlCQUFLLEdBQUw7UUFDSSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDekQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFiRDtRQURDLFFBQVE7a0RBQ2M7SUFFdkI7UUFEQyxRQUFRO2tEQUNjO0lBRXZCO1FBREMsUUFBUTtvREFDa0I7SUFQVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBbUI3QjtJQUFELGdCQUFDO0NBbkJELEFBbUJDLENBbkJzQyxFQUFFLENBQUMsU0FBUyxHQW1CbEQ7a0JBbkJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FsZUxvb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgb3JpZ2luU2NhbGU6IG51bWJlciA9IDFcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGFyZ2V0U2NhbGU6IG51bWJlciA9IDFcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2NhbGVEdXJhdGlvbjogbnVtYmVyID0gMC41XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IGExID0gY2Muc2NhbGVUbyh0aGlzLnNjYWxlRHVyYXRpb24sIHRoaXMudGFyZ2V0U2NhbGUpXHJcbiAgICAgICAgbGV0IGEyID0gY2Muc2NhbGVUbyh0aGlzLnNjYWxlRHVyYXRpb24sIHRoaXMub3JpZ2luU2NhbGUpXHJcbiAgICAgICAgbGV0IGEzID0gY2Muc2VxdWVuY2UoYTEsIGEyKVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihhMykpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/WeChatUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41e53a5Wv1KTp5KIBsXoHlf', 'WeChatUI');
// Scripts/UI/WeChatUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("../Mod/Utility");
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var WxApi_1 = require("../Libs/WxApi");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WeChatUI = /** @class */ (function (_super) {
    __extends(WeChatUI, _super);
    function WeChatUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.playerName = null;
        _this.gameName = null;
        _this.playerNames = ["有个小可爱", "大妈杀手", "神秘靓仔", "超级飞侠乐迪", "几一鸡", "爱喝可乐", "卖葫芦的葫芦娃", "多啦ABCD梦", "坏女孩", "沙雕网友"];
        _this.gameIndex = 0;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    WeChatUI.prototype.start = function () {
    };
    WeChatUI.prototype.showUI = function (callback, param) {
        this.node.active = true;
        WxApi_1.default.aldEvent('好友消息提示横幅出现次数');
    };
    WeChatUI.prototype.onEnable = function () {
        this.rootNode.runAction(cc.moveBy(0.5, cc.v2(0, -200)));
        this.initData();
    };
    WeChatUI.prototype.onDisable = function () {
        this.rootNode.y = cc.view.getVisibleSize().height / 2;
    };
    WeChatUI.prototype.initData = function () {
        var _this = this;
        var nArr = [].concat(this.playerNames);
        nArr = Utility_1.default.shuffleArr(nArr);
        this.playerName.string = nArr[0];
        this.gameName.string = ExportUtils_1.default.instance.navigateAppArr[this.gameIndex].title;
        var id = this.gameIndex;
        this.rootNode.off(cc.Node.EventType.TOUCH_END);
        this.rootNode.on(cc.Node.EventType.TOUCH_END, function (event) { _this.navCB(event, id); }, this);
        this.gameIndex++;
        if (this.gameIndex >= 6) {
            this.gameIndex = 0;
        }
    };
    WeChatUI.prototype.navCB = function (event, id) {
        var _this = this;
        console.log('click id:', id);
        WxApi_1.default.aldEvent('好友消息提示横幅-总点击数');
        this.node.active = false;
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            _this.scheduleOnce(function () { _this.node.active = true; }, 1);
        }, function () {
            WxApi_1.default.aldEvent('好友消息提示横幅-总成功跳转数');
        });
    };
    __decorate([
        property(cc.Node)
    ], WeChatUI.prototype, "rootNode", void 0);
    __decorate([
        property(cc.Label)
    ], WeChatUI.prototype, "playerName", void 0);
    __decorate([
        property(cc.Label)
    ], WeChatUI.prototype, "gameName", void 0);
    WeChatUI = __decorate([
        ccclass
    ], WeChatUI);
    return WeChatUI;
}(cc.Component));
exports.default = WeChatUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFdlQ2hhdFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFxQztBQUNyQyw0REFBaUQ7QUFDakQsdUNBQWtDO0FBRTVCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUErREM7UUEzREcsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixnQkFBVSxHQUFhLElBQUksQ0FBQTtRQUUzQixjQUFRLEdBQWEsSUFBSSxDQUFBO1FBRXpCLGlCQUFXLEdBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVoSCxlQUFTLEdBQVcsQ0FBQyxDQUFBOztRQWtEckIsaUJBQWlCO0lBQ3JCLENBQUM7SUFqREcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLFFBQW1CLEVBQUUsS0FBVztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdkIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEcsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdEMsSUFBSSxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVoQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUUxRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUssSUFBTyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUV6RixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtTQUNyQjtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLEVBQUU7UUFBZixpQkFTQztRQVJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLGVBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3hCLHFCQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzRCxDQUFDLEVBQUU7WUFDQyxlQUFLLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBeEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNNO0lBUFIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThENUI7SUFBRCxlQUFDO0NBOURELEFBOERDLENBOURxQyxFQUFFLENBQUMsU0FBUyxHQThEakQ7a0JBOURvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBKSk1nciBmcm9tIFwiLi4vLi4vRXhwb3J0TGlicy9FeHBvcnRVdGlsc1wiO1xyXG5pbXBvcnQgV3hBcGkgZnJvbSBcIi4uL0xpYnMvV3hBcGlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZUNoYXRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByb290Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXllck5hbWU6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ2FtZU5hbWU6IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIHBsYXllck5hbWVzOiBzdHJpbmdbXSA9IFtcIuacieS4quWwj+WPr+eIsVwiLCBcIuWkp+WmiOadgOaJi1wiLCBcIuelnuenmOmdk+S7lFwiLCBcIui2hee6p+mjnuS+oOS5kOi/qlwiLCBcIuWHoOS4gOm4oVwiLCBcIueIseWWneWPr+S5kFwiLCBcIuWNluiRq+iKpueahOiRq+iKpuWog1wiLCBcIuWkmuWVpkFCQ0TmoqZcIiwgXCLlnY/lpbPlralcIiwgXCLmspnpm5XnvZHlj4tcIl07XHJcblxyXG4gICAgZ2FtZUluZGV4OiBudW1iZXIgPSAwXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVSShjYWxsYmFjaz86IEZ1bmN0aW9uLCBwYXJhbT86IGFueSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+WlveWPi+a2iOaBr+aPkOekuuaoquW5heWHuueOsOasoeaVsCcpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yb290Tm9kZS5ydW5BY3Rpb24oY2MubW92ZUJ5KDAuNSwgY2MudjIoMCwgLTIwMCkpKVxyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJvb3ROb2RlLnkgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0IC8gMlxyXG4gICAgfVxyXG5cclxuICAgIGluaXREYXRhKCkge1xyXG4gICAgICAgIGxldCBuQXJyID0gW10uY29uY2F0KHRoaXMucGxheWVyTmFtZXMpXHJcbiAgICAgICAgbkFyciA9IFV0aWxpdHkuc2h1ZmZsZUFycihuQXJyKVxyXG4gICAgICAgIHRoaXMucGxheWVyTmFtZS5zdHJpbmcgPSBuQXJyWzBdXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZU5hbWUuc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UubmF2aWdhdGVBcHBBcnJbdGhpcy5nYW1lSW5kZXhdLnRpdGxlXHJcblxyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuZ2FtZUluZGV4XHJcbiAgICAgICAgdGhpcy5yb290Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKVxyXG4gICAgICAgIHRoaXMucm9vdE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHsgdGhpcy5uYXZDQihldmVudCwgaWQpIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUluZGV4KytcclxuICAgICAgICBpZiAodGhpcy5nYW1lSW5kZXggPj0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbmRleCA9IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmF2Q0IoZXZlbnQsIGlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGlkOicsIGlkKVxyXG4gICAgICAgIFd4QXBpLmFsZEV2ZW50KCflpb3lj4vmtojmga/mj5DnpLrmqKrluYUt5oC754K55Ye75pWwJylcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBKSk1nci5pbnN0YW5jZS5OYXZpZ2F0ZUFwcChpZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlIH0sIDEpXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn5aW95Y+L5raI5oGv5o+Q56S65qiq5bmFLeaAu+aIkOWKn+i3s+i9rOaVsCcpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/StartUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c440E0AN1GhoEwMJ/4egfp', 'StartUI');
// Scripts/UI/StartUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var TimeCountMgr_1 = require("../Libs/TimeCountMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartUI = /** @class */ (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GetFishUI = null;
        _this.GetPowerUI = null;
        _this.GetTipsUI = null;
        _this.powerNum = null;
        _this.powerTime = null;
        _this.tipsNum = null;
        _this.gradeNum = null;
        _this.fishLvNum = null;
        _this.leftLvNum = null;
        return _this;
    }
    StartUI.prototype.onLoad = function () { };
    StartUI.prototype.start = function () {
    };
    StartUI.prototype.startGameCB = function () {
        cc.director.loadScene('GameScene');
    };
    StartUI.prototype.getFishBtnCB = function () {
    };
    StartUI.prototype.getPowerBtnCB = function () {
    };
    StartUI.prototype.getTipsBtnCB = function () {
    };
    StartUI.prototype.calculatePowerTime = function () {
        var t = TimeCountMgr_1.default.Share.tCount;
        var m = Math.floor(t / 60);
        var s = Math.floor(t - m * 60);
        this.powerTime.string = m.toString() + ':' + s.toString();
        this.powerNum.string = PlayerDataMgr_1.default.getPlayerData().power.toString();
        this.powerTime.node.active = PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax;
    };
    StartUI.prototype.update = function (dt) {
        this.calculatePowerTime();
    };
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "GetFishUI", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "GetPowerUI", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "GetTipsUI", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "powerNum", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "powerTime", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "tipsNum", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "gradeNum", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "fishLvNum", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "leftLvNum", void 0);
    StartUI = __decorate([
        ccclass
    ], StartUI);
    return StartUI;
}(cc.Component));
exports.default = StartUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFN0YXJ0VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUUxQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBRGpEO1FBQUEscUVBNkRDO1FBekRHLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUd6QixjQUFRLEdBQWEsSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBYSxJQUFJLENBQUE7UUFHMUIsYUFBTyxHQUFhLElBQUksQ0FBQTtRQUd4QixjQUFRLEdBQWEsSUFBSSxDQUFBO1FBR3pCLGVBQVMsR0FBYSxJQUFJLENBQUE7UUFHMUIsZUFBUyxHQUFhLElBQUksQ0FBQTs7SUFvQzlCLENBQUM7SUFsQ0csd0JBQU0sR0FBTixjQUFXLENBQUM7SUFFWix1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDZCQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsOEJBQVksR0FBWjtJQUVBLENBQUM7SUFFRCwrQkFBYSxHQUFiO0lBRUEsQ0FBQztJQUVELDhCQUFZLEdBQVo7SUFFQSxDQUFDO0lBRUQsb0NBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsc0JBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNyRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsdUJBQWEsQ0FBQyxRQUFRLENBQUE7SUFDN0YsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7SUFDN0IsQ0FBQztJQXhERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDTztJQXhCVCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNEQzQjtJQUFELGNBQUM7Q0E1REQsQUE0REMsQ0E1RG9DLEVBQUUsQ0FBQyxTQUFTLEdBNERoRDtrQkE1RG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBUaW1lQ291bnRNZ3IgZnJvbSBcIi4uL0xpYnMvVGltZUNvdW50TWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHZXRGaXNoVUk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdldFBvd2VyVUk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdldFRpcHNVSTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwb3dlck51bTogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwb3dlclRpbWU6IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpcHNOdW06IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGdyYWRlTnVtOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBmaXNoTHZOdW06IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxlZnRMdk51bTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKCkgeyB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZUNCKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZVNjZW5lJylcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaXNoQnRuQ0IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBvd2VyQnRuQ0IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpcHNCdG5DQigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlUG93ZXJUaW1lKCkge1xyXG4gICAgICAgIGxldCB0ID0gVGltZUNvdW50TWdyLlNoYXJlLnRDb3VudFxyXG4gICAgICAgIGxldCBtID0gTWF0aC5mbG9vcih0IC8gNjApXHJcbiAgICAgICAgbGV0IHMgPSBNYXRoLmZsb29yKHQgLSBtICogNjApXHJcbiAgICAgICAgdGhpcy5wb3dlclRpbWUuc3RyaW5nID0gbS50b1N0cmluZygpICsgJzonICsgcy50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wb3dlck51bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlci50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wb3dlclRpbWUubm9kZS5hY3RpdmUgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciA8IFBsYXllckRhdGFNZ3IucG93ZXJNYXhcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBvd2VyVGltZSgpXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/FinishUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd30bbeCSLVH8azIwmyFk0IW', 'FinishUI');
// Scripts/UI/FinishUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FinishUI = /** @class */ (function (_super) {
    __extends(FinishUI, _super);
    function FinishUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinishUI.prototype.onLoad = function () { };
    FinishUI.prototype.start = function () {
    };
    FinishUI.prototype.backCB = function () {
        PlayerDataMgr_1.default.getPlayerData().grade++;
        PlayerDataMgr_1.default.setPlayerData();
        cc.director.loadScene('StartScene');
    };
    FinishUI.prototype.nextCB = function () {
        PlayerDataMgr_1.default.getPlayerData().grade++;
        PlayerDataMgr_1.default.setPlayerData();
        cc.director.loadScene('GameScene');
    };
    FinishUI.prototype.update = function (dt) { };
    FinishUI = __decorate([
        ccclass
    ], FinishUI);
    return FinishUI;
}(cc.Component));
exports.default = FinishUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEZpbmlzaFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUU1QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQXVCQSxDQUFDO0lBbkJHLHlCQUFNLEdBQU4sY0FBVyxDQUFDO0lBRVosd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNyQyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNyQyx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRSxJQUFJLENBQUM7SUF0QkcsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVCNUI7SUFBRCxlQUFDO0NBdkJELEFBdUJDLENBdkJxQyxFQUFFLENBQUMsU0FBUyxHQXVCakQ7a0JBdkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4uL0xpYnMvUGxheWVyRGF0YU1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbmlzaFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHsgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiYWNrQ0IoKSB7XHJcbiAgICAgICAgUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUrK1xyXG4gICAgICAgIFBsYXllckRhdGFNZ3Iuc2V0UGxheWVyRGF0YSgpXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTdGFydFNjZW5lJylcclxuICAgIH1cclxuXHJcbiAgICBuZXh0Q0IoKSB7XHJcbiAgICAgICAgUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUrK1xyXG4gICAgICAgIFBsYXllckRhdGFNZ3Iuc2V0UGxheWVyRGF0YSgpXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lU2NlbmUnKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkgeyB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76dab/iNgFMwIBq7kOYxdpb', 'Player');
// Scripts/Crl/Player.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LevelBase_1 = require("./Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointNode = null;
        _this.gotMeat = false;
        _this.moveSpeed = 1;
        _this.pointIndex = 0;
        return _this;
        // update (dt) {}
    }
    Player.prototype.onLoad = function () {
        this.pointNode = LevelBase_1.default.Share.node.getChildByName('PointNode');
    };
    Player.prototype.start = function () {
    };
    //吃掉食物
    Player.prototype.eatMean = function () {
        this.gotMeat = true;
    };
    Player.prototype.moveToPoint = function (index) {
        var _this = this;
        return new Promise(function (rs, rj) {
            var a1 = cc.moveTo(_this.moveSpeed, _this.pointNode.children[index].getPosition());
            var a2 = cc.callFunc(function () {
                _this.pointIndex = index;
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQTBDO0FBRXBDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFEaEQ7UUFBQSxxRUFvQ0M7UUFqQ0csZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQVksS0FBSyxDQUFBO1FBRXhCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsZ0JBQVUsR0FBVyxDQUFDLENBQUE7O1FBMkJ0QixpQkFBaUI7SUFDckIsQ0FBQztJQTFCRyx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELE1BQU07SUFDTix3QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7SUFDdkIsQ0FBQztJQUVELDRCQUFXLEdBQVgsVUFBWSxLQUFhO1FBQXpCLGlCQVVDO1FBVEcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO1lBQ2hGLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO2dCQUN2QixFQUFFLEVBQUUsQ0FBQTtZQUNSLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDNUIsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBaENnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBbUMxQjtJQUFELGFBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ21DLEVBQUUsQ0FBQyxTQUFTLEdBbUMvQztrQkFuQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGV2ZWwxIGZyb20gXCIuL0xldmVsL0xldmVsMVwiO1xyXG5pbXBvcnQgTGV2ZWxCYXNlIGZyb20gXCIuL0xldmVsL0xldmVsQmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcG9pbnROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIGdvdE1lYXQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIG1vdmVTcGVlZDogbnVtYmVyID0gMVxyXG4gICAgcG9pbnRJbmRleDogbnVtYmVyID0gMFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnBvaW50Tm9kZSA9IExldmVsQmFzZS5TaGFyZS5ub2RlLmdldENoaWxkQnlOYW1lKCdQb2ludE5vZGUnKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+WQg+aOiemjn+eJqVxyXG4gICAgZWF0TWVhbigpIHtcclxuICAgICAgICB0aGlzLmdvdE1lYXQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvUG9pbnQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocnMsIHJqKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVTcGVlZCwgdGhpcy5wb2ludE5vZGUuY2hpbGRyZW5baW5kZXhdLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgIGxldCBhMiA9IGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRJbmRleCA9IGluZGV4XHJcbiAgICAgICAgICAgICAgICBycygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCBhMyA9IGNjLnNlcXVlbmNlKGExLCBhMilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhMylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '212abZTd0dDl6qZeddjUuSu', 'NewScript');
// Scripts/Crl/Prop/NewScript.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxOZXdTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQWtCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/ThreeNeedle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7da151k1dGGK5FMo7zyWxI', 'ThreeNeedle');
// Scripts/Crl/Prop/ThreeNeedle.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ThreeNeedle = /** @class */ (function (_super) {
    __extends(ThreeNeedle, _super);
    function ThreeNeedle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topY = 0;
        _this.bottomY = 0;
        _this.validTouch = false;
        _this.touchStartPos = cc.v2(0, 0);
        _this.isClosed = true;
        _this.closeCB = null;
        _this.openCB = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    ThreeNeedle.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    ThreeNeedle.prototype.touchStart = function (event) {
        var pos = event.getLocation();
        this.touchStartPos = pos;
        pos = this.node.convertToNodeSpaceAR(pos);
        this.validTouch = cc.Intersection.pointInPolygon(pos, this.getComponent(cc.PolygonCollider).points);
    };
    ThreeNeedle.prototype.touchMove = function (event) {
        if (!this.validTouch)
            return;
        var pos = event.getLocation();
        var dty = pos.y - this.touchStartPos.y;
        if (dty > 30)
            dty = 30;
        this.node.y += dty;
        if (this.node.y < this.bottomY) {
            this.node.y = this.bottomY;
            !this.isClosed && this.closeCB && this.closeCB();
            this.validTouch = false;
            this.isClosed = true;
        }
        if (this.node.y > this.topY) {
            this.node.y = this.topY;
            this.isClosed && this.openCB && this.openCB();
            this.validTouch = false;
            this.isClosed = false;
        }
        this.touchStartPos = pos;
    };
    ThreeNeedle.prototype.touchEnd = function (event) {
        if (!this.validTouch)
            return;
        this.validTouch = false;
    };
    __decorate([
        property
    ], ThreeNeedle.prototype, "topY", void 0);
    __decorate([
        property
    ], ThreeNeedle.prototype, "bottomY", void 0);
    ThreeNeedle = __decorate([
        ccclass
    ], ThreeNeedle);
    return ThreeNeedle;
}(cc.Component));
exports.default = ThreeNeedle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxUaHJlZU5lZWRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBNkRDO1FBekRHLFVBQUksR0FBVSxDQUFDLENBQUE7UUFFZixhQUFPLEdBQVUsQ0FBQyxDQUFBO1FBRWxCLGdCQUFVLEdBQVksS0FBSyxDQUFBO1FBRTNCLG1CQUFhLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFcEMsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUN4QixhQUFPLEdBQWEsSUFBSSxDQUFBO1FBQ3hCLFlBQU0sR0FBYSxJQUFJLENBQUE7O1FBOEN2QixpQkFBaUI7SUFDckIsQ0FBQztJQTdDRyxlQUFlO0lBRWYsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsS0FBMEI7UUFDakMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO1FBQ3hCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3ZHLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBMEI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTTtRQUM1QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7UUFFN0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUE7UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7WUFDMUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDdkIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtTQUN4QjtRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO0lBQzVCLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsS0FBMEI7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtJQUMzQixDQUFDO0lBdEREO1FBREMsUUFBUTs2Q0FDTTtJQUVmO1FBREMsUUFBUTtnREFDUztJQUxELFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0RC9CO0lBQUQsa0JBQUM7Q0E1REQsQUE0REMsQ0E1RHdDLEVBQUUsQ0FBQyxTQUFTLEdBNERwRDtrQkE1RG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTmVlZGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRvcFk6bnVtYmVyID0gMFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBib3R0b21ZOm51bWJlciA9IDBcclxuXHJcbiAgICB2YWxpZFRvdWNoOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuXHJcbiAgICBpc0Nsb3NlZDogYm9vbGVhbiA9IHRydWVcclxuICAgIGNsb3NlQ0I6IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgb3BlbkNCOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcylcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgdGhpcy52YWxpZFRvdWNoID0gY2MuSW50ZXJzZWN0aW9uLnBvaW50SW5Qb2x5Z29uKHBvcywgdGhpcy5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKS5wb2ludHMpXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcblxyXG4gICAgICAgIGxldCBkdHkgPSBwb3MueSAtIHRoaXMudG91Y2hTdGFydFBvcy55XHJcbiAgICAgICAgaWYgKGR0eSA+IDMwKSBkdHkgPSAzMFxyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IGR0eVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA8IHRoaXMuYm90dG9tWSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMuYm90dG9tWVxyXG4gICAgICAgICAgICAhdGhpcy5pc0Nsb3NlZCAmJiB0aGlzLmNsb3NlQ0IgJiYgdGhpcy5jbG9zZUNCKClcclxuICAgICAgICAgICAgdGhpcy52YWxpZFRvdWNoID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0Nsb3NlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS55ID4gdGhpcy50b3BZKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy50b3BZXHJcbiAgICAgICAgICAgIHRoaXMuaXNDbG9zZWQgJiYgdGhpcy5vcGVuQ0IgJiYgdGhpcy5vcGVuQ0IoKVxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzQ2xvc2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG4gICAgICAgIHRoaXMudmFsaWRUb3VjaCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Prop/SlideNeedle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '212abZTd0dDl6qZeddjUuSu', 'SlideNeedle');
// Scripts/Crl/Prop/SlideNeedle.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SlideNeedle = /** @class */ (function (_super) {
    __extends(SlideNeedle, _super);
    function SlideNeedle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topY = 0;
        _this.bottomY = 0;
        _this.validTouch = true;
        _this.moveCB = null;
        _this.touchStartPos = cc.v2(0, 0);
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    SlideNeedle.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    SlideNeedle.prototype.touchStart = function (event) {
        if (!this.validTouch)
            return;
        var pos = event.getLocation();
        this.touchStartPos = pos;
    };
    SlideNeedle.prototype.touchMove = function (event) {
        if (!this.validTouch)
            return;
        var pos = event.getLocation();
        var dty = pos.y - this.touchStartPos.y;
        if (dty > 30)
            dty = 30;
        this.node.y += dty;
        if (this.node.y < this.bottomY) {
            this.node.y = this.bottomY;
            return;
        }
        if (this.node.y > this.topY) {
            this.node.y = this.topY;
            return;
        }
        this.moveCB && this.moveCB();
        this.touchStartPos = pos;
    };
    SlideNeedle.prototype.touchEnd = function (event) {
        if (!this.validTouch)
            return;
    };
    __decorate([
        property
    ], SlideNeedle.prototype, "topY", void 0);
    __decorate([
        property
    ], SlideNeedle.prototype, "bottomY", void 0);
    SlideNeedle = __decorate([
        ccclass
    ], SlideNeedle);
    return SlideNeedle;
}(cc.Component));
exports.default = SlideNeedle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxQcm9wXFxTbGlkZU5lZWRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBbURDO1FBaERHLFVBQUksR0FBVSxDQUFDLENBQUE7UUFFZixhQUFPLEdBQVUsQ0FBQyxDQUFBO1FBRWxCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBQzFCLFlBQU0sR0FBYSxJQUFJLENBQUE7UUFDdkIsbUJBQWEsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTs7UUF5Q3BDLGlCQUFpQjtJQUNyQixDQUFDO0lBeENHLGVBQWU7SUFFZiwyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckUsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxLQUEwQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFNO1FBQzVCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQTtJQUM1QixDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLEtBQTBCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU07UUFFNUIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFDdEMsSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUFFLEdBQUcsR0FBRyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFBO1FBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFBO1lBQzFCLE9BQU07U0FDVDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBQ3ZCLE9BQU07U0FDVDtRQUVELElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO0lBQzVCLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsS0FBMEI7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTTtJQUNoQyxDQUFDO0lBN0NEO1FBREMsUUFBUTs2Q0FDTTtJQUVmO1FBREMsUUFBUTtnREFDUztJQUpELFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FrRC9CO0lBQUQsa0JBQUM7Q0FsREQsQUFrREMsQ0FsRHdDLEVBQUUsQ0FBQyxTQUFTLEdBa0RwRDtrQkFsRG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlTmVlZGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdG9wWTpudW1iZXIgPSAwXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGJvdHRvbVk6bnVtYmVyID0gMFxyXG5cclxuICAgIHZhbGlkVG91Y2g6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBtb3ZlQ0I6IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgdG91Y2hTdGFydFBvczogY2MuVmVjMiA9IGNjLnYyKDAsIDApXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gcG9zXHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIGxldCBkdHkgPSBwb3MueSAtIHRoaXMudG91Y2hTdGFydFBvcy55XHJcbiAgICAgICAgaWYgKGR0eSA+IDMwKSBkdHkgPSAzMFxyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IGR0eVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA8IHRoaXMuYm90dG9tWSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMuYm90dG9tWVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS55ID4gdGhpcy50b3BZKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy50b3BZXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlQ0IgJiYgdGhpcy5tb3ZlQ0IoKVxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IHBvc1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkVG91Y2gpIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
