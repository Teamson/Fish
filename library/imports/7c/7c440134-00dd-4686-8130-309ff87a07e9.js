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