
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/DefeatUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXERlZmVhdFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFnRTtBQUNoRSx1REFBa0Q7QUFDbEQscURBQWdEO0FBQ2hELHVDQUFrQztBQUNsQyxzQ0FBaUM7QUFDakMsNENBQXVDO0FBQ3ZDLDBDQUFxQztBQUUvQixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBMkZDO1FBeEZHLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFHekIsY0FBUSxHQUFhLElBQUksQ0FBQTtRQUV6QixlQUFTLEdBQWEsSUFBSSxDQUFBO1FBRzFCLGFBQU8sR0FBYSxJQUFJLENBQUE7UUFHeEIsY0FBUSxHQUFhLElBQUksQ0FBQTtRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFHeEIsZ0JBQVUsR0FBYSxJQUFJLENBQUE7UUFDM0IsYUFBTyxHQUFXLENBQUMsQ0FBQTs7SUFrRXZCLENBQUM7SUFoRUcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDekMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsdUJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUE7UUFDdkUsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFFNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUVuQyxxQkFBSyxDQUFDLFFBQVEsQ0FB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QUFhLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzFFLENBQUM7SUF2RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ1E7SUF2QlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBGNUI7SUFBRCxlQUFDO0NBMUZELEFBMEZDLENBMUZxQyxFQUFFLENBQUMsU0FBUyxHQTBGakQ7a0JBMUZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpKTWdyLCB7IEV4cG9ydERpciB9IGZyb20gXCIuLi8uLi9FeHBvcnRMaWJzL0V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IFRpbWVDb3VudE1nciBmcm9tIFwiLi4vTGlicy9UaW1lQ291bnRNZ3JcIjtcclxuaW1wb3J0IFd4QXBpIGZyb20gXCIuLi9MaWJzL1d4QXBpXCI7XHJcbmltcG9ydCBBZE1nciBmcm9tIFwiLi4vTW9kL0FkTWdyXCI7XHJcbmltcG9ydCBTaGFyZU1nciBmcm9tIFwiLi4vTW9kL1NoYXJlTWdyXCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi9Nb2QvVXRpbGl0eVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmVhdFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2V0UG93ZXJVSTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2V0VGlwc1VJOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyTnVtOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBvd2VyVGltZTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGlwc051bTogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ3JhZGVOdW06IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcm9vdE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNsb3NlQnRuOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHJldml2ZVRpbWU6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgdGltZU51bTogbnVtYmVyID0gNVxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmIChQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSA8PSAxMClcclxuICAgICAgICAgICAgV3hBcGkuYWxkRXZlbnQoJ+esrCcgKyBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS5ncmFkZSArICflhbPpgJrlhbPlpLHotKUnKVxyXG4gICAgICAgIFV0aWxpdHkucm9vdEFjdGlvbih0aGlzLnJvb3ROb2RlLCB0cnVlLCAwLjEpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jb3VudFRpbWUsIDEsIDQpXHJcblxyXG4gICAgICAgIEpKTWdyLmluc3RhbmNlLnNob3dFeHBvcnRVSShFeHBvcnREaXIuVklFV19GSU5JU0hHQU1FVUksIHsgcG9zWTogMjAwLCBvbmU6IHRydWUgfSlcclxuICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICBXeEFwaS5maXhCdG5Ub3VjaFBvcyh0aGlzLmNsb3NlQnRuLCAtNTUwLCAtMzUwLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50VGltZSgpIHtcclxuICAgICAgICB0aGlzLnRpbWVOdW0tLVxyXG4gICAgICAgIHRoaXMucmV2aXZlVGltZS5zdHJpbmcgPSB0aGlzLnRpbWVOdW0udG9TdHJpbmcoKVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVOdW0gPD0gMCkge1xyXG4gICAgICAgICAgICAvL3RoaXMuY2xvc2VCdG5DQigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldml2ZUJ0bkNCKCkge1xyXG4gICAgICAgIGxldCBjYiA9ICgpID0+IHtcclxuICAgICAgICAgICAgUGxheWVyRGF0YU1nci5jaGFuZ2VQb3dlcigyKVxyXG4gICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2UuY2xvc2VBbGxFeHBvcnRVSSgpXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZVNjZW5lJylcclxuICAgICAgICB9XHJcbiAgICAgICAgU2hhcmVNZ3IuaW5zdGFuY2Uuc2hhcmVHYW1lKGNiKVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQnRuQ0IoKSB7XHJcbiAgICAgICAgVXRpbGl0eS5yb290QWN0aW9uKHRoaXMucm9vdE5vZGUsIGZhbHNlLCAwLjEsICgpID0+IHtcclxuICAgICAgICAgICAgSkpNZ3IuaW5zdGFuY2Uuc2hvd0V4cG9ydFVJKEV4cG9ydERpci5WSUVXX1JFQ09NTUVORFVJLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBZE1nci5pbnN0YW5jZS5oaWRlQmFubmVyKClcclxuICAgICAgICAgICAgICAgIEpKTWdyLmluc3RhbmNlLmNsb3NlQWxsRXhwb3J0VUkoKVxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdTdGFydFNjZW5lJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBvd2VyQnRuQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5HZXRQb3dlclVJLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXBzQnRuQ0IoKSB7XHJcbiAgICAgICAgdGhpcy5HZXRUaXBzVUkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVBvd2VyVGltZSgpIHtcclxuICAgICAgICBsZXQgdCA9IFRpbWVDb3VudE1nci5TaGFyZS50Q291bnRcclxuICAgICAgICBsZXQgbSA9IE1hdGguZmxvb3IodCAvIDYwKVxyXG4gICAgICAgIGxldCBzID0gTWF0aC5mbG9vcih0IC0gbSAqIDYwKVxyXG4gICAgICAgIHRoaXMucG93ZXJUaW1lLnN0cmluZyA9IG0udG9TdHJpbmcoKSArICc6JyArIHMudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMucG93ZXJOdW0uc3RyaW5nID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkucG93ZXIudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMucG93ZXJUaW1lLm5vZGUuYWN0aXZlID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkucG93ZXIgPCBQbGF5ZXJEYXRhTWdyLnBvd2VyTWF4XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQb3dlclRpbWUoKVxyXG4gICAgICAgIHRoaXMuZ3JhZGVOdW0uc3RyaW5nID0gUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMudGlwc051bS5zdHJpbmcgPSBQbGF5ZXJEYXRhTWdyLmdldFBsYXllckRhdGEoKS50aXBzTnVtLnRvU3RyaW5nKClcclxuICAgIH1cclxufVxyXG4iXX0=