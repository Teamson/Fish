
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