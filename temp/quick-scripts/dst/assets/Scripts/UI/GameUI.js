
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBaUQ7QUFDakQsb0RBQStDO0FBQy9DLDhDQUF5QztBQUN6Qyx1REFBa0Q7QUFDbEQscURBQWdEO0FBQ2hELHVDQUFrQztBQUNsQyxzQ0FBaUM7QUFDakMsNENBQXVDO0FBRWpDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFEaEQ7UUFBQSxxRUF1RUM7UUFuRUcsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFHMUIsY0FBUSxHQUFhLElBQUksQ0FBQTtRQUV6QixlQUFTLEdBQWEsSUFBSSxDQUFBO1FBRzFCLGNBQVEsR0FBYSxJQUFJLENBQUE7UUFFekIsYUFBTyxHQUFhLElBQUksQ0FBQTtRQUd4QixtQkFBYSxHQUFjLElBQUksQ0FBQTtRQUUvQixXQUFLLEdBQWEsSUFBSSxDQUFBO1FBRXRCLFdBQUssR0FBbUIsSUFBSSxDQUFBO1FBRTVCLFlBQU0sR0FBWSxJQUFJLENBQUE7O0lBZ0QxQixDQUFDO0lBOUNHLHVCQUFNLEdBQU4sY0FBVyxDQUFDO0lBRVosc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsdUJBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNsRCxJQUFJLE1BQU0sR0FBRyx1QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxD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c0VDLENBdEVtQyxFQUFFLENBQUMsU0FBUyxHQXNFL0M7a0JBdEVvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpKTWdyIGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4uL0NybC9MZXZlbC9MZXZlbEJhc2VcIjtcclxuaW1wb3J0IFBsYXllckFuaSBmcm9tIFwiLi4vQ3JsL1BsYXllckFuaVwiO1xyXG5pbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBUaW1lQ291bnRNZ3IgZnJvbSBcIi4uL0xpYnMvVGltZUNvdW50TWdyXCI7XHJcbmltcG9ydCBXeEFwaSBmcm9tIFwiLi4vTGlicy9XeEFwaVwiO1xyXG5pbXBvcnQgQWRNZ3IgZnJvbSBcIi4uL01vZC9BZE1nclwiO1xyXG5pbXBvcnQgU2hhcmVNZ3IgZnJvbSBcIi4uL01vZC9TaGFyZU1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHZXRQb3dlclVJOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyTnVtOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyVGltZTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ3JhZGVOdW06IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGlwc051bTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXllckFuaSlcclxuICAgIE5leHRQbGF5ZXJBbmk6IFBsYXllckFuaSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGx2TnVtOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIGx2QmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbHZOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpIHsgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubHZOb2RlLmFjdGl2ZSA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyTHYoKSA8IDVcclxuICAgICAgICB0aGlzLmx2TnVtLnN0cmluZyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyTHYoKS50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5sdkJhci5wcm9ncmVzcyA9IFBsYXllckRhdGFNZ3IuZ2V0TmV4dEx2UGVyKClcclxuICAgICAgICBsZXQgbmV4dEx2ID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJMdigpXHJcbiAgICAgICAgdGhpcy5OZXh0UGxheWVyQW5pLmNoYW5nZVNraW4obmV4dEx2IDw9IDQgPyBuZXh0THYgOiA0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgIGlmIChXeEFwaS5pc1ZhbGlkQmFubmVyKCkgJiYgSkpNZ3IuaW5zdGFuY2UuZXhwb3J0Q2ZnLmZyb250X21haW5fYmFubmVyX3N3aXRjaCkge1xyXG4gICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5zaG93QmFubmVyKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG93ZXJCdG5DQigpIHtcclxuICAgICAgICBpZiAoTGV2ZWxCYXNlLlNoYXJlLmlzR2FtZU92ZXIpIHJldHVyblxyXG4gICAgICAgIHRoaXMuR2V0UG93ZXJVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEJ0bkNCKCkge1xyXG4gICAgICAgIGlmIChMZXZlbEJhc2UuU2hhcmUuaXNHYW1lT3ZlcikgcmV0dXJuXHJcbiAgICAgICAgbGV0IGNiID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBMZXZlbEJhc2UuU2hhcmUud2luQ0IoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBTaGFyZU1nci5pbnN0YW5jZS5zaGFyZUdhbWUoY2IpXHJcbiAgICB9XHJcblxyXG4gICAgdGlwc0J0bkNCKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVQb3dlclRpbWUoKSB7XHJcbiAgICAgICAgbGV0IHQgPSBUaW1lQ291bnRNZ3IuU2hhcmUudENvdW50XHJcbiAgICAgICAgbGV0IG0gPSBNYXRoLmZsb29yKHQgLyA2MClcclxuICAgICAgICBsZXQgcyA9IE1hdGguZmxvb3IodCAtIG0gKiA2MClcclxuICAgICAgICB0aGlzLnBvd2VyVGltZS5zdHJpbmcgPSBtLnRvU3RyaW5nKCkgKyAnOicgKyBzLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLnBvd2VyTnVtLnN0cmluZyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLnBvd2VyVGltZS5ub2RlLmFjdGl2ZSA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyIDwgUGxheWVyRGF0YU1nci5wb3dlck1heFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUG93ZXJUaW1lKClcclxuICAgICAgICB0aGlzLmdyYWRlTnVtLnN0cmluZyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLnRpcHNOdW0uc3RyaW5nID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkudGlwc051bS50b1N0cmluZygpXHJcbiAgICB9XHJcbn1cclxuIl19