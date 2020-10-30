"use strict";
cc._RF.push(module, 'f9f8dQB2vlLnJ9itYsKp7L5', 'MadUI');
// Scripts/UI/MadUI.ts

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
var WxApi_1 = require("../Libs/WxApi");
var AdMgr_1 = require("../Mod/AdMgr");
var Utility_1 = require("../Mod/Utility");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MadUI = /** @class */ (function (_super) {
    __extends(MadUI, _super);
    function MadUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.pBar = null;
        _this.lightPt = null;
        _this.gun = null;
        _this.hadShowBanner = false;
        _this.hadClick = false;
        _this.closeCallback = null;
        _this.wuchuType = 1;
        _this.sectionNum = 0;
        _this.ptIsPlaying = false;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    MadUI.prototype.start = function () {
    };
    MadUI.prototype.onEnable = function () {
    };
    MadUI.prototype.onDisable = function () {
        this.closeCallback && this.closeCallback();
        WxApi_1.default.isKillBossUI = false;
    };
    MadUI.prototype.showUI = function (closeCallback) {
        var _this = this;
        AdMgr_1.default.instance.hideBanner();
        this.closeCallback = closeCallback;
        this.node.active = true;
        this.closeBtn.active = false;
        this.sectionNum = Utility_1.default.getRandomItemInArr(WxApi_1.default.splitSection());
        var randNum = Math.random() * 100;
        if (randNum <= ExportUtils_1.default.instance.exportCfg.front_water_type_chance) {
            this.wuchuType = 1;
        }
        else {
            this.wuchuType = 2;
        }
        this.schedule(this.jianshaoBar);
        WxApi_1.default.isKillBossUI = true;
        var self = this;
        WxApi_1.default.WxOffHide(WxApi_1.default.madUICallback);
        WxApi_1.default.madUICallback = function () {
            if (WxApi_1.default.isKillBossUI) {
                self.unschedule(_this.jianshaoBar);
                self.node.active = false;
                var num = Math.floor(Math.random() * 300 + 200);
                PlayerDataMgr_1.default.changeCoin(num);
                WxApi_1.default.OpenAlert('成功领取' + num + '金币');
            }
        };
        WxApi_1.default.WxOnHide(WxApi_1.default.madUICallback);
    };
    MadUI.prototype.closeCB = function () {
        this.node.active = false;
    };
    MadUI.prototype.closeBtnCB = function () {
        this.node.active = false;
    };
    MadUI.prototype.clickCB = function () {
        var _this = this;
        if (!this.hadClick) {
            this.hadClick = true;
            this.scheduleOnce(this.closeCB, ExportUtils_1.default.instance.exportCfg.front_water_hide / 1000);
            Utility_1.default.delayActive(this.closeBtn, ExportUtils_1.default.instance.exportCfg.front_close_appear / 1000, this);
        }
        if (!this.hadShowBanner) {
            if (this.wuchuType == 1) {
                this.hadShowBanner = true;
                this.scheduleOnce(function () {
                    _this.unschedule(_this.jianshaoBar);
                    AdMgr_1.default.instance.showBanner();
                }, 1);
            }
            else {
                if (this.pBar.progress * 100 >= this.sectionNum) {
                    this.hadShowBanner = true;
                    this.unschedule(this.jianshaoBar);
                    AdMgr_1.default.instance.showBanner();
                }
            }
        }
        this.pBar.progress += 0.1;
        if (this.pBar.progress > 0.7) {
            this.pBar.progress = 0.7;
        }
        if (!this.ptIsPlaying) {
            this.gun.angle = -30;
            this.gun.stopAllActions();
            this.gun.runAction(cc.rotateTo(0.2, 0));
            this.ptIsPlaying = true;
            this.lightPt.active = true;
            this.scheduleOnce(function () {
                _this.lightPt.active = false;
                _this.ptIsPlaying = false;
            }, 0.1);
        }
    };
    MadUI.prototype.jianshaoBar = function () {
        this.pBar.progress -= 0.003;
        if (this.pBar.progress < 0) {
            this.pBar.progress = 0;
        }
    };
    __decorate([
        property(cc.Node)
    ], MadUI.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], MadUI.prototype, "pBar", void 0);
    __decorate([
        property(cc.Node)
    ], MadUI.prototype, "lightPt", void 0);
    __decorate([
        property(cc.Node)
    ], MadUI.prototype, "gun", void 0);
    MadUI = __decorate([
        ccclass
    ], MadUI);
    return MadUI;
}(cc.Component));
exports.default = MadUI;

cc._RF.pop();