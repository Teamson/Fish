"use strict";
cc._RF.push(module, '76fb7AiQUxPIqPSsg68ljvt', 'GameUI');
// Scripts/UI/GameUI.ts

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
var LevelBase_1 = require("../Crl/Level/LevelBase");
var PlayerAni_1 = require("../Crl/PlayerAni");
var PlayerDataMgr_1 = require("../Libs/PlayerDataMgr");
var TimeCountMgr_1 = require("../Libs/TimeCountMgr");
var WxApi_1 = require("../Libs/WxApi");
var AdMgr_1 = require("../Mod/AdMgr");
var ShareMgr_1 = require("../Mod/ShareMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GetPowerUI = null;
        _this.powerNum = null;
        _this.powerTime = null;
        _this.gradeNum = null;
        _this.tipsNum = null;
        _this.NextPlayerAni = null;
        _this.lvNum = null;
        _this.lvBar = null;
        _this.lvNode = null;
        return _this;
    }
    GameUI.prototype.onLoad = function () { };
    GameUI.prototype.start = function () {
        this.lvNode.active = PlayerDataMgr_1.default.getPlayerLv() < 5;
        this.lvNum.string = PlayerDataMgr_1.default.getPlayerLv().toString();
        this.lvBar.progress = PlayerDataMgr_1.default.getNextLvPer();
        var nextLv = PlayerDataMgr_1.default.getPlayerLv();
        this.NextPlayerAni.changeSkin(nextLv <= 4 ? nextLv : 4);
        AdMgr_1.default.instance.hideBanner();
        if (WxApi_1.default.isValidBanner() && ExportUtils_1.default.instance.exportCfg.front_main_banner_switch) {
            AdMgr_1.default.instance.showBanner();
        }
    };
    GameUI.prototype.getPowerBtnCB = function () {
        if (LevelBase_1.default.Share.isGameOver)
            return;
        this.GetPowerUI.active = true;
    };
    GameUI.prototype.skipBtnCB = function () {
        if (LevelBase_1.default.Share.isGameOver)
            return;
        var cb = function () {
            LevelBase_1.default.Share.winCB();
        };
        ShareMgr_1.default.instance.shareGame(cb);
    };
    GameUI.prototype.tipsBtnCB = function () {
    };
    GameUI.prototype.calculatePowerTime = function () {
        var t = TimeCountMgr_1.default.Share.tCount;
        var m = Math.floor(t / 60);
        var s = Math.floor(t - m * 60);
        this.powerTime.string = m.toString() + ':' + s.toString();
        this.powerNum.string = PlayerDataMgr_1.default.getPlayerData().power.toString();
        this.powerTime.node.active = PlayerDataMgr_1.default.getPlayerData().power < PlayerDataMgr_1.default.powerMax;
    };
    GameUI.prototype.update = function (dt) {
        this.calculatePowerTime();
        this.gradeNum.string = PlayerDataMgr_1.default.getPlayerData().grade.toString();
        this.tipsNum.string = PlayerDataMgr_1.default.getPlayerData().tipsNum.toString();
    };
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "GetPowerUI", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "powerNum", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "powerTime", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "gradeNum", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "tipsNum", void 0);
    __decorate([
        property(PlayerAni_1.default)
    ], GameUI.prototype, "NextPlayerAni", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "lvNum", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameUI.prototype, "lvBar", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "lvNode", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

cc._RF.pop();