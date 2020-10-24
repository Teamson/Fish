"use strict";
cc._RF.push(module, '76dab/iNgFMwIBq7kOYxdpb', 'Player');
// Scripts/Crl/Player.ts

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
var LevelBase_1 = require("./Level/LevelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointNode = null;
        _this.gotMeat = false;
        _this.moveSpeed = 1;
        _this.pointIndex = 0;
        return _this;
        // update (dt) {}
    }
    Player.prototype.onLoad = function () {
        this.pointNode = LevelBase_1.default.Share.node.getChildByName('PointNode');
    };
    Player.prototype.start = function () {
    };
    //吃掉食物
    Player.prototype.eatMean = function () {
        this.gotMeat = true;
    };
    Player.prototype.moveToPoint = function (index) {
        var _this = this;
        return new Promise(function (rs, rj) {
            var a1 = cc.moveTo(_this.moveSpeed, _this.pointNode.children[index].getPosition());
            var a2 = cc.callFunc(function () {
                _this.pointIndex = index;
                rs();
            });
            var a3 = cc.sequence(a1, a2);
            _this.node.runAction(a3);
        });
    };
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();