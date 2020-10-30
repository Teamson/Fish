
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEZpbmlzaFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFnRTtBQUNoRSx1REFBa0Q7QUFDbEQscURBQWdEO0FBQ2hELHVDQUFrQztBQUNsQyxzQ0FBaUM7QUFFM0IsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQW1GQztRQS9FRyxnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLGNBQVEsR0FBYSxJQUFJLENBQUE7UUFFekIsZUFBUyxHQUFhLElBQUksQ0FBQTtRQUcxQixhQUFPLEdBQWEsSUFBSSxDQUFBO1FBR3hCLGNBQVEsR0FBYSxJQUFJLENBQUE7UUFHekIsYUFBTyxHQUFZLElBQUksQ0FBQTs7SUErRDNCLENBQUM7SUE3REcseUJBQU0sR0FBTixjQUFXLENBQUM7SUFFWix3QkFBSyxHQUFMO1FBRUksSUFBSSx1QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3pDLGVBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFBO1FBRXZFLHFCQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyx1QkFBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDckUsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMzQixlQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksdUJB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QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUMxRSxDQUFDO0lBOUVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFuQk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtGNUI7SUFBRCxlQUFDO0NBbEZELEFBa0ZDLENBbEZxQyxFQUFFLENBQUMsU0FBUyxHQWtGakQ7a0JBbEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpKTWdyLCB7IEV4cG9ydERpciB9IGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IFRpbWVDb3VudE1nciBmcm9tIFwiLi4vTGlicy9UaW1lQ291bnRNZ3JcIjtcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vTW9kL0FkTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluaXNoVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2V0UG93ZXJVSTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2V0VGlwc1VJOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyTnVtOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyVGltZTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGlwc051bTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ3JhZGVOdW06IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmV4dEJ0bjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7IH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlIDw9IDEwKVxyXG4gICAgICAgICAgICBXeEFwaS5hbGRFdmVudCgn56ysJyArIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlICsgJ+WFs+mAmuWFs+aIkOWKnycpXHJcblxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19GSU5JU0hHQU1FVUksIHsgcG9zWTogMCB9KVxyXG4gICAgICAgIEFkTWdyLmluc3RhbmNlLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgIFd4QXBpLmZpeEJ0blRvdWNoUG9zKHRoaXMubmV4dEJ0biwgLTI1MCwgMCwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBiYWNrQ0IoKSB7XHJcbiAgICAgICAgUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUrK1xyXG4gICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA+IDIwKSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA9IDFcclxuICAgICAgICBQbGF5ZXJEYXRhTWdyLnNldFBsYXllckRhdGEoKVxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19SRUNPTU1FTkRVSSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UuY2xvc2VBbGxFeHBvcnRVSSgpXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnU3RhcnRTY2VuZScpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBuZXh0Q0IoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnBvd2VyID4gMCkge1xyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSsrXHJcbiAgICAgICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA+IDIwKSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA9IDFcclxuICAgICAgICAgICAgUGxheWVyRGF0YU1nci5jaGFuZ2VQb3dlcigtMSlcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX1JFQ09NTUVORFVJLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmNsb3NlQWxsRXhwb3J0VUkoKVxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lU2NlbmUnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQb3dlckJ0bkNCKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG93ZXJCdG5DQigpIHtcclxuICAgICAgICB0aGlzLkdldFBvd2VyVUkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpcHNCdG5DQigpIHtcclxuICAgICAgICB0aGlzLkdldFRpcHNVSS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlUG93ZXJUaW1lKCkge1xyXG4gICAgICAgIGxldCB0ID0gVGltZUNvdW50TWdyLlNoYXJlLnRDb3VudFxyXG4gICAgICAgIGxldCBtID0gTWF0aC5mbG9vcih0IC8gNjApXHJcbiAgICAgICAgbGV0IHMgPSBNYXRoLmZsb29yKHQgLSBtICogNjApXHJcbiAgICAgICAgdGhpcy5wb3dlclRpbWUuc3RyaW5nID0gbS50b1N0cmluZygpICsgJzonICsgcy50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wb3dlck51bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlci50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wb3dlclRpbWUubm9kZS5hY3RpdmUgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5wb3dlciA8IFBsYXllckRhdGFNZ3IucG93ZXJNYXhcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBvd2VyVGltZSgpXHJcbiAgICAgICAgdGhpcy5ncmFkZU51bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZS50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy50aXBzTnVtLnN0cmluZyA9IFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLnRpcHNOdW0udG9TdHJpbmcoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==