"use strict";
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
var ExportUtils_1 = require("../../ExportLibs/ExportUtils");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var TimeCountMgr_1 = require("../Libs/TimeCountMgr");
var WxApi_1 = require("../Libs/WxApi");
var AdMgr_1 = require("../Mod/AdMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FinishUI = /** @class */ (function (_super) {
    __extends(FinishUI, _super);
    function FinishUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GetPowerUI = null;
        _this.GetTipsUI = null;
        _this.powerNum = null;
        _this.powerTime = null;
        _this.tipsNum = null;
        _this.gradeNum = null;
        _this.nextBtn = null;
        return _this;
    }
    FinishUI.prototype.onLoad = function () { };
    FinishUI.prototype.start = function () {
        if (PlayerDataMgr_1.default.getPlayerData().grade <= 10)
            WxApi_1.default.aldEvent('第' + PlayerDataMgr_1.default.getPlayerData().grade + '关通关成功');
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_FINISHGAMEUI, { posY: 0 });
        AdMgr_1.default.instance.hideBanner();
        WxApi_1.default.fixBtnTouchPos(this.nextBtn, -250, 0, this);
    };
    FinishUI.prototype.backCB = function () {
        PlayerDataMgr_1.default.getPlayerData().grade++;
        if (PlayerDataMgr_1.default.getPlayerData().grade > 20)
            PlayerDataMgr_1.default.getPlayerData().grade = 1;
        PlayerDataMgr_1.default.setPlayerData();
        ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
            AdMgr_1.default.instance.hideBanner();
            ExportUtils_1.default.instance.closeAllExportUI();
            cc.director.loadScene('StartScene');
        });
    };
    FinishUI.prototype.nextCB = function () {
        if (PlayerDataMgr_1.default.getPlayerData().power > 0) {
            PlayerDataMgr_1.default.getPlayerData().grade++;
            if (PlayerDataMgr_1.default.getPlayerData().grade > 20)
                PlayerDataMgr_1.default.getPlayerData().grade = 1;
            PlayerDataMgr_1.default.changePower(-1);
            ExportUtils_1.default.instance.showExportUI(ExportUtils_1.ExportDir.VIEW_RECOMMENDUI, null, function () {
                AdMgr_1.default.instance.hideBanner();
                ExportUtils_1.default.instance.closeAllExportUI();
                cc.director.loadScene('GameScene');
            });
        }
        else {
            this.getPowerBtnCB();
        }
    };
    FinishUI.prototype.getPowerBtnCB = function () {
        this.GetPowerUI.active = true;
    };
    FinishUI.prototype.getTipsBtnCB = function () {
        this.GetTipsUI.active = true;
    };
    FinishUI.prototype.calculatePowerTime = function () {
        var t = TimeCountMgr_1.default.Share.tCount;
        var m = Math.floor(t / 60);
        var s = Math.floor(t - m * 60);
        this.powerTime.string = m.toString() + ':' + s.toString();
        this.powerNum.string = PlayerDataMgr_1.default.getPlayerData().power.toString();
        this.powerTime.node.active = PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax;
    };
    FinishUI.prototype.update = function (dt) {
        this.calculatePowerTime();
        this.gradeNum.string = PlayerDataMgr_1.default.getPlayerData().grade.toString();
        this.tipsNum.string = PlayerDataMgr_1.default.getPlayerData().tipsNum.toString();
    };
    __decorate([
        property(cc.Node)
    ], FinishUI.prototype, "GetPowerUI", void 0);
    __decorate([
        property(cc.Node)
    ], FinishUI.prototype, "GetTipsUI", void 0);
    __decorate([
        property(cc.Label)
    ], FinishUI.prototype, "powerNum", void 0);
    __decorate([
        property(cc.Label)
    ], FinishUI.prototype, "powerTime", void 0);
    __decorate([
        property(cc.Label)
    ], FinishUI.prototype, "tipsNum", void 0);
    __decorate([
        property(cc.Label)
    ], FinishUI.prototype, "gradeNum", void 0);
    __decorate([
        property(cc.Node)
    ], FinishUI.prototype, "nextBtn", void 0);
    FinishUI = __decorate([
        ccclass
    ], FinishUI);
    return FinishUI;
}(cc.Component));
exports.default = FinishUI;

cc._RF.pop();