"use strict";
cc._RF.push(module, '5ead0i5Y2hHIaJFLKQdJamx', 'Stone');
// Scripts/Crl/Prop/Stone.ts

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
var Utility_1 = require("../../Mod/Utility");
var LevelBase_1 = require("../Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Stone = /** @class */ (function (_super) {
    __extends(Stone, _super);
    function Stone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveByY = 0;
        _this.moveTime = 1;
        _this.playerNode = null;
        _this.isMoveing = false;
        _this.isTriggered = false;
        return _this;
    }
    Stone_1 = Stone;
    Stone.prototype.onLoad = function () {
        Stone_1.Share = this;
        this.playerNode = LevelBase_1.default.Share.playerNode;
    };
    Stone.prototype.start = function () {
    };
    //触发事件
    Stone.prototype.triggerCB = function () {
        var _this = this;
        return new Promise(function (rs, rj) {
            _this.isMoveing = true;
            var a1 = cc.moveBy(_this.moveTime, cc.v2(0, _this.moveByY));
            var a2 = cc.callFunc(function () {
                _this.isMoveing = false;
                _this.isTriggered = true;
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    //检测是否碰到美人鱼
    Stone.prototype.collByPlayer = function () {
        if (this.playerNode) {
            var dis = Utility_1.default.getWorldDis(this.node, this.playerNode);
            if (dis <= 20 && !this.isMoveing) {
                this.playerNode.stopAllActions();
                this.node.destroy();
                LevelBase_1.default.Share.loseCB();
            }
        }
    };
    Stone.prototype.collBySharp = function () {
        if (LevelBase_1.default.Share.Sharp && LevelBase_1.default.Share.Sharp.isValid) {
            var dis = Utility_1.default.getWorldDis(this.node, LevelBase_1.default.Share.Sharp);
            if (dis <= 50 && !this.isMoveing) {
                LevelBase_1.default.Share.Sharp.stopAllActions();
                LevelBase_1.default.Share.Sharp.destroy();
            }
        }
    };
    Stone.prototype.update = function (dt) {
        this.collByPlayer();
        this.collBySharp();
    };
    var Stone_1;
    __decorate([
        property
    ], Stone.prototype, "moveByY", void 0);
    __decorate([
        property
    ], Stone.prototype, "moveTime", void 0);
    Stone = Stone_1 = __decorate([
        ccclass
    ], Stone);
    return Stone;
}(cc.Component));
exports.default = Stone;

cc._RF.pop();