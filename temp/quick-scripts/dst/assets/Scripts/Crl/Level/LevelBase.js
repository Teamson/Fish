
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
        _this.WaterSwitch = null;
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
        this.WaterSwitch = this.node.getChildByName('WaterSwitch');
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
        this.playerCrl.aniCrl.playAnimationByName(4);
        this.scheduleOnce(function () {
            GameLogic_1.default.Share.showFinishUI();
        }, 2);
    };
    LevelBase.prototype.loseCB = function () {
        if (this.isGameOver)
            return;
        this.isGameOver = true;
        this.isWin = false;
        this.playerNode.stopAllActions();
        if (this.Sharp)
            this.Sharp.stopAllActions();
        this.playerCrl.aniCrl.playAnimationByName(2);
        this.scheduleOnce(function () {
            GameLogic_1.default.Share.showDefeatUI();
        }, 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ3JsXFxMZXZlbFxcTGV2ZWxCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCw2Q0FBd0M7QUFDeEMsMENBQXFDO0FBQ3JDLG9DQUErQjtBQUMvQixxQ0FBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLGtDQUE2QjtBQUV2QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBdUZDO1FBbkZHLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBQzFCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFDeEIsZUFBUyxHQUFXLElBQUksQ0FBQTtRQUN4QixhQUFPLEdBQVMsSUFBSSxDQUFBO1FBQ3BCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFDdkIsY0FBUSxHQUFRLElBQUksQ0FBQTtRQUNwQixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUMxQixXQUFLLEdBQVksSUFBSSxDQUFBO1FBQ3JCLGNBQVEsR0FBVSxJQUFJLENBQUE7UUFFdEIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUN4QixnQkFBVSxHQUFZLEtBQUssQ0FBQTtRQUMzQixXQUFLLEdBQVksS0FBSyxDQUFBOztJQXFFMUIsQ0FBQztrQkF0Rm9CLFNBQVM7SUFtQjFCLDBCQUFNLEdBQU47UUFDSSxXQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMs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QUFDO1lBQ2QsbUJBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDbEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELG9DQUFnQixHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQzs7SUFyRmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzRjdCO0lBQUQsZ0JBQUM7Q0F0RkQsQUFzRkMsQ0F0RnNDLEVBQUUsQ0FBQyxTQUFTLEdBc0ZsRDtrQkF0Rm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyRGF0YU1nciBmcm9tIFwiLi4vLi4vTGlicy9QbGF5ZXJEYXRhTWdyXCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuLi8uLi9Nb2QvVXRpbGl0eVwiO1xyXG5pbXBvcnQgR2FtZUxvZ2ljIGZyb20gXCIuLi9HYW1lTG9naWNcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcbmltcG9ydCBNZWF0IGZyb20gXCIuLi9Qcm9wL01lYXRcIjtcclxuaW1wb3J0IE5lZWRsZSBmcm9tIFwiLi4vUHJvcC9OZWVkbGVcIjtcclxuaW1wb3J0IFNoYXJwIGZyb20gXCIuLi9TaGFycFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNoYXJlOiBMZXZlbEJhc2VcclxuXHJcbiAgICBwbGF5ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgbWVhdE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBwbGF5ZXJDcmw6IFBsYXllciA9IG51bGxcclxuICAgIG1lYXRDcmw6IE1lYXQgPSBudWxsXHJcbiAgICBEZXNOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgbGV2ZWxDcmw6IGFueSA9IG51bGxcclxuICAgIE5lZWRsZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBTaGFycDogY2MuTm9kZSA9IG51bGxcclxuICAgIFNoYXJwQ3JsOiBTaGFycCA9IG51bGxcclxuXHJcbiAgICBXYXRlclN3aXRjaDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBjYW5Ub3VjaDogYm9vbGVhbiA9IHRydWVcclxuICAgIGlzR2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgaXNXaW46IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBMZXZlbEJhc2UuU2hhcmUgPSB0aGlzXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdQbGF5ZXInKVxyXG4gICAgICAgIHRoaXMubWVhdE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ01lYXQnKVxyXG4gICAgICAgIHRoaXMuRGVzTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnRGVzJylcclxuICAgICAgICB0aGlzLnBsYXllckNybCA9IHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoUGxheWVyKVxyXG4gICAgICAgIHRoaXMubWVhdENybCA9IHRoaXMubWVhdE5vZGUuZ2V0Q29tcG9uZW50KE1lYXQpXHJcbiAgICAgICAgdGhpcy5sZXZlbENybCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoJ0xldmVsJyArIFBsYXllckRhdGFNZ3IuZ2V0UGxheWVyRGF0YSgpLmdyYWRlKVxyXG4gICAgICAgIHRoaXMuTmVlZGxlTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnTmVlZGxlTm9kZScpXHJcbiAgICAgICAgdGhpcy5TaGFycCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU2hhcnAnKVxyXG4gICAgICAgIGlmICh0aGlzLlNoYXJwKVxyXG4gICAgICAgICAgICB0aGlzLlNoYXJwQ3JsID0gdGhpcy5TaGFycC5nZXRDb21wb25lbnQoU2hhcnApXHJcblxyXG4gICAgICAgIHRoaXMuV2F0ZXJTd2l0Y2ggPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1dhdGVyU3dpdGNoJylcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyTmVlZGxlKGluZGV4OiBudW1iZXIsIHBJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5sZXZlbENybFsndHJpZ2dlcicgKyBpbmRleC50b1N0cmluZygpICsgcEluZGV4LnRvU3RyaW5nKCldKClcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0dvdERlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm5cclxuICAgICAgICBpZiAoVXRpbGl0eS5nZXRXb3JsZERpcyh0aGlzLnBsYXllck5vZGUsIHRoaXMuRGVzTm9kZSkgPD0gMjApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ3JsLmdvdE1lYXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2luQ0IoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlQ0IoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbkNCKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWVcclxuICAgICAgICB0aGlzLmlzV2luID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMucGxheWVyTm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgaWYgKHRoaXMuU2hhcnApIHRoaXMuU2hhcnAuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgIHRoaXMucGxheWVyQ3JsLmFuaUNybC5wbGF5QW5pbWF0aW9uQnlOYW1lKDQpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBHYW1lTG9naWMuU2hhcmUuc2hvd0ZpbmlzaFVJKClcclxuICAgICAgICB9LCAyKVxyXG4gICAgfVxyXG5cclxuICAgIGxvc2VDQigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pc1dpbiA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICBpZiAodGhpcy5TaGFycCkgdGhpcy5TaGFycC5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDcmwuYW5pQ3JsLnBsYXlBbmltYXRpb25CeU5hbWUoMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIEdhbWVMb2dpYy5TaGFyZS5zaG93RGVmZWF0VUkoKVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmVlZGxlQ3JsQnlJZChpZDogbnVtYmVyKTogTmVlZGxlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5OZWVkbGVOb2RlLmNoaWxkcmVuW2lkXS5nZXRDb21wb25lbnQoTmVlZGxlKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tHb3REZXMoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==