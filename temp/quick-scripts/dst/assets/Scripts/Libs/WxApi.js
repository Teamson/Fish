
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
        if (!this.front_share_number)
            this.front_share_number = 0;
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
            return sInt == WxApi.sceneId;
        }
        var sArr = s.split('|');
        for (var i = 0; i < sArr.length; i++) {
            var sInt = parseInt(sArr[i]);
            if (sInt == WxApi.sceneId) {
                return true;
            }
        }
        return false;
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
    WxApi.version = '1.0.1';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTGlic1xcV3hBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBZ0Q7QUFDaEQsaURBQTJDO0FBQzNDLHNDQUFnQztBQUVoQztJQUFBO0lBK1BBLENBQUM7SUFoT0csTUFBTTtJQUNRLGFBQU8sR0FBckIsVUFBc0IsRUFBWTtRQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVztZQUFFLE9BQU07UUFDbEQsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNmLE9BQU8sWUFBQyxHQUFHO2dCQUNQLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25DLElBQUksRUFBRSxFQUFFO3dCQUNKLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtxQkFDakM7aUJBQ0o7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE1BQU07SUFDTixnQ0FBZ0M7SUFDbEIsb0JBQWMsR0FBNUIsVUFBNkIsR0FBYTtRQUExQyxpQkFZQztRQVhHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUE7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7Z0JBQ3JCLGtCQUFrQjtnQkFDbEIsSUFBSSxLQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtvQkFDeEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDdkI7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUM3QixDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUNhLHNCQUFnQixHQUE5QjtRQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDeEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtTQUM3QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUE7U0FDZDtJQUNMLENBQUM7SUFFYSxjQUFRLEdBQXRCLFVBQXVCLEdBQWE7UUFDaEMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQzNCO0lBQ0wsQ0FBQztJQUNhLGVBQVMsR0FBdkIsVUFBd0IsR0FBYTtRQUNqQyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQzVCO0lBQ0wsQ0FBQztJQUNhLGNBQVEsR0FBdEIsVUFBdUIsR0FBYTtRQUNoQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDM0I7SUFDTCxDQUFDO0lBQ2EsZUFBUyxHQUF2QixVQUF3QixHQUFhO1FBQ2pDLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDNUI7SUFDTCxDQUFDO0lBRUQsSUFBSTtJQUNVLGVBQVMsR0FBdkIsVUFBd0IsT0FBdUI7UUFBdkIsd0JBQUEsRUFBQSxjQUF1QjtRQUMzQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDMUQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFBO2FBQzlCO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTthQUM3QjtTQUNKO0lBQ0wsQ0FBQztJQUVELE1BQU07SUFDUSxlQUFTLEdBQXZCLFVBQXdCLEdBQVcsRUFBRSxHQUFrQixFQUFFLElBQXFCO1FBQXpDLG9CQUFBLEVBQUEsVUFBa0I7UUFBRSxxQkFBQSxFQUFBLFlBQXFCO1FBQzFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNO2FBQ2xDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUVELElBQUk7SUFDVSxpQkFBVyxHQUF6QixVQUEwQixLQUFhLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxRQUFrQixFQUFFLFNBQW1CO1FBQ3pHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLHFCQUFxQixDQUFDO2dCQUMvQixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLFlBQUMsR0FBRztvQkFDUCxPQUFPO29CQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ25CLFNBQVMsRUFBRSxDQUFBO2dCQUNmLENBQUM7Z0JBQ0QsSUFBSSxZQUFDLEdBQUc7b0JBQ0osT0FBTztvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNuQixRQUFRLEVBQUUsQ0FBQTtnQkFDZCxDQUFDO2FBQ0osQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBRUQsTUFBTTtJQUNRLGtCQUFZLEdBQTFCLFVBQTJCLEdBQUc7UUFDMUIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDO2dCQUN0QixPQUFPLEVBQUUsR0FBRztnQkFDWixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0I7YUFDakMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBRUQsU0FBUztJQUNLLGNBQVEsR0FBdEIsVUFBdUIsR0FBVztRQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVztZQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCxRQUFRO0lBQ00sMEJBQW9CLEdBQWxDO1FBQ0ksSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO2dCQUNwRSxLQUFLO2dCQUNMLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7YUFDakY7aUJBQU07Z0JBQ0gsTUFBTTtnQkFDTixJQUFJLENBQUMsa0JBQWtCLEdBQUcscUJBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFBO2FBQ3hFO1NBQ0o7YUFBTTtZQUNILE1BQU07WUFDTixJQUFJLENBQUMsa0JBQWtCLEdBQUcscUJBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFBO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0I7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFBO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDcEUsQ0FBQztJQUVELE1BQU07SUFDUSxvQkFBYyxHQUE1QixVQUE2QixHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBYTtRQUN2RSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN0QixHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQTtZQUNqQixNQUFNLENBQUMsWUFBWSxDQUFDLGNBQVEsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBRSxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLENBQUE7WUFDL0csTUFBTSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUE7Z0JBQ2YsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFBO1lBQ2QsQ0FBQyxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUE7U0FDdEQ7YUFBTTtZQUNILGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDM0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFBO1NBQ2I7SUFDTCxDQUFDO0lBRWEsbUJBQWEsR0FBM0I7UUFDSSxPQUFPLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLElBQUkscUJBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxDQUFDO2VBQzlILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRWEsZ0JBQVUsR0FBeEI7UUFDSSxJQUFJLENBQUMsR0FBVyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDckUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxHQUFXLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM5QixPQUFPLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFBO1NBQy9CO1FBQ0QsSUFBSSxJQUFJLEdBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksR0FBVyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDcEMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsT0FBTyxJQUFJLENBQUE7YUFDZDtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUdhLGtCQUFZLEdBQTFCO1FBQUEsaUJBYUM7UUFaRyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzVCLGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDM0IsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxNQUFNLEdBQUcscUJBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFBO1lBQ2hFLElBQUksVUFBUSxHQUFHLE1BQU0sR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUE7WUFDekUsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7Z0JBQ3hCLGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7Z0JBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO29CQUN4QixlQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUMvQixDQUFDLEVBQUUsVUFBUSxDQUFDLENBQUE7WUFDaEIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1NBQ2I7SUFDTCxDQUFDO0lBRWEsa0JBQVksR0FBMUI7UUFBQSxpQkFhQztRQVpHLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDNUIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMzQixJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2QixJQUFJLE1BQU0sR0FBRyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsMkJBQTJCLENBQUE7WUFDakUsSUFBSSxVQUFRLEdBQUcsTUFBTSxHQUFHLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQTtZQUMxRSxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztnQkFDeEIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7b0JBQ3hCLGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7Z0JBQy9CLENBQUMsRUFBRSxVQUFRLENBQUMsQ0FBQTtZQUNoQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7U0FDYjtJQUNMLENBQUM7SUFFYSxzQkFBZ0IsR0FBOUI7UUFDSSxPQUFPLHFCQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQTtJQUMzRCxDQUFDO0lBRWEsa0JBQVksR0FBMUI7UUFDSSxJQUFJLENBQUMsR0FBVyxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDdkUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxHQUFXLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDaEI7UUFDRCxJQUFJLElBQUksR0FBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQTtRQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksR0FBVyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNsQjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQTVQYSxhQUFPLEdBQVcsT0FBTyxDQUFBO0lBQ3pCLGVBQVMsR0FBWSxJQUFJLENBQUE7SUFDekIsYUFBTyxHQUFZLElBQUksQ0FBQTtJQUN2QixlQUFTLEdBQWEsSUFBSSxDQUFBO0lBQzFCLGNBQVEsR0FBUSxJQUFJLENBQUE7SUFDcEIsbUJBQWEsR0FBYSxJQUFJLENBQUE7SUFDOUIsd0JBQWtCLEdBQVcsQ0FBQyxDQUFBO0lBQzlCLGFBQU8sR0FBVyxDQUFDLENBQUE7SUFDbkIsa0JBQVksR0FBWSxLQUFLLENBQUE7SUFFN0Isc0JBQWdCLEdBQVksS0FBSyxDQUFBO0lBQ2pDLGdCQUFVLEdBQVEsSUFBSSxDQUFBO0lBQ3RCLGVBQVMsR0FBUSxJQUFJLENBQUE7SUFDckIsYUFBTyxHQUFVLEVBQUUsQ0FBQTtJQUVuQixlQUFTLEdBQVcsQ0FBQyxDQUFBO0lBQ3JCLGdCQUFVLEdBQVksSUFBSSxDQUFBO0lBQzFCLHFCQUFlLEdBQVksS0FBSyxDQUFBO0lBRWhDLGtCQUFZLEdBQVksS0FBSyxDQUFBO0lBRTdCLG9CQUFjLEdBQVksS0FBSyxDQUFBO0lBQy9CLGtCQUFZLEdBQVksS0FBSyxDQUFBO0lBRTdCLG9CQUFjLEdBQVksS0FBSyxDQUFBO0lBRS9CLG1CQUFhLEdBQWEsSUFBSSxDQUFBO0lBRTlCLGtCQUFZLEdBQVksS0FBSyxDQUFBO0lBZ0w3QixlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUE7SUFldEIsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFBO0lBbUN4QyxZQUFDO0NBL1BELEFBK1BDLElBQUE7a0JBL1BvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpKTWdyIGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCJcclxuaW1wb3J0IFBsYXllckRhdGFNZ3IgZnJvbSBcIi4vUGxheWVyRGF0YU1nclwiXHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vTW9kL0FkTWdyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFd4QXBpIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgdmVyc2lvbjogc3RyaW5nID0gJzEuMC4xJ1xyXG4gICAgcHVibGljIHN0YXRpYyBpc1ZpYnJhdGU6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTXVzaWM6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBwdWJsaWMgc3RhdGljIE9uU2hvd0Z1bjogRnVuY3Rpb24gPSBudWxsXHJcbiAgICBwdWJsaWMgc3RhdGljIHNjb3BlQnRuOiBhbnkgPSBudWxsXHJcbiAgICBwdWJsaWMgc3RhdGljIHNoYXJlQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9udF9zaGFyZV9udW1iZXI6IG51bWJlciA9IDBcclxuICAgIHB1YmxpYyBzdGF0aWMgc2NlbmVJZDogbnVtYmVyID0gMFxyXG4gICAgcHVibGljIHN0YXRpYyBpc0tpbGxCb3NzVUk6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ290T2ZmbGluZUJvdW5lczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbmZpZ0RhdGE6IGFueSA9IG51bGxcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JsQ29uZmlnOiBhbnkgPSBudWxsXHJcbiAgICBwdWJsaWMgc3RhdGljIG5hdkRhdGE6IGFueVtdID0gW11cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNoYXJlVGltZTogbnVtYmVyID0gMFxyXG4gICAgcHVibGljIHN0YXRpYyBmaXJzdFNoYXJlOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgcHVibGljIHN0YXRpYyBoYWRTaG93RnJpZW5kVUk6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbGF1bmNoR2FtZVVJOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZpcnN0U3RhcnRHYW1lOiBib29sZWFuID0gZmFsc2VcclxuICAgIHB1YmxpYyBzdGF0aWMgZmlyc3RTdGFydFVJOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZpcnN0U2hvd1ZpZGVvOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1hZFVJQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbFxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNGcm9tU2tpblVJOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAvL+W+ruS/oeeZu+W9lVxyXG4gICAgcHVibGljIHN0YXRpYyBMb2dpbld4KGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gIT09IGNjLnN5cy5XRUNIQVRfR0FNRSkgcmV0dXJuXHJcbiAgICAgICAgbGV0IGxhdW5jaERhdGEgPSB3aW5kb3dbXCJ3eFwiXS5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgICAgIHdpbmRvd1tcInd4XCJdLmxvZ2luKHtcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMuY29kZTonLCByZXMuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKHJlcy5jb2RlLCBsYXVuY2hEYXRhLnF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/nm5HlkKzlkK/liqhcclxuICAgIC8vVXN1YWxseSBnZXQgZnVuKG9iaikgb2JqLnF1ZXJ5XHJcbiAgICBwdWJsaWMgc3RhdGljIEdldExhdW5jaFBhcmFtKGZ1bjogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgdGhpcy5PblNob3dGdW4gPSBmdW5cclxuICAgICAgICAgICAgZnVuKHRoaXMuR2V0TGF1bmNoUGFzc1ZhcigpKVxyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5vblNob3coKHBhcmEpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY2hlY2sgb25zaG93IEZ1blxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuT25TaG93RnVuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk9uU2hvd0Z1bihwYXJhKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3eCBvbiBzaG93XCIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRMYXVuY2hQYXNzVmFyKCk6IGFueSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbXCJ3eFwiXS5nZXRMYXVuY2hPcHRpb25zU3luYygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBXeE9uSGlkZShmdW46IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLm9uSGlkZShmdW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBXeE9mZkhpZGUoZnVuOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChmdW4gJiYgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub2ZmSGlkZShmdW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBXeE9uU2hvdyhmdW46IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLm9uU2hvdyhmdW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBXeE9mZlNob3coZnVuOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChmdW4gJiYgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0ub2ZmU2hvdyhmdW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6ZyH5YqoXHJcbiAgICBwdWJsaWMgc3RhdGljIERvVmlicmF0ZShpc1Nob3J0OiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiB0aGlzLmlzVmlicmF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTaG9ydCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93W1wid3hcIl0udmlicmF0ZVNob3J0KClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLnZpYnJhdGVMb25nKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+ezu+e7n+aPkOekulxyXG4gICAgcHVibGljIHN0YXRpYyBPcGVuQWxlcnQobXNnOiBzdHJpbmcsIGR1cjogbnVtYmVyID0gMjAwMCwgaWNvbjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbXNnLC8v5o+Q56S65paH5a2XXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyLC8v5pi+56S65pe26ZW/XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwvL+aYr+WQpuaYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAj++8jOm7mOiupO+8mmZhbHNlICBcclxuICAgICAgICAgICAgICAgIGljb246IGljb24gPyAnc3VjY2VzcycgOiAnbm9uZScsIC8v5Zu+5qCH77yM5pSv5oyBXCJzdWNjZXNzXCLjgIFcImxvYWRpbmdcIiAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6Lez6L2sXHJcbiAgICBwdWJsaWMgc3RhdGljIE5hdmlnYXRlQXBwKGFwcGlkOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgdGl0bGU6IHN0cmluZywgY2FuY2VsQ0I6IEZ1bmN0aW9uLCBzdWNjZXNzQ0I6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcGlkLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5omT5byA5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NCKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaJk+W8gOWksei0pVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDlpLHotKUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENCKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/pooTop4jlm77niYdcclxuICAgIHB1YmxpYyBzdGF0aWMgcHJlVmlld0ltYWdlKHVybCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDogdXJsLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXHJcbiAgICAgICAgICAgICAgICB1cmxzOiBbdXJsXSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6Zi/5ouJ5LiB57uf6K6h5LqL5Lu2XHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZEV2ZW50KHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKVxyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5hbGRTZW5kRXZlbnQoc3RyKVxyXG4gICAgfVxyXG5cclxuICAgIC8v6K6h566X5YiG5Lqr5qyh5pWwXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbGN1bGF0ZVNoYXJlTnVtYmVyKCkge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdERhdGUnKSkge1xyXG4gICAgICAgICAgICBpZiAobmV3IERhdGUoKS5nZXREYXRlKCkgPT0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3REYXRlJykpKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WQjOS4gOWkqVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm9udF9zaGFyZV9udW1iZXIgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZnJvbnRfc2hhcmVfbnVtYmVyJykpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+aWsOeahOS4gOWkqVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm9udF9zaGFyZV9udW1iZXIgPSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfc2hhcmVfbnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+aWsOeahOS4gOWkqVxyXG4gICAgICAgICAgICB0aGlzLmZyb250X3NoYXJlX251bWJlciA9IEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9zaGFyZV9udW1iZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmZyb250X3NoYXJlX251bWJlcikgdGhpcy5mcm9udF9zaGFyZV9udW1iZXIgPSAwXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuZnJvbnRfc2hhcmVfbnVtYmVyOicsIHRoaXMuZnJvbnRfc2hhcmVfbnVtYmVyKVxyXG4gICAgfVxyXG5cclxuICAgIC8v6K+v6Kem5o6n5Yi2XHJcbiAgICBwdWJsaWMgc3RhdGljIGZpeEJ0blRvdWNoUG9zKGJ0biwgc3RhcnRQb3NZLCBlbmRQb3NZLCB0YXJnZXQsIGNiPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQmFubmVyKCkpIHtcclxuICAgICAgICAgICAgYnRuLnkgPSBzdGFydFBvc1lcclxuICAgICAgICAgICAgdGFyZ2V0LnNjaGVkdWxlT25jZSgoKSA9PiB7IEFkTWdyLmluc3RhbmNlLnNob3dCYW5uZXIoKSB9LCBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfYmFubmVyX2FwcGVhciAvIDEwMDApXHJcbiAgICAgICAgICAgIHRhcmdldC5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnRuLnkgPSBlbmRQb3NZXHJcbiAgICAgICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgICAgIH0sIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9idXR0b25fdXAgLyAxMDAwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLnNob3dCYW5uZXIoKVxyXG4gICAgICAgICAgICBjYiAmJiBjYigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNWYWxpZEJhbm5lcigpIHtcclxuICAgICAgICByZXR1cm4gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUgPj0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3Bhc3NfZ2F0ZSAmJiBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuaXNfYWxsb3dfYXJlYSA9PSAxXHJcbiAgICAgICAgICAgICYmIHRoaXMuYWxsb3dTY2VuZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhbGxvd1NjZW5lKCkge1xyXG4gICAgICAgIGxldCBzOiBzdHJpbmcgPSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfd3VjaHVfc2NlbmUudG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChzLnNlYXJjaCgnfCcpID09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBzSW50OiBudW1iZXIgPSBwYXJzZUludChzKVxyXG4gICAgICAgICAgICByZXR1cm4gc0ludCA9PSBXeEFwaS5zY2VuZUlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzQXJyOiBzdHJpbmdbXSA9IHMuc3BsaXQoJ3wnKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc0ludDogbnVtYmVyID0gcGFyc2VJbnQoc0FycltpXSlcclxuICAgICAgICAgICAgaWYgKHNJbnQgPT0gV3hBcGkuc2NlbmVJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJhbm5lclRPMjogbnVtYmVyID0gLTFcclxuICAgIHB1YmxpYyBzdGF0aWMgYmFubmVyV3VDaHUyKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmJhbm5lclRPMilcclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICBpZiAoV3hBcGkuaXNWYWxpZEJhbm5lcigpKSB7XHJcbiAgICAgICAgICAgIGxldCB1cFRpbWUgPSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfZXhwb3J0X2Jhbm5lcl9hcHBlYXJcclxuICAgICAgICAgICAgbGV0IGRvd25UaW1lID0gdXBUaW1lICsgSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X2V4cG9ydF9iYW5uZXJfaGlkZVxyXG4gICAgICAgICAgICB0aGlzLmJhbm5lclRPMiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2Uuc2hvd0Jhbm5lcigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lclRPMiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgICAgICAgICAgfSwgZG93blRpbWUpXHJcbiAgICAgICAgICAgIH0sIHVwVGltZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGJhbm5lclRPMTogbnVtYmVyID0gLTFcclxuICAgIHB1YmxpYyBzdGF0aWMgYmFubmVyV3VDaHUxKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmJhbm5lclRPMSlcclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICBpZiAoV3hBcGkuaXNWYWxpZEJhbm5lcigpKSB7XHJcbiAgICAgICAgICAgIGxldCB1cFRpbWUgPSBKSk1nci5pbnN0YW5jZS5leHBvcnRDZmcuZnJvbnRfYmFva3Vhbl9iYW5uZXJfYXBwZWFyXHJcbiAgICAgICAgICAgIGxldCBkb3duVGltZSA9IHVwVGltZSArIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9iYW9rdWFuX2Jhbm5lcl9oaWRlXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyVE8xID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyVE8xID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWRNZ3IuaW5zdGFuY2UuaGlkZUJhbm5lcigpXHJcbiAgICAgICAgICAgICAgICB9LCBkb3duVGltZSlcclxuICAgICAgICAgICAgfSwgdXBUaW1lKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldElzRXhwb3J0VmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpKTWdyLmluc3RhbmNlLmV4cG9ydENmZy5mcm9udF9hbGxfZXhwb3J0X3N3aXRjaFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3BsaXRTZWN0aW9uKCk6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgczogc3RyaW5nID0gSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X3dhdGVyX3NlY3Rpb24udG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChzLnNlYXJjaCgnfCcpID09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBzSW50OiBudW1iZXIgPSBwYXJzZUludChzKVxyXG4gICAgICAgICAgICByZXR1cm4gW3NJbnRdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzQXJyOiBzdHJpbmdbXSA9IHMuc3BsaXQoJ3wnKVxyXG4gICAgICAgIGxldCBpQXJyOiBudW1iZXJbXSA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzSW50OiBudW1iZXIgPSBwYXJzZUludChzQXJyW2ldKVxyXG4gICAgICAgICAgICBpQXJyLnB1c2goc0ludClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlBcnJcclxuICAgIH1cclxuXHJcbn0iXX0=