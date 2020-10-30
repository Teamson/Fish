"use strict";
cc._RF.push(module, 'a25f1j+vOhC2Ztq68OT4qOh', 'DefeatUI');
// Scripts/UI/DefeatUI.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DefeatUI = /** @class */ (function (_super) {
    __extends(DefeatUI, _super);
    function DefeatUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GetPowerUI = null;
        _this.GetTipsUI = null;
        _this.powerNum = null;
        _this.powerTime = null;
        _this.tipsNum = null;
        _this.gradeNum = null;
        _this.rootNode = null;
        _this.closeBtn = null;
        _this.reviveTime = null;
        _this.timeNum = 5;
        return _this;
    }
    // onLoad () {}
    DefeatUI.prototype.start = function () {
        if (PlayerDataMgr_1.default.getPlayerData().grade <= 10)
            WxApi_1.default.aldEvent('第' + PlayerDataMgr_1.default.getPlayerData().grade + '关通关失败');
        Utility_1.default.rootAction(this.rootNode, true, 0.1);
        this.schedule(this.countTime, 1, 4);
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FINISHGAMEUI, { posY: 200, one: true });
        AdMgr_1.default.instance.hideBanner();
        WxApi_1.default.fixBtnTouchPos(this.closeBtn, -550, -350, this);
    };
    DefeatUI.prototype.countTime = function () {
        this.timeNum--;
        this.reviveTime.string = this.timeNum.toString();
        if (this.timeNum <= 0) {
            //this.closeBtnCB()
        }
    };
    DefeatUI.prototype.reviveBtnCB = function () {
        var cb = function () {
            PlayerDataMgr_1.default.changePower(2);
            AdMgr_1.default.instance.hideBanner();
            ExportUtils_1.default.instance.closeAllExportUI();
            cc.director.loadScene('GameScene');
        };
        ShareMgr_1.default.instance.shareGame(cb);
    };
    DefeatUI.prototype.closeBtnCB = function () {
        Utility_1.default.rootAction(this.rootNode, false, 0.1, function () {
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                AdMgr_1.default.instance.hideBanner();
                ExportUtils_1.default.instance.closeAllExportUI();
                cc.director.loadScene('StartScene');
            });
        });
    };
    DefeatUI.prototype.getPowerBtnCB = function () {
        this.GetPowerUI.active = true;
    };
    DefeatUI.prototype.getTipsBtnCB = function () {
        this.GetTipsUI.active = true;
    };
    DefeatUI.prototype.calculatePowerTime = function () {
        var t = TimeCountMgr_1.default.Share.tCount;
        var m = Math.floor(t / 60);
        var s = Math.floor(t - m * 60);
        this.powerTime.string = m.toString() + ':' + s.toString();
        this.powerNum.string = PlayerDataMgr_1.default.getPlayerData().power.toString();
        this.powerTime.node.active = PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax;
    };
    DefeatUI.prototype.update = function (dt) {
        this.calculatePowerTime();
        this.gradeNum.string = PlayerDataMgr_1.default.getPlayerData().grade.toString();
        this.tipsNum.string = PlayerDataMgr_1.default.getPlayerData().tipsNum.toString();
    };
    __decorate([
        property(cc.Node)
    ], DefeatUI.prototype, "GetPowerUI", void 0);
    __decorate([
        property(cc.Node)
    ], DefeatUI.prototype, "GetTipsUI", void 0);
    __decorate([
        property(cc.Label)
    ], DefeatUI.prototype, "powerNum", void 0);
    __decorate([
        property(cc.Label)
    ], DefeatUI.prototype, "powerTime", void 0);
    __decorate([
        property(cc.Label)
    ], DefeatUI.prototype, "tipsNum", void 0);
    __decorate([
        property(cc.Label)
    ], DefeatUI.prototype, "gradeNum", void 0);
    __decorate([
        property(cc.Node)
    ], DefeatUI.prototype, "rootNode", void 0);
    __decorate([
        property(cc.Node)
    ], DefeatUI.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.Label)
    ], DefeatUI.prototype, "reviveTime", void 0);
    DefeatUI = __decorate([
        ccclass
    ], DefeatUI);
    return DefeatUI;
}(cc.Component));
exports.default = DefeatUI;

cc._RF.pop();