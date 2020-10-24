
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Crl/Level/LevelBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8eb3fKy3TBPUYz0uZxx2D2O', 'LevelBase');
// Scripts/Crl/Level/LevelBase.ts

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
var PlayerDataMgr_1 = require("../../Libs/PlayerDataMgr");
var Utility_1 = require("../../Mod/Utility");
var GameLogic_1 = require("../GameLogic");
var Player_1 = require("../Player");
var Meat_1 = require("../Prop/Meat");
var Needle_1 = require("../Prop/Needle");
var Sharp_1 = require("../Sharp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelBase = /** @class */ (function (_super) {
    __extends(LevelBase, _super);
    function LevelBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playerNode = null;
        _this.meatNode = null;
        _this.playerCrl = null;
        _this.meatCrl = null;
        _this.DesNode = null;
        _this.levelCrl = null;
        _this.NeedleNode = null;
        _this.Sharp = null;
        _this.SharpCrl = null;
        _this.canTouch = true;
        _this.isGameOver = false;
        _this.isWin = false;
        return _this;
    }
    LevelBase_1 = LevelBase;
    LevelBase.prototype.onLoad = function () {
        LevelBase_1.Share = this;
        this.playerNode = this.node.getChildByName('Player');
        this.meatNode = this.node.getChildByName('Meat');
        this.DesNode = this.node.getChildByName('Des');
        this.playerCrl = this.playerNode.getComponent(Player_1.default);
        this.meatCrl = this.meatNode.getComponent(Meat_1.default);
        this.levelCrl = this.node.getComponent('Level' + PlayerDataMgr_1.default.getPlayerData().grade);
        this.NeedleNode = this.node.getChildByName('NeedleNode');
        this.Sharp = this.node.getChildByName('Sharp');
        if (this.Sharp)
            this.SharpCrl = this.Sharp.getComponent(Sharp_1.default);
    };
    LevelBase.prototype.start = function () {
    };
    LevelBase.prototype.triggerNeedle = function (index, pIndex) {
        this.canTouch = false;
        this.levelCrl['trigger' + index.toString() + pIndex.toString()]();
    };
    LevelBase.prototype.checkGotDes = function () {
        if (this.isGameOver)
            return;
        if (Utility_1.default.getWorldDis(this.playerNode, this.DesNode) <= 20) {
            if (this.playerCrl.gotMeat) {
                this.winCB();
            }
            else {
                this.loseCB();
            }
        }
    };
    LevelBase.prototype.winCB = function () {
        if (this.isGameOver)
            return;
        this.isGameOver = true;
        this.isWin = true;
        this.playerNode.stopAllActions();
        if (this.Sharp)
            this.Sharp.stopAllActions();
        GameLogic_1.default.Share.showFinishUI();
    };
    LevelBase.prototype.loseCB = function () {
        if (this.isGameOver)
            return;
        this.isGameOver = true;
        this.isWin = false;
        this.playerNode.stopAllActions();
        if (this.Sharp)
            this.Sharp.stopAllActions();
        GameLogic_1.default.Share.showDefeatUI();
    };
    LevelBase.prototype.getNeedleCrlById = function (id) {
        return this.NeedleNode.children[id].getComponent(Needle_1.default);
    };
    LevelBase.prototype.update = function (dt) {
        this.checkGotDes();
    };
    var LevelBase_1;
    LevelBase = LevelBase_1 = __decorate([
        ccclass
    ], LevelBase);
    return LevelBase;
}(cc.Component));
exports.default = LevelBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWxCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCw2Q0FBd0M7QUFDeEMsMENBQXFDO0FBQ3JDLG9DQUErQjtBQUMvQixxQ0FBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLGtDQUE2QjtBQUV2QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBNkVDO1FBekVHLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBQzFCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFDeEIsZUFBUyxHQUFXLElBQUksQ0FBQTtRQUN4QixhQUFPLEdBQVMsSUFBSSxDQUFBO1FBQ3BCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFDdkIsY0FBUSxHQUFRLElBQUksQ0FBQTtRQUNwQixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUMxQixXQUFLLEdBQVksSUFBSSxDQUFBO1FBQ3JCLGNBQVEsR0FBVSxJQUFJLENBQUE7UUFFdEIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUN4QixnQkFBVSxHQUFZLEtBQUssQ0FBQTtRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFBOztJQTZEMUIsQ0FBQztrQkE1RW9CLFNBQVM7SUFpQjFCLDBCQUFNLEdBQU47UUFDSSxXQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENB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QTRFQyxDQTVFc0MsRUFBRSxDQUFDLFNBQVMsR0E0RWxEO2tCQTVFb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhTWdyIGZyb20gXCIuLi8uLi9MaWJzL1BsYXllckRhdGFNZ3JcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uLy4uL01vZC9VdGlsaXR5XCI7XHJcbmltcG9ydCBHYW1lTG9naWMgZnJvbSBcIi4uL0dhbWVMb2dpY1wiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuaW1wb3J0IE1lYXQgZnJvbSBcIi4uL1Byb3AvTWVhdFwiO1xyXG5pbXBvcnQgTmVlZGxlIGZyb20gXCIuLi9Qcm9wL05lZWRsZVwiO1xyXG5pbXBvcnQgU2hhcnAgZnJvbSBcIi4uL1NoYXJwXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgU2hhcmU6IExldmVsQmFzZVxyXG5cclxuICAgIHBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBtZWF0Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIHBsYXllckNybDogUGxheWVyID0gbnVsbFxyXG4gICAgbWVhdENybDogTWVhdCA9IG51bGxcclxuICAgIERlc05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBsZXZlbENybDogYW55ID0gbnVsbFxyXG4gICAgTmVlZGxlTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIFNoYXJwOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgU2hhcnBDcmw6IFNoYXJwID0gbnVsbFxyXG5cclxuICAgIGNhblRvdWNoOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBpc1dpbjogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIExldmVsQmFzZS5TaGFyZSA9IHRoaXNcclxuICAgICAgICB0aGlzLnBsYXllck5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1BsYXllcicpXHJcbiAgICAgICAgdGhpcy5tZWF0Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnTWVhdCcpXHJcbiAgICAgICAgdGhpcy5EZXNOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdEZXMnKVxyXG4gICAgICAgIHRoaXMucGxheWVyQ3JsID0gdGhpcy5wbGF5ZXJOb2RlLmdldENvbXBvbmVudChQbGF5ZXIpXHJcbiAgICAgICAgdGhpcy5tZWF0Q3JsID0gdGhpcy5tZWF0Tm9kZS5nZXRDb21wb25lbnQoTWVhdClcclxuICAgICAgICB0aGlzLmxldmVsQ3JsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudCgnTGV2ZWwnICsgUGxheWVyRGF0YU1nci5nZXRQbGF5ZXJEYXRhKCkuZ3JhZGUpXHJcbiAgICAgICAgdGhpcy5OZWVkbGVOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdOZWVkbGVOb2RlJylcclxuICAgICAgICB0aGlzLlNoYXJwID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTaGFycCcpXHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnApXHJcbiAgICAgICAgICAgIHRoaXMuU2hhcnBDcmwgPSB0aGlzLlNoYXJwLmdldENvbXBvbmVudChTaGFycClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlck5lZWRsZShpbmRleDogbnVtYmVyLCBwSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGV2ZWxDcmxbJ3RyaWdnZXInICsgaW5kZXgudG9TdHJpbmcoKSArIHBJbmRleC50b1N0cmluZygpXSgpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tHb3REZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuXHJcbiAgICAgICAgaWYgKFV0aWxpdHkuZ2V0V29ybGREaXModGhpcy5wbGF5ZXJOb2RlLCB0aGlzLkRlc05vZGUpIDw9IDIwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllckNybC5nb3RNZWF0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbkNCKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUNCKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5DQigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pc1dpbiA9IHRydWVcclxuICAgICAgICB0aGlzLnBsYXllck5vZGUuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwKSB0aGlzLlNoYXJwLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICBHYW1lTG9naWMuU2hhcmUuc2hvd0ZpbmlzaFVJKClcclxuICAgIH1cclxuXHJcbiAgICBsb3NlQ0IoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNXaW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucGxheWVyTm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnApIHRoaXMuU2hhcnAuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgIEdhbWVMb2dpYy5TaGFyZS5zaG93RGVmZWF0VUkoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldE5lZWRsZUNybEJ5SWQoaWQ6IG51bWJlcik6IE5lZWRsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuTmVlZGxlTm9kZS5jaGlsZHJlbltpZF0uZ2V0Q29tcG9uZW50KE5lZWRsZSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmNoZWNrR290RGVzKClcclxuICAgIH1cclxufVxyXG4iXX0=