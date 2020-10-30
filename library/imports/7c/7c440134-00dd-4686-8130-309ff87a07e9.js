"use strict";
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
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var TimeCountMgr_1 = require("../Libs/TimeCountMgr");
var WxApi_1 = require("../Libs/WxApi");
var AdMgr_1 = require("../Mod/AdMgr");
var ShareMgr_1 = require("../Mod/ShareMgr");
var Utility_1 = require("../Mod/Utility");
var MadUI_1 = require("./MadUI");
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
        _this.nameNode = null;
        _this.leftLvNum = null;
        _this.drawBtn = null;
        _this.moreGameBtn = null;
        _this.navNode = null;
        _this.madCrl = null;
        return _this;
    }
    StartUI.prototype.onLoad = function () { };
    StartUI.prototype.start = function () {
        this.initFishData();
        if (!WxApi_1.default.isFromSkinUI) {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FRIENDGAME, null, function () {
                if (!WxApi_1.default.firstStartUI) {
                    WxApi_1.default.firstStartUI = true;
                    ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                        AdMgr_1.default.instance.showBanner();
                    });
                }
                else {
                    AdMgr_1.default.instance.showBanner();
                }
            });
        }
        else {
            AdMgr_1.default.instance.showBanner();
            WxApi_1.default.isFromSkinUI = false;
        }
        this.chushihuaNav();
        for (var i = 0; i < this.navNode.childrenCount; i++) {
            Utility_1.default.rotateLoop(this.navNode.children[i], 0.5, 8);
        }
        this.schedule(this.chushihuaNav, 3);
        this.navNode.active = WxApi_1.default.getIsExportValid();
        this.drawBtn.active = WxApi_1.default.getIsExportValid();
        this.moreGameBtn.active = WxApi_1.default.getIsExportValid();
    };
    StartUI.prototype.initFishData = function () {
        this.fishLvNum.string = PlayerDataMgr_1.default.getPlayerLv().toString();
        for (var i = 0; i < this.nameNode.childrenCount; i++) {
            this.nameNode.children[i].active = i + 1 == PlayerDataMgr_1.default.getPlayerLv();
        }
        if (PlayerDataMgr_1.default.getLeftLv() == 0) {
            this.leftLvNum.node.parent.active = false;
        }
        else {
            this.leftLvNum.string = PlayerDataMgr_1.default.getLeftLv().toString();
        }
    };
    StartUI.prototype.startGameCB = function () {
        var _this = this;
        if (PlayerDataMgr_1.default.getPlayerData().power > 0) {
            PlayerDataMgr_1.default.changePower(-1);
            WxApi_1.default.aldEvent('点击开始游戏按钮人数');
            ExportUtils_1.default.instance.closeAllExportUI();
            var cb = function () {
                var cb1 = function () {
                    ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () {
                        cc.director.loadScene('GameScene');
                    });
                };
                var curG = PlayerDataMgr_1.default.getPlayerData().grade;
                var gGap = (curG - ExportUtils_1.default.instance.exportCfg.front_water_start_level) % ExportUtils_1.default.instance.exportCfg.front_water_level_interval == 0 &&
                    curG >= ExportUtils_1.default.instance.exportCfg.front_water_start_level;
                if (gGap && !AdMgr_1.default.instance.isBannerError && WxApi_1.default.isValidBanner()) {
                    _this.madCrl.showUI(cb1);
                }
                else {
                    cc.director.loadScene('GameScene');
                }
            };
            if (WxApi_1.default.isValidBanner() && ExportUtils_1.default.instance.exportCfg.front_start_game_switch && !AdMgr_1.default.instance.videoIsError && !WxApi_1.default.firstShowVideo) {
                WxApi_1.default.firstShowVideo = true;
                AdMgr_1.default.instance.videoCloseCallback = cb;
                AdMgr_1.default.instance.showVideo(function () { });
            }
            else {
                cb();
            }
        }
        else {
            this.getPowerBtnCB();
        }
    };
    StartUI.prototype.getPower = function () {
        var cb = function () {
            PlayerDataMgr_1.default.changePower(3);
        };
        ShareMgr_1.default.instance.shareGame(cb);
    };
    StartUI.prototype.getFishBtnCB = function () {
        this.GetFishUI.active = true;
    };
    StartUI.prototype.getPowerBtnCB = function () {
        this.GetPowerUI.active = true;
    };
    StartUI.prototype.getTipsBtnCB = function () {
        this.GetTipsUI.active = true;
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
        this.gradeNum.string = PlayerDataMgr_1.default.getPlayerData().grade.toString();
        this.tipsNum.string = PlayerDataMgr_1.default.getPlayerData().tipsNum.toString();
    };
    StartUI.prototype.moreGameBtnCB = function () {
        WxApi_1.default.aldEvent('点我有惊喜按钮点击');
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FULLGAMEUI, null, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FRIENDGAME, null, function () {
                    AdMgr_1.default.instance.showBanner();
                });
            });
        });
    };
    StartUI.prototype.drawBtnCB = function () {
        WxApi_1.default.aldEvent('左边抽屉导出按钮点击');
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_DRAWUI);
    };
    StartUI.prototype.chushihuaNav = function () {
        var _this = this;
        var arr = [];
        for (var i = 0; i < ExportUtils_1.default.instance.navigateAppArr.length; i++) {
            arr.push(i);
        }
        arr = Utility_1.default.shuffleArr(arr);
        arr = arr.splice(0, 4);
        var _loop_1 = function (i) {
            var item = this_1.navNode.children[i];
            var icon = item.getChildByName('icon').getComponent(cc.Sprite);
            var name = item.getChildByName('name').getComponent(cc.Label);
            name.string = ExportUtils_1.default.instance.getSubtitle(arr[i]);
            ExportUtils_1.default.instance.loadImgByUrl(icon, ExportUtils_1.default.instance.navigateAppArr[arr[i]].icon);
            item.off(cc.Node.EventType.TOUCH_END);
            item.on(cc.Node.EventType.TOUCH_END, function (event) { _this.tiaozhuanCB(event, arr[i]); }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.navNode.childrenCount; i++) {
            _loop_1(i);
        }
    };
    StartUI.prototype.tiaozhuanCB = function (event, id) {
        console.log('click id:', id);
        WxApi_1.default.aldEvent('首页导出位—总点击数');
        ExportUtils_1.default.instance.NavigateApp(id, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                AdMgr_1.default.instance.showBanner();
            });
        }, function () {
            WxApi_1.default.aldEvent('首页导出位—总成功跳转数');
        });
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
        property(cc.Node)
    ], StartUI.prototype, "nameNode", void 0);
    __decorate([
        property(cc.Label)
    ], StartUI.prototype, "leftLvNum", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "drawBtn", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "moreGameBtn", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "navNode", void 0);
    __decorate([
        property(MadUI_1.default)
    ], StartUI.prototype, "madCrl", void 0);
    StartUI = __decorate([
        ccclass
    ], StartUI);
    return StartUI;
}(cc.Component));
exports.default = StartUI;

cc._RF.pop();