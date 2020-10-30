"use strict";
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